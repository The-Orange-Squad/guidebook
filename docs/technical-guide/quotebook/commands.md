# Orange Quotebook Commands

The Orange Quotebook bot provides a set of commands that allow you to interact with the quotebook. Here is a list of available commands:

- `/delete_all` - Delete all quotes from your quotebook.
- `/edit_quote` - Edit a quote in your quotebook. You must provide the quote ID and the new text.
- `/export` - Export all quotes from your quotebook to a data file. Can be used to backup and reimport quotes.
- `/help` - Display a list of available commands and their descriptions.
- `/quotebook` - Displays the quotebook with all quotes of the selected user.
- `/random_quote` - Get a random quote from any user's quotebook.
- `/random_user_quote` - Get a random quote from the quotebook of a specific user.
- `/remove` - Remove a quote from your quotebook. You must provide the quote ID.
- `/save` - Save a quote to your quotebook. You must provide the quote text.
- `/search` - Search for a quote in someone's quotebook. You must provide the search query and the user's name.

## Message Commands

The Orange Quotebook bot also supports message commands that allow you to interact with the quotebook directly from Discord messages. Here is a list of available message commands:

- `Save` - Saves the message as a quote to your quotebook if you're the author.
- `Import Quotebook` - Imports quotes from a data file to your quotebook. Can be used to restore quotes from a backup. Only the author of the message can use this command.