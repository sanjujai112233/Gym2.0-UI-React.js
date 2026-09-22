import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="bg-dark text-white"  >
            <h4 className="mb-4">
                Gym Management
            </h4>
            <nav className="nav flex-column">
                <NavLink to="/dashboard"
                className="nav-link text-white"
                >
                    Dashboard
                </NavLink>
                <NavLink to="/dashboard/Members"
                className="nav-link text-white"
                >
                    Members
                </NavLink>
                <NavLink to="/dashboard/Register"
                className="nav-link text-white"
                >
                    Register
                </NavLink>
                <NavLink to="/dashboard/Plans"
                className="nav-link text-white"
                >
                    Plans
                </NavLink>
                <NavLink to="/dashboard/profile"
                className="nav-link text-white"
                >
                    Profile
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;