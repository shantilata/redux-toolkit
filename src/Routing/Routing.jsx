import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from '../Component/Product/Product'
import Home from '../Component/Home/Home'
import Header from '../Layout/Header'
import ProductView from '../Component/Product/ProductView'
import UserView from '../Component/USERVIEW/UserView'
import PostView from '../Component/PostView/PostView'
// import RegForm from '../Component/Registration/RegForm'
// import LogIn from '../Component/LogIn/LogIn'
import Reg from '../Component/Registration/Reg'
import LogIn2 from '../Component/LogIn/LogIn2'
import Profile from '../Component/Profile/Profile'

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>

                <Route path='' element={<Home />} />

                <Route path='all-products' element={<Product />} />
                <Route path='post' element={<PostView />} />
                {/* <Route path='reg_form' element={<RegForm />} /> */}
                <Route path='regform' element={<Reg />} />
                {/* <Route path='log_in_form' element={<LogIn />} /> */}
                <Route path='log-in' element={<LogIn2 />} />
                <Route path='user' element={<UserView />} />
                <Route path='profile' element={<Profile />} />
                <Route path='all-products/products/:dp' element={<ProductView />} />

            </Routes>
        </Router>
    )
}

export default Routing