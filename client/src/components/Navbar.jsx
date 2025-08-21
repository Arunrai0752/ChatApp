import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(
        sessionStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        sessionStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <div className='navbar flex justify-between items-center bg-base-200 text-base-content px-6 py-4 shadow-md'>
                <h1 className="text-2xl font-bold text-primary">Chat App</h1>

                <div className='flex gap-4 items-center'>
                    <Link to="/" className='btn btn-ghost hover:bg-primary/20'>Home</Link>
                    <Link to="/about" className='btn btn-ghost hover:bg-primary/20'>About</Link>
                    <Link to="/services" className='btn btn-ghost hover:bg-primary/20'>Services</Link>
                    <Link to="/login" className='btn btn-outline btn-primary'>Login</Link>
                    <Link to="/signup" className='btn btn-primary'>Signup</Link> 
                    <div className="relative group">
                        <select
                            name="theme"
                            id="theme"
                            value={theme}
                            className="select select-bordered text-center bg-base-100 border-2 border-primary/20 rounded-xl shadow-lg text-base-content font-medium cursor-pointer  focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 hover:border-primary/40 w-40"
                            onChange={(e) => {
                                setTheme(e.target.value);
                                document.documentElement.setAttribute("data-theme", e.target.value);
                            }}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="claude">Claude</option>
                            <option value="corporate">Corporate</option>
                            <option value="ghibli">Ghibli</option>
                            <option value="gourmet">Gourmet</option>
                            <option value="luxury">Luxury</option>
                            <option value="pastel">Pastel</option>
                            <option value="slack">Slack</option>
                            <option value="soft">Soft</option>
                            <option value="spotify">Spotify</option>
                            <option value="valorant">Valorant</option>
                            <option value="vscode">VS Code</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;