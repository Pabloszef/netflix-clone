import React from 'react'
import {useAuthStore} from "../../store/authUser.js";
import Navbar from "../../components/Navbar.jsx";

const HomeScreen = () => {
    const {logout} = useAuthStore()
    return (
        <>
        <div className="relative h-screen text-white">
            <Navbar />
        </div>
        </>
    )
}
export default HomeScreen
