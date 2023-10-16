import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from './getUserSlice';
import { useNavigate } from 'react-router-dom';

import style from './GetUser.module.css'

function GetUser() {
    const { id } = useParams();
    const state = useSelector((state) => state.getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchUser(id));
    },[])

    if(state.loading){
        return (
            <div className={style.loading}>
                loading...
            </div>
        );
    }

    else if(state.error !== ''){
        return (
            <div className={style.error}>
                Error
            </div>
        );
    }

    return (
        <div className={style.user}>
            <h1>User {id}</h1>
            <div>{state?.data?.id}</div>
            <div>{state?.data?.name}</div>
            <div>{state?.data?.username}</div>
            <div>{state?.data?.phone}</div>
            <div>{state?.data?.website}</div>
            <div>{state?.data?.company.name}</div>
            <div>{state?.data?.address.city}</div>
            <button onClick={() => navigate(`/delete/${id}`)}>Delete</button>
        </div>
    );
}

export default GetUser;