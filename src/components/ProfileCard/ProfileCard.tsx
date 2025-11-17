import { Profile } from '../../types/profile';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  profile: Profile;
  onToggleStatus: (id: string) => void;
}

export const ProfileCard = ({ profile, onToggleStatus }: ProfileCardProps) => {
  const isRunning = profile.status === 'Running';
  
  return (
    <div className={styles.card}>
      {/* Аватар */}
      <div className={styles.avatar}>
        {profile.name.charAt(0).toUpperCase()}
      </div>
      
      {/* Информация о профиле */}
      <div className={styles.info}>
        <h3 className={styles.name}>{profile.name}</h3>
        <p className={styles.folder}>{profile.folder}</p>
      </div>
      
      {/* Статус */}
      <div className={styles.statusBadge}>
        <span className={`${styles.indicator} ${isRunning ? styles.running : styles.ready}`} />
        {profile.status}
      </div>
      
      {/* Иконка (заглушка) */}
      <div className={styles.icon}>
        {profile.folder === 'JustFolder1' ? '🍎' : '📦'}
      </div>
      
      {/* Дата */}
      <div className={styles.lastRun}>
        Last run {profile.lastRun.toLocaleDateString('en-GB', { 
          day: 'numeric', 
          month: 'short', 
          year: 'numeric' 
        })}
      </div>
      
      {/* Кнопка действия */}
      <button 
        className={`${styles.actionBtn} ${isRunning ? styles.stopBtn : styles.runBtn}`}
        onClick={() => onToggleStatus(profile.id)}
      >
        {isRunning ? 'Stop' : 'Run profile'}
      </button>
      
      {/* Кнопка настроек */}
      <button className={styles.settingsBtn}>
        ⚙️
      </button>
    </div>
  );
};