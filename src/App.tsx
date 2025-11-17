import { useState } from 'react';
import { mockProfiles } from './data/mockProfiles';
import { Profile, TabItem, SortOption } from './types/profile';
import { Header } from './components/Header/Header';
import { TabNavigation } from './components/TabNavigation/TabNavigation';
import styles from './App.module.css';
import { sortProfiles } from './utils/sortProfiles';
import { ProfileList } from './components/ProfileList/ProfileList';

const tabs: TabItem[] = [
  { id: 'all', label: 'All Profiles' },
  { id: 'seller', label: 'SellerProfiles', folder: 'SellerProfiles' },
  { id: 'just', label: 'JustFolder1', folder: 'JustFolder1' },
  { id: 'more', label: 'More Folder', folder: 'More Folder' },
];

function App() {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('lastUpdate');

  const handleToggleStatus = (id: string) => {
    setProfiles(profiles.map(profile => 
      profile.id === id 
        ? { ...profile, status: profile.status === 'Ready' ? 'Running' : 'Ready' }
        : profile
    ));
  };

  // Фильтрация по вкладке
  const filteredByTab = activeTab === 'all' 
    ? profiles 
    : profiles.filter(profile => {
        const activeTabData = tabs.find(tab => tab.id === activeTab);
        return profile.folder === activeTabData?.folder;
      });

  
  // Фильтрация по поиску
  const filteredProfiles = sortProfiles(
  filteredByTab.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  ),
  sortOption  
);

  
  return (
  <div className={styles.app}>
    <Header onSearch={setSearchQuery} />
    <TabNavigation 
      tabs={tabs} 
      activeTab={activeTab} 
      onTabChange={setActiveTab}
      sortOption={sortOption}
      onSortChange={setSortOption}
    />
    
    <ProfileList 
      profiles={filteredProfiles}
      onToggleStatus={handleToggleStatus}
    />
  </div>
);
}

export default App;
