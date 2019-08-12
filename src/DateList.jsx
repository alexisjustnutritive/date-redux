import React from 'react';
import { useSelector } from 'react-redux';
import DateItem from './DateItem';

const DateList = () => {

    const dates = useSelector( state => state.dates );
    console.log( 'los dates del estado global son: ', dates );

    return (
        <>
            <div className="card-deck d-flex flex-column">
                { 
                    dates.map( ( date, index ) => <DateItem date={ date } key={ index }/> )
                }
            </div>
            { dates.length === 0 ? <p className="alert alert-warning p-1 m-0 text-black text-center">add a new date</p> : null }
        </>
    )
}

export default DateList;
