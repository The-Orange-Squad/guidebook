const express = require('express');
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

const app = express();
const port = 3000;
const docsDir = path.join(__dirname, '../docs');

const md = new markdownIt();

// Serve static files from the docs directory
app.use('/docs', express.static(docsDir));
// Serve static CSS
app.use(express.static(path.join(__dirname, 'public')));

// Function to read all Markdown and media files
const readMarkdownFilesAndMedia = (dir, filelist = {}) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readMarkdownFilesAndMedia(filePath, filelist);
        } else if (file.endsWith('.md')) {
            const relativePath = path.relative(docsDir, filePath);
            filelist[relativePath.replace(/\\/g, '/')] = fs.readFileSync(filePath, 'utf-8');
        } else {
            const mediaRelativePath = `docs/${path.relative(docsDir, filePath).replace(/\\/g, '/')}`;
            filelist[mediaRelativePath] = null;
        }
    });
    return filelist;
};

// Convert Markdown to HTML and replace links with appropriate routes
const convertMdToHtmlWithRoutes = (markdownContent, currentRoute) => {
    let htmlContent = md.render(markdownContent);

    // Replace Markdown file links for correct routing
    const linkRegex = /href="([^"]+\.md)"/g;
    htmlContent = htmlContent.replace(linkRegex, (match, link) => {
        if (link.endsWith('.md')) {
            const normalizedLink = path.join(path.dirname(currentRoute), link).replace(/\\/g, '/').replace(/\.md$/, '');
            return `href="/${normalizedLink}"`;
        }
        return match;
    });

    // Replace media file links to point to /docs folder
    const mediaExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'pdf'];
    const mediaRegex = new RegExp(`src="([^"]+\\.(${mediaExtensions.join('|')}))"`, 'g');
    htmlContent = htmlContent.replace(mediaRegex, (match, link) => {
        const normalizedMediaLink = path.join(path.dirname(currentRoute), link).replace(/\\/g, '/');
        return `src="/docs/${normalizedMediaLink}"`;
    });

    return htmlContent;
};

// Read and convert all Markdown files
const markdownFiles = readMarkdownFilesAndMedia(docsDir);
const htmlFiles = {};
for (const [filePath, content] of Object.entries(markdownFiles)) {
    if (content !== null) {
        const routePath = filePath.replace(/\.md$/, '');
        htmlFiles[routePath] = convertMdToHtmlWithRoutes(content, routePath);
    }
}

// Define generated routes for HTML files
for (const [route, htmlContent] of Object.entries(htmlFiles)) {
    app.get(`/${route}`, (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/styles.css">
                <title>Markdown Documentation</title>
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
        `);
    });
}

// Redirect root to a specific starting page or handle the default landing page
app.get('/', (req, res) => {
    res.redirect('/index'); // Adjust the target route as needed.
});

// Catch-all route to handle unknown paths
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});