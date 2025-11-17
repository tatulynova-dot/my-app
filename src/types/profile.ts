export interface Profile {
  id: string;
  name: string;
  folder: 'JustFolder1' | 'SellerProfiles' | 'More Folder';
  status: 'Ready' | 'Running';
  lastRun: Date;
  avatar?: string;
}

export interface TabItem {
  id: string;
  label: string;
  folder?: string;
}

export type SortOption = 'lastUpdate' | 'name' | 'status';