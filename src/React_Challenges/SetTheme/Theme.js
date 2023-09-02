import React, { useState, useContext } from "react";
import './Theme.css'

const ThemeContext = React.createContext("dark");

function Comp1() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Current Theme: {theme}</h1>
        </div>
    );
}

const DarkMode = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    function DarkMode() {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }

    function LightMode() {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    const toggleTheme = () => {
        if (theme === 'dark') DarkMode();
        else LightMode();
    }
    toggleTheme()
}

function Comp2() {
    const { setTheme, theme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
    );
}

const Theme = () => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} className="App">
            <Comp1 />
            <DarkMode></DarkMode>
            <Comp2 />
        </ThemeContext.Provider>
    );
}

export default Theme