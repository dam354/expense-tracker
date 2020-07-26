import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [titleInput, setTitleInput] = useState("");
    const [priceInput, setPriceInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            text: titleInput,
            amount: +priceInput,
        };

        addTransaction(newTransaction);
        setTitleInput("");
        setPriceInput("");
    };
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="Text" className="block text-sm font-medium leading-5 text-gray-700">
                        Text
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm border-gray-500 ">
                        <input
                            className="form-input block w-full sm:text-sm sm:leading-5"
                            value={titleInput}
                            onChange={(e) => {
                                setTitleInput(e.target.value);
                            }}
                            type="text"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="" className="block text-sm font-medium leading-5 text-gray-700">
                        Amount
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            className="form-input block w-full sm:text-sm sm:leading-5"
                            value={priceInput}
                            onChange={(e) => {
                                setPriceInput(e.target.value);
                            }}
                            type="number"
                        />
                    </div>
                </div>
                <button className=" mt-2 w-full inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 justify-center">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
