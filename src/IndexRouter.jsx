import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//? Import - Pages
import { Index, Admin, Analytics, Dashboard, Home } from './pages/ejemplo-router';
import ProtectedRoute from './components/protectedRoute';



const IndexRouter = () => {

    const [user, setUser] = useState(null)

    const login = () => {
        //* Request done
        setUser({
            id: 1,
            name: 'Jhon'
        })
    }

    const logout = () => setUser(null)

    return (
        <BrowserRouter>

            <Navigation/>

            {
                user ? 
                <button onClick={ logout }>Logout</button>
                : <button onClick={ login }>login</button>
            }

            <Routes>
                <Route path='/index' element={ <Index/> } />
                <Route path='/home' element={
                    <ProtectedRoute user={ user } redirectTo='/'>
                        <Home/> 
                    </ProtectedRoute>
                    }/>
                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/analytics' element={ <Analytics/> }/>
                <Route path='/admin' element={ <Admin/> } />
            </Routes>
        </BrowserRouter>
    );
}

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/index"}>Index</Link>
                </li>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"/analytics"}>Analytics</Link>
                </li>
                <li>
                    <Link to={"/admin"}>Admin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default IndexRouter;
