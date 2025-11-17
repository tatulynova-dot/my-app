import { Profile } from '../../types/profile';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import styles from './ProfileList.module.css';

interface ProfileListProps {
  profiles: Profile[];
  onToggleStatus: (id: string) => void;
}

export const ProfileList = ({ profiles, onToggleStatus }: ProfileListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.profilesList}>
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id} 
            profile={profile}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};