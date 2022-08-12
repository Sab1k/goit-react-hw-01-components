import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.list}>
            {friends.map(friend => (
                <li className={styles.unit} key={friend.id}>
                    <FriendsListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

export default FriendsList;
