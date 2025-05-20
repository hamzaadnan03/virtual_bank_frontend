import CheckBalance from "../components/CheckBalance";
import DepositMoney from "../components/DepositMoney";
import Navbar from "../components/Navbar";
import TransactionHistory from "../components/TransactionHistory";
import WithdrawMoney from "../components/WithdrawMoney";

const Home: React.FC = () => {
  return (
    <div className="w-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center">
        <CheckBalance />
        <DepositMoney />
        <WithdrawMoney />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Home;
