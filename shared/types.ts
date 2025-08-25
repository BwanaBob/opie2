// Shared types for the opie2 platform

export interface Guild {
  id: string;
  name: string;
  prefix: string;
  settings: Record<string, any>;
}

export interface User {
  id: string;
  guildId: string;
  username: string;
}

export interface Command {
  id: string;
  guildId: string;
  name: string;
  description: string;
  enabled: boolean;
}
