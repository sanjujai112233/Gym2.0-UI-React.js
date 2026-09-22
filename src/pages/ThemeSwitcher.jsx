import { useState } from "react";
import "../styles/theme.css";

function ThemeSwitcher(){
    const[darkMode, setDarkMode] = useState(false);

    function toggleTheme()
    {
        setDarkMode(prev => !prev);
    }

    return (
        <div className={darkMode ? "dark-theme": "light-theme"}>
            <h1>Theme Switcher</h1>
            <p>
                current Theme : {darkMode? "Dark" : "Light"}
            </p>
            <button onClick={toggleTheme}>
                {darkMode? "Light Mode" : "Dark Mode"}
            </button>

        </div>

    );
}
export default ThemeSwitcher;