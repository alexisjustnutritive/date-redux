import React from 'react';

export default function DateItem( { date } ) {
    return (
        <div className="card m-1">
            <img className="card-img-top" src="holder.js/100x180/" alt="" />
            <div className="card-body">
                <h4 className="card-title">{ date.pet_name }</h4>
                <p className="card-text">{ date.owner_name }</p>
                <button className="btn btn-danger btn-block">deleteDate</button>
            </div>
        </div>
    );
}
