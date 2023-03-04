import FriendList from "./friendlist/FriendList";
import Profile from "./profile/Profile";
import user from '../database/user.json';

export const App = () => {
  return (
    <>
       < Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    </>
  );
};
