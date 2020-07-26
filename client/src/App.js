import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./tailwind.output.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalContextProvider>
            <div className="h-screen flex flex-col items-center justify-center px-4">
                <div className="rounded-lg shadow bg-white container py-4 px-2  md:w-1/2  mx-auto flex flex-col prose prose-sm">
                    <Header /> {/* look up title props */}
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalContextProvider>
    );
}

export default App;
