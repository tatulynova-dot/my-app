import { TabItem, SortOption } from '../../types/profile';
import styles from './TabNavigation.module.css';

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export const TabNavigation = ({ 
  tabs, 
  activeTab, 
  onTabChange,
  sortOption,
  onSortChange 
}: TabNavigationProps) => {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <select 
        className={styles.sortSelect}
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
      >
        <option value="lastUpdate">Last Update</option>
        <option value="name">Name</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
};