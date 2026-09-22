import { useParams } from "react-router-dom";

function MemberDetails() {

    const {id} = useParams();

    return (
        <div>
            <h1>Member Details</h1>
            <p>Member ID : {id}</p>
        </div>
    );
}

export default MemberDetails;