import React from 'react';
import {
    Box, Card, CardMedia, Grid, Paper, Typography
} from "@material-ui/core";
import FirstImage from '../../img/mainPage/mainBack1.jpg';
import SecondImage from '../../img/mainPage/mainBack2.jpg';
import {brown} from "@material-ui/core/colors";


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
    secondTypography: {
        position: 'fixed',
        top: '20%',
        left: '34%',
        zIndex: 3,
        color: '#55430C',
        fontFamily: 'Cardo',
    },
};

class MainPage extends React.Component {

    render() {

        return (
            <Grid container>
                <Grid item style={styles.backGrid}>
                    <CardMedia image={FirstImage} style={styles.firstCard}/>
                </Grid>
                <Grid item style={styles.secondBackGrid}>
                    <CardMedia image={SecondImage} style={styles.secondCard}/>
                    <Typography variant={"h2"} style={styles.secondTypography}>Testing System</Typography>
                </Grid>
            </Grid>
        )
    };
}

export default MainPage;