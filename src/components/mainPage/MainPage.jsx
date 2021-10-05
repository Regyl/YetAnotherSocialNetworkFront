import React from 'react';
import {
    Box, Button, ButtonGroup, Card, CardMedia, Grid, Paper, Typography
} from "@material-ui/core";
import FirstImage from '../../img/mainPage/mainBack1.jpg';
import SecondImage from '../../img/mainPage/mainBack2.jpg';
import ThirdImage from '../../img/mainPage/mainBack3.jpg';
import {Link, Router} from "react-router-dom";

const testingSystemColor = '#55430C';

const styles = {
    backGrid : {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    secondBackGrid: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 2,
    },
    thirdBackGrid: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 3,
    },
    firstCard: {
        height: '70%',
        width: '65%',
        position: 'relative',
        zIndex: 1,
    },
    secondCard: {
        height: '70%',
        width: '50%',
        position: 'relative',
        zIndex: 2,
        top: '14%',
        left: '20%',
    },
    thirdCard: {
        height: '35%',
        width: '25%',
        position: 'fixed',
        zIndex: 3,
        top: '0%',
        left: '75%',
    },
    secondTypography: {
        position: 'fixed',
        top: '20%',
        left: '40.5%',
        zIndex: 3,
        color: testingSystemColor,
        fontFamily: 'Cardo',
    },
    thirdTypography: {
        position: 'fixed',
        top: '37%',
        left: '75%',
        zIndex: 3,
        color: '#654321',
        fontFamily: 'Versailles'
    },
    gridButtonGroup: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 10,
        top: '30%',
        left: '40%',
    },
    buttonsStyle: {
        position: 'relative',
        color: testingSystemColor,
        width: '10%',
        height: '10%',
    },
};

class MainPage extends React.Component {


    render() {
        const {history} = this.props;

        return (
            <Grid container style={{width: '100%', height: '100%'}}>
                <Router history={history}>
                    <Grid item style={styles.backGrid}>
                        <CardMedia image={FirstImage} style={styles.firstCard}/>
                    </Grid>
                    <Grid item style={styles.secondBackGrid}>
                        <CardMedia image={SecondImage} style={styles.secondCard}/>
                        <Typography variant={"h2"} style={styles.secondTypography}>Testing System</Typography>
                    </Grid>
                    <Grid item style={styles.gridButtonGroup}>
                        <ButtonGroup variant={'text'} style={{width: '100%', height: '100%'}}>
                            <Button component={Link} to={'/authorisation'} style={styles.buttonsStyle}>SIGN IN</Button>
                            <Button component={Link} to={'/registration'} style={styles.buttonsStyle}>SIGN UP</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item style={styles.thirdBackGrid}>
                        <CardMedia image={ThirdImage} style={styles.thirdCard}/>
                        <Typography variant={'h2'} style={styles.thirdTypography}>WELCOME TO THE TESTING SYSTEM - OPEN SOURCE PROJECT WITH ONLY ONE GOAL - EDUCATION</Typography>
                    </Grid>
                </Router>
            </Grid>
        )
    };
}


export default MainPage;