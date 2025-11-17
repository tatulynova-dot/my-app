import styles from './Header.module.css';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Profiles</h1>
        <div className={styles.searchWrapper}>
          <input 
            type="text" 
            placeholder="Search in profiles..."
            className={styles.searchInput}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <button className={styles.createBtn}>
          + Create new profile
        </button>
        <button className={styles.foldersBtn}>
          📁 Folders
        </button>
        <div className={styles.userAvatar}>S</div>
      </div>
    </header>
  );
};