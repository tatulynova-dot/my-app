import { Profile, SortOption } from '../types/profile';

export const sortProfiles = (profiles: Profile[], sortOption: SortOption): Profile[] => {
  const sorted = [...profiles];
  
  switch (sortOption) {
    case 'lastUpdate':
      return sorted.sort((a, b) => b.lastRun.getTime() - a.lastRun.getTime());
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'status':
      return sorted.sort((a, b) => a.status.localeCompare(b.status));
    default:
      return sorted;
  }
};