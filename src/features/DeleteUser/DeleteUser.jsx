import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchDelete } from './deleteUserSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//import style 
import style from './DeleteUser.module.css';

function DeleteUser() {
    const { id } = useParams();
    const state = useSelector((state) => state.deleteUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleDelete = async () => {
        await dispatch(fetchDelete(id)).unwrap();
        navigate('/');
    }

    return (
        <div className={style["delete-user"]}>
            <button onClick={() => handleDelete()}>Delete user {id}</button>
        </div>
    );
}

export default DeleteUser;