import React from "react";
import {DateTimeInput} from "semantic-ui-calendar-react";

export default class DateTimeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "",
            dateTime: "",
            datesRange: ""
        };

    }

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({[name]: value});
        }
    };

    render() {
        return (
            <DateTimeInput
                name="dateTime"
                placeholder="Date Time"
                value={this.state.dateTime}
                iconPosition="left"
                onChange={this.handleChange}
            />
        );
    }
}
