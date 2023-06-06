import React from 'react';
import { fetchAuthorization } from "../../utils/api.js";
import { useDispatch, useSelector} from "react-redux";
import "./Authorization.scss"
import { setApiTokenInstance, setIdInstance } from '../../redux/Authorization/slice.js';

function Authorization() {
  const dispatch = useDispatch();
  const { idInstance, tokenInstance } = useSelector((state) => state.isAuthorizationSlice);
    
    const onChangeIdInstance = (event) => {
        dispatch(setIdInstance(event.target.value));
    };

    const onChangeTokenInstance = (event) => {
        dispatch(setApiTokenInstance(event.target.value));
    };

    const getPaintings = async () => {
        dispatch(fetchAuthorization({idInstance, tokenInstance}));
    }

    return (
        <div className="container auth__container">
             <h1>Вход</h1>
             <div className="auth__wrapp-input">
                <label htmlFor="idInstance">idInstance</label>
                <input className='input-auth' name='idInstance' type="text" placeholder='idInstance' value={idInstance} onChange={onChangeIdInstance}/>
             </div>
             <div className="auth__wrapp-input">
                <label htmlFor="apiTokenInstance">apiTokenInstance</label>
                <input className='input-auth' type="text" placeholder='apiTokenInstance' value={tokenInstance} onChange={onChangeTokenInstance}/>
             </div>
            <button onClick={() => getPaintings(idInstance, tokenInstance)} className='auth__button'>Войти</button>
        </div>
        
    );
}

export default Authorization;