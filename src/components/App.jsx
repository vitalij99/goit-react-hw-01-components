import FriendList from "./friendlist/FriendList";
import Profile from "./profile/Profile";
import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import transactions from "../database/transactions.json";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactions/Transactions";

export const App = () => {
  return (
    <>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
