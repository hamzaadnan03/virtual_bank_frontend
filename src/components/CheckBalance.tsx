import React, { useEffect, useState } from "react";
import api from "../config/axios";

const CheckBalance: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/accounts/balance", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setBalance(response.data.balance);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>Current Balance: {balance}</h3>
    </div>
  );
};

export default CheckBalance;
