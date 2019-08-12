import React, { useState, useEffect } from 'react';
import { addDateAction } from './actions/datesActions';
import { validateAddDateFormAction } from './actions/validateAddDateFormAction';
import { useDispatch, useSelector } from 'react-redux';

function AddDate( { addDate } ) {

    const dispatch = useDispatch();

    // useSelector similar to mapStateToProps, but now easier with hooks
    const error = useSelector( state => state.error );

    const [date, setDate] = useState({
        pet_name: '',
        owner_name: '',
        date: '',
        time: ''
    });

    const onChange = e => {
        setDate( {
            ...date,
            [e.target.name]: e.target.value
        } );
    };

    const onSubmit = e => {
        e.preventDefault();

        if ( date.pet_name.trim() === '' ) {
            dispatch( validateAddDateFormAction( true ) )
            return;
        }
        dispatch( validateAddDateFormAction( false ) );
        dispatch( addDateAction( date ) );
    };

    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="pet-name">Pet Name</label>
                <input type="text"
                className="form-control" name="pet_name" id="pet-name" aria-describedby="helpId" placeholder="" 
                onChange={ onChange }    
            />
            </div>
            <div className="form-group">
                <label htmlFor="owner-name">Owner name</label>
                <input type="text"
                className="form-control" name="owner_name" id="owner-name" aria-describedby="helpId" placeholder="" 
                onChange={ onChange }    
            />
            </div>
            <div className="form-group">
                <label htmlFor="date">Set date</label>
                <input type="date"
                className="form-control" name="date" id="date" aria-describedby="helpId" placeholder="" 
                onChange={ onChange }    
            />
            </div>
            <div className="form-group">
                <label htmlFor="time">Set time</label>
                <input type="time"
                className="form-control" name="time" id="time" aria-describedby="helpId" placeholder="" 
                onChange={ onChange }    
            />
            </div>
            <div className="form-group">
              <input type="submit"
                className="form-control btn btn-block btn-info" aria-describedby="helpId" placeholder="" value="add new date" />
            </div>
            {
                error.error ? <div className="form-group">
                                <div className="alert alert-warning">*all field required</div>
                            </div>
                            : null
            }
        </form>
    );
}

export default AddDate;