import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import HeaderBar from "./HeaderBar";
import RelocationTab from "./tabs/RelocationTab";
import TabOneComponent from "./tabs/TabOneComponent";
import TabTwoComponent from "./tabs/TabTwoComponent";
import TabThreeComponent from "./tabs/TabThreeComponent";
import TabFourComponent from "./tabs/TabFourComponent";
import TabNumber from "./TabNumber";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };

    render() {
        return (
            <Grid container component={'span'}>
                <HeaderBar />
                <Grid item component={'span'} style={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab label="Релокация" value={TabNumber.Relocation} {...allyProps(TabNumber.Relocation)} />
                            <Tab label="Вкладка 1" value={TabNumber.TabOne} {...allyProps(TabNumber.TabOne)} />
                            <Tab label="Вкладка 2" value={TabNumber.TabTwo} {...allyProps(TabNumber.TabTwo)} />
                            <Tab label="Вкладка 3" value={TabNumber.TabThree} {...allyProps(TabNumber.TabThree)} />
                            <Tab label="Вкладка 4" value={TabNumber.TabFour} {...allyProps(TabNumber.TabFour)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={this.state.value} index={TabNumber.Relocation}>
                        <RelocationTab />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TabOne}>
                        <TabOneComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TabTwo}>
                        <TabTwoComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TabThree}>
                        <TabThreeComponent />
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.TabFour}>
                        <TabFourComponent />
                    </TabPanel>
                </Grid>
            </Grid>
        );
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default withRouter(Home);
