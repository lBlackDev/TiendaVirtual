import React from 'react'
import { loginStore } from '../store/useStore'
import "./navbar.css"
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const { singin, handleToggleAction } = loginStore((state) => state)

    const { pathname } = useLocation()

    return (
        <div className="main-header">
            <h2 className="logo">Tienda AT</h2>
            <nav className="navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                {
                    pathname !== '/login'
                        ?
                        <Link
                            to='/login'
                            className="btn-login"
                        >
                            Iniciar Sesión
                        </Link>
                        : <div></div>
                }
            </nav>
        </div>
    )
}

export default NavBar