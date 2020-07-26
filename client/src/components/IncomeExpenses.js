import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const incomeAmounts = transactions.filter((transaction) => transaction.amount > 0).map((transaction) => transaction.amount);
    const incomeBalance =
        incomeAmounts.length > 0
            ? incomeAmounts.reduce((total, transaction) => {
                  return total + transaction;
              })
            : 0;

    const expenseAmounts = transactions.filter((transaction) => transaction.amount < 0).map((transaction) => transaction.amount);
    const expenseBalance =
        expenseAmounts.length > 0
            ? expenseAmounts.reduce((total, transaction) => {
                  return total + transaction;
              })
            : 0;

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-center items-center w-full bg-green-400">
                <h4>Income</h4>
                <p>{incomeBalance.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full bg-red-400">
                <h4>Expense</h4>
                <p>{expenseBalance.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
