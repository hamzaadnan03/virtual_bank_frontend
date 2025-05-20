import CheckBalance from "../components/CheckBalance";
import DepositMoney from "../components/DepositMoney";
import Navbar from "../components/Navbar";
import TransactionHistory from "../components/TransactionHistory";
import WithdrawMoney from "../components/WithdrawMoney";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CheckBalance />
      <DepositMoney />
      <WithdrawMoney />
      <TransactionHistory />
    </div>
  );
};

export default Home;
