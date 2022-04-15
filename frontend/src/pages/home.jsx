import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
function home() {
    return (
        <>
            <section className="heading">
                <h1>What Do You Need Help With</h1>
                <p>Please Choose From An Option Below</p>
            </section>
            <Link to="/new-ticket" className="btn btn-reverse btn-block">
                <FaQuestionCircle />
                Create New Ticket
            </Link>
            <Link to="/ticket" className="btn btn-block">
                <FaTicketAlt />
                View My Tickets
            </Link>
        </>
    );
}

export default home;
