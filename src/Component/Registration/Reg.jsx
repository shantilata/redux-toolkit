import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { Sign_Up } from '../../Redux/AllSlice/Registration/AuthSlice';

const Reg = () => {

    const dispatch = useDispatch();
    // const { isLoading, status } = useSelector(state => state.auth)  //createSlice name
    // console.log("UseSelector inPost :", isLoading, status);


    let [inputState, setInput] = useState({
        fname: "", lname: "", emails: "", pwd: ""
    });

    let [imgState, setImgState] = useState();

    let changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInput({ ...inputState, [name]: value })
    }

    let submitHandler = (event) => {
        event.preventDefault();
        console.log("Data submit :", inputState)
        console.log("img Data :", imgState);

        let formData = new FormData();
        formData.append("first_name", inputState.fname);
        formData.append("last_name", inputState.lname);
        formData.append("email", inputState.emails);
        formData.append("password", inputState.pwd);
        formData.append("profile_pic", imgState);

        dispatch(Sign_Up(formData));
    }



    return (
        <form action='' onSubmit={submitHandler}>
            <input type="text" name="fname" id="" placeholder='First Name' onChange={changeHandler} /> <br />

            <input type="text" name="lname" id="" placeholder='Last Name' onChange={changeHandler} /> <br />

            <input type="email" name="emails" id="" placeholder='Your Email' onChange={changeHandler} /> <br />

            <input type="password" name="pwd" id="" placeholder='Your Password' onChange={changeHandler} /> <br />


            <input type="file" name="pic" id="" onChange={(e) => setImgState(e.target.files[0])} accept='image/*' /> <br />


            <input type="submit" value="Register" />

            {/* {status && status === 200 ? <Navigate to="/sign-in"></Navigate> : <p>Registration Error</p>} */}
        </form>
    )
}

export default Reg