# Version 2 of the OPie Discord bot.
Since adding RAG, sqlite, and other services to the original simple bot, it outgrew it's architecture.
This version will attempt to split services into docker containers for the bot, database, web, api, etc.

## Features
### Bot
    A node.js and discordjs bot with job scheduler, event handler, etc.

### Database
    A postgres database containing:
    - Per server bot options
    - All-Star data

### NextJS web admin panel
    Allows moderators to enable and disable functions and change their configurable options.
    - All-Star data inspection/modification
    - AI prompts

