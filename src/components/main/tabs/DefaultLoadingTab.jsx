import {Component} from "react";
import SkeletonLoading from "../baseElements/SkeletonLoading";


class DefaultLoadingTab extends Component {
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

export default DefaultLoadingTab;