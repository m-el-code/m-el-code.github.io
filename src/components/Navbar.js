import { useState, useEffect } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setShowNavbar(true);
            }
            else {
                setShowNavbar(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <> 
            {showNavbar && (
                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>
            )}
        </>
    );
};

export default Navbar