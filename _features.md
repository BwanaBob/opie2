# Bot Features

## Core Bot
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Command Handler** | Modular slash command system. Each command lives in its own file and is auto-registered at startup.| ⛔ |
| **Event Handler** | Modular event system. Supports message reactions, user joins/leaves, server boosts, and other Discord events.| ⛔ |
| **Regex Auto-Reactions** | When messages match configurable regex patterns, the bot reacts with tailored emojis.| ⛔ |
| **Job Scheduler** | Cron-based job system for announcements, reminders, and recurring tasks.| ⛔ |
| **Logging** | Output system messages and errors to log files with timestamps and consistent formatting. | ⛔ |

## Moderation Tools
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Slash Commands** | for some bot configuration, canned announcements, etc. | ⛔ |
| **Moderator Todo List** | Scheduled reminders for moderators (e.g., to-dos) with the ability to check of completed tasks using discord buttons. | ⛔ |

## AI Chatbot
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **OpenAI Integration** | Chatbot using the OpenAI API. | ⛔ |
| **RAG Pipeline** | Retrieve relevant data from Chroma vector DB to provide context-aware responses. | ⛔ |
| **Custom Prompts** | Configurable prompts per guild, stored in the database. | ⛔ |

## AI Text Generation
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **OpenAI Integration** | Ability to generate fresh unique text for recurring announcements using the OpenAI API. | ⛔ |
| **Timely Prompts** | Use of the options database schema and web front-end to provide up to date programming information for these announcements |

## Recognition System (All-Star List)
The All-Star List tracks reactions to messages during the show's live chats. After each episode, we tally all qualifying emojis used (configurable) in the specified channel(s). That data is used to generate a rolling leaderboard of the top 10 (configurable) members over a 10 (configurable) episode period. Only the top message for each user is counted per episode.
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Points Tracking** | Award points to users based on message reactions within a specified time window related to live episodes. | ⛔ |
| **Leaderboards** | Display top users by points. | ⛔ |
| **Participation Logs** | Store message data related to earned points. | ⛔ |
| **Configurable Rules** | Enable/disable starboard features and adjust scoring via dashboard. | ⛔ |

## Web Dashboard
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Discord OAuth2 Login** | Auth system for mods/admins. | ⛔ |
| **Feature Toggles** | Enable/disable features per guild. | ⛔ |
| **Prompt Management** | Create, edit, and delete chatbot prompts. | ⛔ |
| **Scheduler Management** | Add, edit, and remove cron jobs. | ⛔ |
| **Leaderboard Viewer** | Display starboard/recognition leaderboards. | ⛔ |
| **Moderation Logs Viewer** | Show moderation actions history. | ⛔ |

## Database
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Options Schema** | Per-server configuration of bot preferences, job specific options, event options, reminder txt, etc. | ⛔ |
| **FeatureToggle Table** | Enable/disable features per guild. | ⛔ |
| **Prompt Table** | Stores AI prompts per guild for use with the chatbot and announcement features. | ⛔ |
| **StarboardEntry Schema** | Records user recognition events. Including message reactions and stored tallies for tracking user position changes, streaks, etc. | ⛔ |

---

This feature list defines the functional requirements for the Discord bot, its API, and the web dashboard. Copilot should use this document in conjunction with `.copilot-instructions.md` to generate code aligned with the project’s goals.
