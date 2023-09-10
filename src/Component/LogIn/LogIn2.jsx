import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Log_In } from '../../Redux/AllSlice/Registration/AuthSlice';

const LogIn2 = () => {
  const dispatch = useDispatch();
  // const { isLoading, status } = useSelector(state => state.auth)
  // console.log("isLoading,status", isLoading, status);


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
    dispatch(Log_In(formData));

  }
  return (
    <div>
      <form action='' onSubmit={submitHandler}>

        <input type="email" name="emails" id="" placeholder='Your Email' onChange={changeHandler} /> <br />

        <input type="password" name="pwd" id="" placeholder='Your Password' onChange={changeHandler} /> <br />

        <input type="submit" value="LogIn" />

      </form>
    </div >
  )
}

export default LogIn2