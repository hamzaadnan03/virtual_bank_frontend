import { useEffect, useState } from "react";
import api from "../config/axios";

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/accounts/transactions", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTransactions(response.data.history);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id}>
            [{new Date(txn.createdAt).toLocaleString()}]{" "}
            {txn.type.toUpperCase()} - ${txn.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
