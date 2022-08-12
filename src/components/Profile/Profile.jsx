import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = user => {
  const { username, tag, location, avatar, stats } = user;
  const {
    profile,
    description,
    ava,
    name,
    usertag,
    userLocation,
    statsList,
    label,
    quantity,
  } = styles;

  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt={tag} className={ava} />
        <p className={name}>{username}</p>
        <p className={usertag}>@{tag}</p>
        <p className={userLocation}>{location}</p>
      </div>

      <ul className={statsList}>
        <li>
          <span className={label}>Followers </span>
          <span className={quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={label}>Views </span>
          <span className={quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={label}>Likes </span>
          <span className={quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
