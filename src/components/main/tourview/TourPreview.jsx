import React, {Component} from "react";
import {API} from "../../../api/API";
import {withRouter} from "react-router-dom";
import HeaderBar from "../HeaderBar";
import {Button, Card, Divider, Grid} from "@material-ui/core";
import SwipeableTextMobileStepper from "../baseElements/SwipeableElement";
import SkeletonLoading from "../baseElements/SkeletonLoading";
import Typography from "@mui/material/Typography";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";
import ImageMasonry from "../baseElements/ImageMasonry";
import TourPreviewRoute from "./TourPreviewRoute";
import TourPreviewAdditionalService from "./TourPreviewAdditionalService";
import DefaultDatePicker from "../baseElements/DefaultDatePicker";

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

class TourPreview extends Component {
    constructor(props) {
        super(props);

        console.log('key1 with: ' + props.location.state.id);
        console.log('key1 without: ' + props.location.key1);
        this.state = {
            tourId: props.location.state.id,
            error: null,
            isLoaded: false,
            item: null
        };
    }

    componentDidMount() {
        API.CORE.getTourPreview(this.state.tourId).then((res) => {
            this.setState({
                item: res.data,
                isLoaded: true
            })
        }).catch((err) => {
            this.setState({
                isLoaded: true,
                error: err
            })
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <Grid container>
                    <HeaderBar />
                    <SkeletonLoading />
                </Grid>
            )
        }

        return (
            <Grid container direction={'row'} spacing={2}>
                <Grid item xs={12}>
                    <HeaderBar />
                </Grid>
                <Grid item xs={3}>
                    <SwipeableTextMobileStepper images={this.state.item} />
                    <Card>
                        <Grid container justifyContent={'center'}>
                            <Typography color="text.secondary" variant="body1">
                                Cost: 165 635
                            </Typography>
                        </Grid>
                        <Divider light />
                        <Grid container justifyContent={'center'}>
                            <Button variant="outlined">Apply</Button>
                        </Grid>
                    </Card>
                </Grid>
                <Grid container direction={'column'} spacing={3} alignItems={'center'} xs={2}>
                    <Grid item>
                        <DefaultDatePicker name={'Date from'} onChange={(val) => console.log(val)} value={'2023-01-01'} />
                    </Grid>
                    <Grid item>
                        <Card style={{maxWidth: 150}}>
                            <Grid container justifyContent={'center'}>
                                <Typography color="text.secondary" variant="body1">
                                    People number
                                </Typography>
                            </Grid>
                            <Divider light />
                            <Grid container justifyContent={'center'}>
                                <ToggleButtonGroup
                                    //value={alignment}
                                    exclusive
                                    //onChange={handleAlignment}
                                    aria-label="text alignment"
                                >
                                    <ToggleButton value="left" aria-label="left aligned">
                                        1
                                    </ToggleButton>
                                    <ToggleButton value="center" aria-label="centered">
                                        2
                                    </ToggleButton>
                                    <ToggleButton value="right" aria-label="right aligned">
                                        3
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container xs={5} justifyContent={'center'}>
                    <FlightTakeoffIcon />
                </Grid>
                <Grid item xs={2}>
                    <DefaultDatePicker name={'Date to'} onChange={(val) => console.log(val)} value={'2023-01-01'}/>
                </Grid>

                <Grid item xs={12}>
                    <TourPreviewRoute />
                </Grid>

                <Grid item xs={12}>
                    <TourPreviewAdditionalService />
                </Grid>

                <Grid item xs={12}>
                    <ImageMasonry />
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(TourPreview);