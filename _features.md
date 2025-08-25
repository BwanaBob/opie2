# Bot Features

## Core Bot
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Command Handler** | Modular slash command system. Each command lives in its own file and is auto-registered at startup.| ⛔ |
| **Event Handler** | Modular event system. Supports message reactions, user joins/leaves, server boosts, and other Discord events.| ⛔ |
| **Regex Auto-Reactions** | When messages match configurable regex patterns, the bot reacts with tailored emojis.| ⛔ |
| **Scheduler** | Cron-based job system for announcements, reminders, and recurring tasks.| ⛔ |

## Moderation Tools
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Slash Commands** | for some bot configuration, canned announcements, etc. | ⛔ |
| **Logging** | Output system messages and errors to log files. | ⛔ |
| **Reminders** | Scheduled reminders for moderators (e.g., to-dos) with the ability to check of completed tasks. | ⛔ |

## AI Chatbot
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **OpenAI Integration** | Chatbot using the OpenAI API. | ⛔ |
| **RAG Pipeline** | Retrieve relevant data from Chroma vector DB to provide context-aware responses. | ⛔ |
| **Custom Prompts** | Configurable prompts per guild, stored in the database. | ⛔ |

## Recognition System (Starboard)
| Item | Description | Complete |
|:-----|:------------|:--------:|
| **Points Tracking** | Award points to users based on message reactions within a specified time window related to live episodes. | ⛔ |
| **Leaderboards** | Display top users by points. | ⛔ |
| **Participation Logs** | Store events that earned points. | ⛔ |
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
| **Guild Table** | Per-server configuration. | ⛔ |
| **FeatureToggle Table** | Enable/disable features per guild. | ⛔ |
| **Prompt Table** | Stores AI prompts per guild. | ⛔ |
| **StarboardEntry Table** | Records user recognition events. | ⛔ |
| **ScheduledJob Table** | Cron jobs and reminders. | ⛔ |
| **ModAction Table** | Stores moderation actions. | ⛔ |

---

This feature list defines the functional requirements for the Discord bot, its API, and the web dashboard. Copilot should use this document in conjunction with `.copilot-instructions.md` to generate code aligned with the project’s goals.
