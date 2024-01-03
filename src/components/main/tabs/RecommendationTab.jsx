import React, {Component} from "react";
import {Grid, Paper} from "@material-ui/core";
import {styled} from "@material-ui/styles";
import Masonry from '@mui/lab/Masonry';
import SwipeableTextMobileStepper from "../baseElements/SwipeableElement";
import {API} from "../../../api/API";
import SkeletonLoading from "../baseElements/SkeletonLoading";
import HistoryPaths from "../../../enums/HistoryPaths";

const Label = styled(Paper)(({ theme }) => ({
    // backgroundColor: 'theme.palette.mode' === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: 'dark' === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(0.5),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

class RecommendationTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null
        };
    }

    componentDidMount() {
        API.CORE.getRecommendations().then((res) => {
            this.setState({
                items: res.data,
                isLoaded: true
            })
        }).catch((error) =>
            this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render() {
        console.log('items: ' + this.state.items);
        if (!this.state.isLoaded) {
            return <SkeletonLoading />;
        } else if (this.state.error) {
            this.props.history.push(HistoryPaths.Home);
        }

        return (
            <Grid container direction={'column'} justifyContent={'center'}>
                <Grid container justifyContent={'center'}>
                    <Masonry columns={10} spacing={2}>
                        {this.state.items.map((item, index) => (
                            <SwipeableTextMobileStepper images={item} />
                        ))}
                    </Masonry>
                </Grid>
            </Grid>
        );
    }

}

export default RecommendationTab;