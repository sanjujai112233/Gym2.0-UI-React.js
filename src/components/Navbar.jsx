import { Link } from "react-router-dom";

function Navbar({className} ) {

    return (
         <nav className="navbar navbar-dark bg-dark px-3">
            <span className="navbar-brand mb-0 h1">
                Gym Management
            </span>
            <div className="text-white">
                Admin
            </div>
        </nav>

        // <nav className={className}>
        //     <Link to="/" >Login</Link>
        //     {" | "}
        //     <Link to="/register" >Register</Link>
        //     {" | "}
        //     <Link to="/stopwatch" >Stopwatch</Link>
        // </nav>

    );
}
export default Navbar;


