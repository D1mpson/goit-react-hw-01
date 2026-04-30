export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
      <span>
        {isOnline ? (
          <p>Online</p>
        ) : (
          <p>Offline</p>
        )}
      </span>
    </li>
  );
}