import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CharityRegistration from "./CharityRegistration";

function CharityList(props) {
    return (
        <div className="container">
            <h1>All Charity-{props.charity.length}</h1>


            <Link to="/add_charity">Add Charity</Link>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        charity: state.charity,
    };
};

export default connect(mapStateToProps)(CharityList);
