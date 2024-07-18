# Polls

Orange Assistant includes functionality for some basic polls, but as of now it's pretty limited and a bit useless as Discord has introduced its own poll feature. However, it's still available for use if you want to create a poll with more than 10 options or if you want to use the `/poll` command for some reason.

## How to Create a Poll

To create a poll, use the `/poll` command followed by the question and the options. For example, to create a poll asking "What is your favorite color?" with the options "Red", "Blue", and "Green", you would use `/poll What is your favorite color? Red, Blue, Green`.

The bot will then create a poll with the question and options you provided, and users can vote by reacting to the message with the corresponding emoji.

## How to Vote on a Poll

To vote on a poll, simply react to the message with the corresponding emoji for the option you want to vote for. You can only vote once, and you can't change your vote once it's been cast.

## Message Vote Command

There is a message vote command that lets you create a small "Vote" from a message. This is useful for when you want to quickly poll something without creating a full poll. To use this command, simply react to a message with the upvote and downvote emojis. The bot will then count the votes and display the results.

## How to End a Poll

Impossible for now, unfortunately. Not like there is even an expiration period. Blame Lyu for not implementing it yet.

## How to View Poll Results

Simply count the reactions on the poll message. The bot doesn't provide a command to view the results, but you can easily see the number of votes for each option by checking the reactions on the message. Once again, blame Lyu.