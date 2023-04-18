import React from 'react';
import NewTicketForm from './NewTicketForm';
import DayList from './DayList';

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
            currentlyVisibleState = <NewTicketForm />;
            buttonText = "Return to Day List"; // new code
        } else {
            currentlyVisibleState = <DayList />;
            buttonText = "Add Market Stop"; // new code
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