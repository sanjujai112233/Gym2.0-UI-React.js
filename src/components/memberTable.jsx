function MemberTable() {

    const members = [
        {
            id: 1,
            name: "Rahul",
            plan: "Premium",
            status: "Active"
        },
        {
            id: 2,
            name: "Amit",
            plan: "Basic",
            status: "Active"
        },
        {
            id: 3,
            name: "Rohit",
            plan: "Premium",
            status: "Expired"
        }
    ];

    return (
        <div className="table-responsive">

            <table className="table table-striped table-hover">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Plan</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {members.map(member => (

                        <tr key={member.id}>

                            <td>{member.name}</td>

                            <td>{member.plan}</td>

                            <td>
                                {member.status === "Active" ? (
                                    <span className="badge text-bg-success">
                                        Active
                                    </span>
                                ) : (
                                    <span className="badge text-bg-danger">
                                        Expired
                                    </span>
                                )}
                            </td>

                            <td>
                                <button className="btn btn-sm btn-primary">
                                    View
                                </button>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default MemberTable;

