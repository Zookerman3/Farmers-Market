import React from "react";
import PropTypes from "prop-types";

function MarketDay(props) {
    return (
        <React.Fragment>
            <h3>{props.location} - {props.day}</h3>
            <p><em>{props.hours} - {props.booth}</em></p>
            <hr />
        </React.Fragment>         
    );
}

MarketDay.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
};

export default MarketDay;