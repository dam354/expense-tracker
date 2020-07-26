import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const [hovered, setHovered] = useState(false);
    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <div
            className=" overflow-hidden prose relative bg-gray-200 h-10  flex  justify-between items-center rounded mb-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="px-3 w-full  flex justify-between" style={{ paddingLeft: hovered ? "40px" : "", transition: ".2s" }}>
                <span>{transaction.text}</span>
                <span>
                    {sign}${Math.abs(transaction.amount)}
                </span>
            </div>
            <button
                onClick={() => deleteTransaction(transaction._id)}
                className=" transition ease-linear absolute h-full w-8 bg-red-700 rounded text-white leading-none"
                style={{ left: hovered ? 0 : -40, transition: ".2s" }}>
                x
            </button>
            <div className={`bg-${transaction.amount < 0 ? "red" : "green"}-300 w-2 rounded-r h-full justify-end`}></div>
        </div>
    );
};

export default Transaction;

// [
//     { id: 1, text: "flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 210 },
//     { id: 3, text: "food", amount: 20 },
//     { id: 4, text: "chair", amount: -40 },
// ];
