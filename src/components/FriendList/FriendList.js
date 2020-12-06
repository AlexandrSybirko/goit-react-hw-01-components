import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendListItem'
import s from './FriendList.module.css'

const FriendList = ({ friends }) => (
    <ul className={s.friendlist}>
        {friends.map(friend => (
            <FriendsItem
                     key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
                />
            
        ))}
    </ul>
)
    
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;