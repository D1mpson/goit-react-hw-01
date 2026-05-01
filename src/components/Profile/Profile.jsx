import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profile}>
            <div className={css.info}>
                <img
                    className={css.profileImage}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.otherInfo}>@{tag}</p>
                <p className={css.otherInfo}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.itemName}>Followers</span>
                    <span className={css.itemValue}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.itemName}>Views</span>
                    <span className={css.itemValue}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.itemName}>Likes</span>
                    <span className={css.itemValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}