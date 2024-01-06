import React, {Component} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {withRouter} from "react-router-dom";
import DefaultTimeline from "../baseElements/DefaultTimeline";
import AltRouteIcon from '@mui/icons-material/AltRoute';

class TourPreviewRoute extends Component {

    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid container justifyContent={'center'}>
                        <Typography color="text.primary" variant={'h6'}>Route</Typography>
                        <AltRouteIcon />
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <DefaultTimeline />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        );
    }
}

export default withRouter(TourPreviewRoute);