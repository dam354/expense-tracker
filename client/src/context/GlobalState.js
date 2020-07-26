import React, { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
    transactions: [],
    error: null,
    loading: true,
};

const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
    switch (action.type) {
        case `GET_TRANSACTIONS`:
            return {
                ...state,
                loading: false,
                transactions: action.payload,
            };
        case `DELETE_TRANSACTION`:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction._id !== action.payload),
            };
        case `ADD_TRANSACTION`:
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case `TRANSACTIONS_ERROR`:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransactions = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/v1/transactions");

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data,
            });
        } catch (e) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: e.response.data.error,
            });
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
        } catch (e) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: e.response.data.error,
            });
        }
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
    };
    const addTransaction = async (transaction) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/v1/transactions", transaction, config);
            console.log(res.data.data);
            dispatch({ type: "ADD_TRANSACTION", payload: await res.data.data });
        } catch (e) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: e.response.data.error,
            });
        }
    };

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, getTransactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
