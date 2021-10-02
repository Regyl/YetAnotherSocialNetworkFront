import React from 'react';
import {
    Grid, Button,
    Card, CardActions, CardMedia,
    Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AdminImage from '../../img/admin.jpg'
import ProfessorImage from '../../img/professor.jpg'
import StudentImage from '../../img/student.jpg'

const styles = {
    adminCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${AdminImage})`,
        minHeight: 100,
    },
    professorCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${ProfessorImage})`,
        minHeight: 100,
    },
    studentCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${StudentImage})`,
        minHeight: 100,
    },
    cardMedia: {
        minHeight: 100,
    },
}

const useStyles = makeStyles((theme) => ({
    rowReverseGrid: {
        container: true,
        direction: "row-reverse",
        alignItems: "center",
        justify: "center",
    }
}));

const Registration = (props) => {
    this.state = {
        isFlipped: false
    };


        return (
            <Grid>
                <Typography align={"center"}>
                    Choose your champion
                </Typography>

                {/*> Administrator card pair*/}
                <Grid
                    container
                    spacing={2}
                    direction={ "row-reverse"}
                    alignItems={"center"}
                    justify={"center"}
                >
                    <Grid item xs={3}>
                        <Card>
                            <CardActions style={styles.adminCardAction}>
                                <Button variant={"outlined"} color={"primary"}>Administrator</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia image={AdminImage} style={styles.cardMedia}/>
                        </Card>
                    </Grid>
                </Grid>

                {/*> Professor card pair*/}
                <Grid
                    container
                    spacing={3}
                    direction={"row"}
                    alignItems={"center"}
                    justify={"center"}
                    >
                    <Grid item xs={3}>
                        <Card>
                            <CardActions style={styles.professorCardAction}>
                                <Button variant={"outlined"}>Professor</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia image={ProfessorImage} style={styles.cardMedia}/>
                        </Card>
                    </Grid>
                </Grid>

                {/*> Student card pair*/}
                <Grid
                    container
                    spacing={3}
                    direction={"row-reverse"}
                    alignItems={"center"}
                    justify={"center"}
                >
                    <Grid item xs={3}>
                        <Card>
                            <CardActions style={styles.studentCardAction}>
                                <Button variant={"outlined"}>Student</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia image={StudentImage} style={styles.cardMedia}/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        );
}

function handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
}

export default Registration;