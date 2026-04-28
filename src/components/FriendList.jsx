import FriendListItem from './FriendListItem';

export default function ({ friends }) {
    return (
        <ul>
            <li>
                {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
            </li>
        </ul>
    );
}