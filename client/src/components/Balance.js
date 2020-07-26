import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    const balance =
        amounts.length > 0
            ? amounts.reduce((total, transaction) => {
                  return total + transaction;
              })
            : 0;

    return (
        <div>
            <h4>Your Balance:</h4>
            <h1>{balance.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h1>
        </div>
    );
};

export default Balance;
