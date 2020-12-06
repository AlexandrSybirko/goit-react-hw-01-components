import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';


const Profile = ({name, tag, avatar, location, stats}) => (<div className={s.profile}>
  
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <div className={s.description}>
    <p className={s.name}>{name}</p>
    <p >{tag}</p>
    <p >{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.item}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


export default Profile;
