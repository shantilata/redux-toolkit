import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from '../Component/Product/Product'
import Home from '../Component/Home/Home'
import Header from '../Layout/Header'
import ProductView from '../Component/Product/ProductView'
import UserView from '../Component/USERVIEW/UserView'
import PostView from '../Component/PostView/PostView'

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>

                <Route path='' element={<Home />} />

                <Route path='all-products' element={<Product />} />
                <Route path='post' element={<PostView />} />

                <Route path='user' element={<UserView />} />
                <Route path='all-products/products/:dp' element={<ProductView />} />

            </Routes>
        </Router>
    )
}

export default Routing