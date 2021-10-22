import {Button} from "@material-ui/core";
import {Component} from "react";
import {withRouter} from "react-router-dom";


class backButton extends Component {
    constructor(props) {
        super(props);
        this.onBackClick = this.onBackClick.bind(this);
    }

    render() {
        return (
            <Button onClick={this.onBackClick}>
                Back
            </Button>

        );
    }

    onBackClick() {
        this.props.history.goBack();
    }
}

export default withRouter(backButton);