import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    return (
        <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20">

            <div className="flex items-center gap-10 z-50">
                <Link to="/">
                    <img src="/netflix-logo.png" alt="Netflix logo" className="w-32 sm:w-40"/>
                </Link>

                {/* desktop navbar items */}
                <div className="hidden sm:flex gap-2 items-center">

                    <Link to="/" className="hover:underline">
                        Movies
                    </Link>
                    <Link to="/" className="hover:underline">
                        TV Shows
                    </Link>
                    <Link to="/" className="hover:underline">
                        Search History
                    </Link>
                </div>
            </div>

        {/*  mobile navbar items */}
        </header>
    )
}
export default Navbar
