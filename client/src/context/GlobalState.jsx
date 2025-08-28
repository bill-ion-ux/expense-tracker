import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import {axios} from 'axios';

const initialState = {
    transactions : [],
    error : null,
    loading: true
}
//create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransaction(){
        try {
            const res = await axios.get('api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }
    //actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
    <GlobalContext.Provider value ={
        {
            transactions : state.transactions,
            error: state.error,
            loading: state.loading,
            deleteTransaction,
            addTransaction,
            getTransaction
        }} > 
          {children}
    </GlobalContext.Provider>);
}
