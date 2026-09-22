import { Link } from "react-router-dom";

function Members() {
    const members = [
        { id: 101, name: "Rahul" },
        { id: 102, name: "Amit" },
        { id: 103, name: "Rohit" }
    ];

    return (
        <>
            <h2>Members</h2>

            {members.map(member => (
                <div key={member.id}>

                    <h3>{member.name}</h3>

                    <Link to={`/member/${member.id}`}>
                        View Details
                    </Link>

                </div>
            ))
            }
        </>
    );
}

export default Members;