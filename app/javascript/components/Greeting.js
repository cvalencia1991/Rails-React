
import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeter } from  '../redux/Greetings/Greetings';


const Greeting = () => {

    const dispatch = useDispatch();
    const greetings = useSelector((state) => state.Greetings);

    useEffect(() => {
        dispatch(getGreeter());
    }, [dispatch]);

    return (
        <div>

            <h1>{greetings.message}</h1>

        </div>
    );
}

export default Greeting;