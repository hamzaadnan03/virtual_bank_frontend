import { useState } from "react";
import api from "../config/axios";

const WithdrawMoney: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleWithdraw = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.post(
        `/accounts/withdraw`,
        { amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Withdrawal failed.");
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Withdraw Money</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={handleWithdraw}>Withdraw</button>
      <p>{message}</p>
    </div>
  );
};

export default WithdrawMoney;
