import {Component} from "react";
import SkeletonLoading from "../../SkeletonLoading";

class TabTwoComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <SkeletonLoading />
        );
    }
}

export default TabTwoComponent;