import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./DashboardLayout.module.css";
import Sidebar from "../components/sidebar";
import StatCard from "../components/statCard";
import MemberTable from "../components/memberTable";


function DashboardLayout() {

    return (
        // <div className={styles.dashboard}>
        //     {/* <h2>Gym Managment</h2> */}
        //     {/* <aside>
        //         <nav className={styles.nav}>
        //             <NavLink to="/dashboard">
        //                 Dashboard
        //             </NavLink>
        //             <NavLink to="/dashboard/Members">
        //                 Members
        //             </NavLink>
        //             <NavLink to="/dashboard/Register">
        //                 Register
        //             </NavLink>
        //             <NavLink to="/dashboard/Plans">
        //                 Plans
        //             </NavLink>
        //             <NavLink to="/dashboard/profile">
        //                 Profile
        //             </NavLink>

        //         </nav>
        //     </aside> */}

        //     <main>
        //         <Navbar />
        //         <Outlet />
        //     </main>


        // </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-3 p-0">
                    <Sidebar />
                </div>

                <div className="col-md-9 col-lg-9 p-0">
                    <Navbar />
                    <main className="p-4">
                        <div className="row g-4 mt-2">
                            <div className="col-12 col-md-6 col-lg-3">
                                <StatCard
                                    title="Total Members"
                                    value="1,250"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <StatCard
                                    title="Revenue"
                                    value="85,000"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <StatCard
                                    title="Active Members"
                                    value="1,100"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <StatCard
                                    title="Expired"
                                    value="150"
                                />
                            </div>
                        </div>

                        <div className="card shadow-sm mt-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">
                                        Recent Members
                                    </h5>
                                    <button className="btn btn-primary btn-sm">
                                        Add Member
                                    </button>

                                </div>
                                <MemberTable />
                            </div>

                        </div>
                    </main>

                </div>

            </div>

        </div>
    );
}

export default DashboardLayout;