import React from "react";
import { BrowserRouter as Routerr, Route, Routes } from "react-router-dom";
import TransactionForm from '../components/Add_transaction_form';
import Transactions from '../components/Transactions';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const Router = () => {
    return (
        <Routerr>
            <Header />
            <div style={{ margin: '0 20px' }}>
                <Routes>
                    <Route exact path="/react_task" element={<Dashboard />} />
                    <Route exact path="/react_task/transactions" element={<Transactions />} />
                    <Route path="/react_task/form" element={<TransactionForm />} />
                </Routes>
            </div>
        </Routerr>
    )
}


export default Router;