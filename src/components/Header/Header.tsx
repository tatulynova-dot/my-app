import { Text } from '../Text/Text';
import styles from './Header.module.css';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Text size="xlarge" weight="semibold" color="primary">
          Profiles
        </Text>
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
          <Text size="medium" weight="medium" color="accent-green">
            + Create new profile
          </Text>
        </button>
        <button className={styles.foldersBtn}>
          <Text size="medium" weight="normal">
            📁 Folders
          </Text>
        </button>
        <div className={styles.userAvatar}>
          <Text size="large" weight="semibold">
            S
          </Text>
        </div>
      </div>
    </header>
  );
};