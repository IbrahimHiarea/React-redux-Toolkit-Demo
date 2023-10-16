import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchAllUsers } from './allUsersSlice';
import { useNavigate } from 'react-router-dom';

//import style 
import style from './AllUsers.module.css';

function AllUsers() {

    const navigate = useNavigate();
    const state = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
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
        <div className={style["all-users"]}>
            <h1>All Users</h1>
            <div className={style.button} onClick={() => navigate('/add')}>Add user</div>
            {
                state.data?.map((user) => {
                    return <div className={style.user} key={user.id} onClick={() => navigate(`/${user.id}`)}>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                })   
            }
        </div>
    )
}

export default AllUsers;