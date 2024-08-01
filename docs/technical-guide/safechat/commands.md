# Orange SafeChat Commands

The Orange SafeChat bot provides a set of commands that allow you to interact with the chat filter and moderation features. Here is a list of available commands:

## Moderator-Only Commands

- `/blacklist` - Add a word or phrase to the blacklist. Messages containing blacklisted words will be automatically deleted. After it is added, some time may be required for the bot to update its cache and retrain the AI.
- `/clear_word` - Remove a word or phrase from the blacklist or whitelist.
- `/notes create` - Create a note for a user. This can be used to keep track of warnings, bans, or other actions taken against a user.
- `/notes delete` - Delete a note for a user.
- `/notes list` - List all notes for a user.
- `/track list` - List all tracked users.
- `/track remove_inactive` - Remove all inactive tracked users. This will remove users who have not sent a message in the last 30 days.
- `/track start` - Start tracking a user. This will log all messages sent by the user for moderation purposes.
- `/track stop` - Stop tracking a user. This will stop logging messages sent by the user.
- `/whitelist` - Add a word or phrase to the whitelist. Messages containing whitelisted words will not be filtered and are exempt from moderation.
- `/word_status` - Check the status of a word or phrase in the filter. This will show whether the word is blacklisted, whitelisted, or not in the filter.

## User Commands

- `/report` - Report a user to the server staff for violating the rules or being disrespectful. This will notify the staff members and provide them with the necessary information to take action. Please use this command responsibly and only for legitimate reports. False reports can result in penalties.
- `/help` - Display a list of available commands and their descriptions.