import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className={styles.list}>
            {friends.map(FriendListItem)}
        </ul>
    );
}


function FriendListItem({ avatar, name, isOnline, id })  {
    return (
        <li key={id} className={styles.item}>
            <span className={isOnline ? `${styles.status} ${styles.active}` : styles.status}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar " width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList