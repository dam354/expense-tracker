import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, []);
    console.log("transactions:", transactions);

    const transactionElem = transactions.map((transaction) => {
        return <Transaction key={transaction._id} transaction={transaction} />;
    });

    return (
        <div>
            <h3>History</h3>
            <hr />
            <div>{transactionElem}</div>
        </div>
    );
};

export default TransactionList;

/* [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "Salary", amount: 210 },
    { id: 3, text: "food", amount: 20 },
    { id: 4, text: "chair", amount: -40 },
];
 */
