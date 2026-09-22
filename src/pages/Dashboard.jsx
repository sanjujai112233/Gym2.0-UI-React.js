import "../styles/theme.css";

function Dashboard() {
    return (
        <>
            <div className="cards">

                <div className="card">
                    Members
                    <h2>1,250</h2>
                </div>

                <div className="card">
                    Revenue
                    <h2>₹85,000</h2>
                </div>

                <div className="card">
                    Payments
                    <h2>₹72,000</h2>
                </div>
            </div>
        </>
    );
}
export default Dashboard;