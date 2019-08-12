import React, { useState, useEffect } from 'react';
import {Provider, useDispatch } from 'react-redux';
import AddDate from './AddDate';
import DateItem from './DateItem';
import store from './store';
import DateList from './DateList';

function App() {

    // console.log( dates );

/*     const loadFromStorage = () => {
        let loadedDates = localStorage.getItem( 'dates' );
        if ( loadedDates ) {
            return JSON.parse( loadedDates );
        } else {
            console.log( 'local store empty' );
            return [];
        }
    }

    useEffect( () => {
        console.log( dates );
        localStorage.setItem( 'dates', JSON.stringify( dates ) );
    }, [ dates ] );

    useEffect( () => {
        loadFromStorage();
    }, [] ); */

    return (
    <Provider store={ store } >
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <AddDate />
                </div>
                <div className="col-6">
                    <DateList />
                </div>
            </div>
        </div>
    </Provider>
  );
}

export default App;
