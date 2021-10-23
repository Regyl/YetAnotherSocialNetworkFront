import {AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import React, {Component, useState} from "react";
import {withRouter} from "react-router-dom";
import Profession from "../../enums/Profession";
import TabNumber from "./TabNumber";

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

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            profession: this.props.location.state.profession,
            isCompilationTestsTabVisible: false,
            isTestPassingTabVisible: false,
            isCompilationStudentListVisible: false,
            isCompilationSubjectListVisible: false,
            isStudentResultListVisible: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        switch(this.state.profession) {
            case Profession.Student:
                this.setState({isTestPassingTabVisible: true});
                break;
            case Profession.Professor:
                this.setState({isCompilationTestsTabVisible: true});
                break;
            case Profession.Administrator:
                this.setState({
                    isCompilationStudentListVisible: true,
                    isCompilationSubjectListVisible: true,
                    isStudentResultListVisible: true
                })
                break;
            default:
                console.log('error');
                break;
        }
    }


    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };


    render() {
        return (
            <Grid container>
                <Box style={{color: 'inherit', width: '100%'}}/>
                <Box style={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            {this.state.isCompilationStudentListVisible &&
                            <Tab label="Составление списка студентов" {...allyProps(TabNumber.Zero)} />}
                            {this.state.isCompilationSubjectListVisible &&
                            <Tab label="Составление списка дисциплин" {...allyProps(TabNumber.First)} />}
                            {this.state.isStudentResultListVisible &&
                            <Tab label="Просмотр результатов" {...allyProps(TabNumber.Second)} />}
                            {this.state.isTestPassingTabVisible &&
                            <Tab label="Прохождение тестирования" {...allyProps(TabNumber.Third)} />}}
                            {this.state.isCompilationTestsTabVisible &&
                            <Tab label="Подготовка тестов"{...allyProps(TabNumber.Four)} />}
                        </Tabs>
                    </Box>
                    <TabPanel value={this.state.value} index={TabNumber.Zero}>
                        Item One
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.First}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.Second}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.Third}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={this.state.value} index={TabNumber.Four}>
                        Item Fifth
                    </TabPanel>
                </Box>
            </Grid>
        );
    }
}

export default withRouter(Account);
