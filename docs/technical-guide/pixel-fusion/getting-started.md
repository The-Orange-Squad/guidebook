# Getting Started with PixelFusion

To get started with PixelFusion, you'll need to create a new board to draw on. Here's a step-by-step guide on how to create your first board and start drawing:

## Creating a New Board

To create a new board, use the `/create` command followed by the dimensions and name of the board. For example, to create a 10x10 board named "My Board", you would use the following command:

```
/create 10x10 My Board
```

This will create a new board with the specified dimensions and name. Supporters can create boards up to 1000x1000 pixels, while non-supporters can create boards up to 200x200 pixels.

## Drawing on the Board

Once you've created a board, you can start drawing on it using the `/place` command. This command allows you to place a pixel on the board at the specified coordinates with the specified color. For example, to place a red pixel at coordinates (5,5), you would use the following command:

```
/place 5 5 red
```

This will place a red pixel at coordinates (5,5) on the board. You can use the `/colors` command to view all the available colors that you can use to draw on the board.

## Viewing Your Pixels

To view all the pixels you've placed on the board, you can use the `/mypixels` command. This will display all the pixels you've placed along with their coordinates and colors. You can also use the `/whoplaced` command to view the user who placed a pixel at the specified coordinates.

## Editing the Board

If you want to edit the board, you can use the `/edit` command. This command allows you to edit the selected board by changing its dimensions or name. Only the board owner can use this command.

## Clearing the Board

To clear all the pixels on the board, you can use the `/clear` command. This will remove all the pixels from the board, allowing you to start fresh. Only the board owner can use this command.

## Magic Tools

PixelFusion also comes with a set of magic tools that allow you to perform advanced actions on the board. Refer to [magic-tools.md](magic-tools.md) for more information on how to use these tools.