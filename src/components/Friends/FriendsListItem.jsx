import styles from './FriendsList.module.css';

const { userStatus, userPic, userName } = styles;

const FriendsListItem = ({ avatar, name, isOnline }) => {
    const statusStyle = isOnline ? 'green' : 'red';
    return (
        <>
            <span
                className={userStatus}
                style={{ backgroundColor: statusStyle }}
            ></span>
            <img
                className={userPic}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={userName}>{name}</p>
        </>
    );
};

export default FriendsListItem;
