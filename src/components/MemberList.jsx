//child component
import React from "react";

function MemberList({ onMemberClick }) {

    console.log("MemberList rendered");

    return (
        <button onClick={onMemberClick}>
            Select Member
        </button>
    );
}

export default React.memo(MemberList); // 
//React.memo is like security guard. if this render. only then the values change.
