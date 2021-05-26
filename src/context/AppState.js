import React from 'react';
import AppContext from './AppContext';
import StateCardData from '../components/StateCardData';


 const AppState = (props) => {
    return (
        <>
        <AppContext.Provider value={{
             data: StateCardData.stateLeadsData
        }} >
            {props.children}
        </AppContext.Provider>
        </>
    )
    
}

export default AppState