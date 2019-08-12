import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDateAction } from './actions/datesActions';

export default function DateItem( { date, key } ) {
    
    const dispatch = useDispatch();
    return (
        <div className="card m-1">
            <img className="card-img-top" src="holder.js/100x180/" alt="" />
            <div className="card-body">
                <h4 className="card-title">{ date.pet_name }</h4>
                <p className="card-text">{ date.owner_name }</p>
                <button className="btn btn-danger btn-block" onClick={ () => dispatch( deleteDateAction( key ) ) }>deleteDate</button>
            </div>
        </div>
    );
}
