import React, { useState }from 'react'
import { useDispatch } from 'react-redux';
import { logInUser } from '../../Redux/AllSlice/Registration/RegSlice';

const LogIn = () => {
    const dispatch=useDispatch();
    let [inputState, setInput] = useState({
        emails: "", pwd: ""
    });
    let changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInput({ ...inputState, [name]: value })
    }

    let submitHandler = (event) => {
        event.preventDefault();
        console.log("Data submit :", inputState)
        let formData = new FormData();

        formData.append("email", inputState.emails);
        formData.append("password", inputState.pwd);
        dispatch(logInUser(formData));
    }
        return (
            <div>
                <form action='' onSubmit={submitHandler}>
                    <input type="email" name="emails" id="" placeholder='Your Email' onChange={changeHandler} /> <br />

                    <input type="password" name="pwd" id="" placeholder='Your Password' onChange={changeHandler} /> <br />

                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

    export default LogIn