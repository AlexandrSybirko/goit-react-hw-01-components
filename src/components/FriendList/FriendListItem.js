import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

const FriendsItem = ({ avatar, name, isOnline}) => (<li className={s.item}
        >
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p>{name}</p>
    </li>
)


FriendsItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    
}
        
export default FriendsItem;