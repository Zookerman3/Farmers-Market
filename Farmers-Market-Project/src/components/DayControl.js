import React from 'react';
import MarketSearchForm from './MarketSearchForm';
import DayList from './DayList';
import MonthList from './MonthList';


class TicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this); //new code here
    }


    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null; // new code
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <React.Fragment>
                <DayList />
                <MonthList />
            </React.Fragment>
            buttonText = "Back to Search"; // new code
        } else {
            currentlyVisibleState = <MarketSearchForm />;
            buttonText = "Show Weekly Schedule"; // new code
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}
            </React.Fragment>
        );
    }
}

export default TicketControl;