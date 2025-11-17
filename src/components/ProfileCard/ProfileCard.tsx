import { Profile } from '../../types/profile';
import { Text } from '../Text/Text';
import styles from './ProfileCard.module.css';
import { AppleIcon } from '../icons/AppleIcon';
import { LinuxIcon } from '../icons/LinuxIcon';
import { WindowsIcon } from '../icons/WindowsIcon';
import { SettingsIcon } from '../icons/SettingsIcon';


interface ProfileCardProps {
  profile: Profile;
  onToggleStatus: (id: string) => void;
}

export const ProfileCard = ({ profile, onToggleStatus }: ProfileCardProps) => {
  const isRunning = profile.status === 'Running';
  
  const renderOsIcon = () => {
    switch (profile.os) {
      case 'linux':
        return <LinuxIcon size={20} />;
      case 'windows':
        return <WindowsIcon size={20} />;
      case 'apple':
      default:
        return <AppleIcon size={20} />;
    }
  };
  
  return (
    <div className={styles.card}>
      {/* Аватар */}
      <div className={styles.avatar}>
        <Text size="large" weight="semibold">
          {profile.name.charAt(0).toUpperCase()}
        </Text>
      </div>
      
      {/* Информация о профиле */}
      <div className={styles.info}>
        <Text size="large" weight="semibold" color="primary">
          {profile.name}
        </Text>
        <Text size="medium" color="secondary" weight="semibold"> 
          {profile.folder}
        </Text>
      </div>
      
      {/* Статус */}
      <div className={styles.statusBadge}>
        <span className={`${styles.indicator} ${isRunning ? styles.running : styles.ready}`} />
        <Text size="medium" color="secondary" weight="semibold">
          {profile.status}
        </Text>
      </div>
      
      {/* Иконка */}
      <div className={styles.icon}>
        {renderOsIcon()}
      </div>
      
      {/* Дата */}
      <div className={styles.lastRun}>
        <Text size="medium" color="secondary">
          Last run {profile.lastRun.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
          })}
        </Text>
      </div>
      
      {/* Кнопка действия */}
      <button 
        className={`${styles.actionBtn} ${isRunning ? styles.stopBtn : styles.runBtn}`}
        onClick={() => onToggleStatus(profile.id)}
      >
        <Text size="medium" weight="semibold">
          {isRunning ? 'Stop' : 'Run profile'}
        </Text>
      </button>
      
      {/* Кнопка настроек */}
      <button className={styles.settingsBtn}>
        <SettingsIcon size={43
        } />
      </button>
    </div>
  );
};