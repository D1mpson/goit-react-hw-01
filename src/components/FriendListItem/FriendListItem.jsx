import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendListItem}>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
      <span>
        {isOnline ? (
          <p className={css.online}>Online</p>
        ) : (
          <p className={css.offline}>Offline</p>
        )}
      </span>
    </li>
  );
}