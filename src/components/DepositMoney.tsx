import { useState } from "react";
import api from "../config/axios";

const DepositMoney: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleDeposit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.post(
        `/accounts/deposit`,
        { amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Deposit failed.");
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Deposit Money</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <p>{message}</p>
    </div>
  );
};

export default DepositMoney;
