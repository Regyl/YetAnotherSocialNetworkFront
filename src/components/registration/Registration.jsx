import React from 'react';
import {
    Grid, Button,
    Card, CardActions, CardMedia,
    Typography, TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AdminImage from '../../img/admin.jpg'
import ProfessorImage from '../../img/professor.jpg'
import StudentImage from '../../img/student.jpg'
import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";

const styles = {
    adminCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${AdminImage})`,
        minHeight: 165,
    },
    professorCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${ProfessorImage})`,
        minHeight: 165,
    },
    studentCardAction: {
        justifyContent: 'center',
        backgroundImage: `url(${StudentImage})`,
        minHeight: 165,
    },
    cardMedia: {
        minHeight: 165,
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

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminFlipped: false,
            isProfessorFlipped: false,
            isStudentFlipped: false
        };
        this.flipAdminCard = this.flipAdminCard.bind(this);
        this.flipProfessorCard = this.flipProfessorCard.bind(this);
        this.flipStudentCard = this.flipStudentCard.bind(this);
    }

    flipAdminCard(e) {
        e.preventDefault();
        this.setState(prevState => ({ isAdminFlipped: !prevState.isAdminFlipped, isProfessorFlipped: false, isStudentFlipped: false }));
    }
    flipProfessorCard(e) {
        e.preventDefault();
        this.setState(prevState => ({ isProfessorFlipped: !prevState.isProfessorFlipped, isAdminFlipped: false, isStudentFlipped: false }));
    }
    flipStudentCard(e) {
        e.preventDefault();
        this.setState(prevState => ({ isStudentFlipped: !prevState.isStudentFlipped, isAdminFlipped: false, isProfessorFlipped: false }));
    }

        render() {

            return (
                <Grid>
                    <Typography align={"center"}>
                        Choose your champion
                    </Typography>

                    {/*> Administrator card pair*/}
                    <Grid
                        container
                        spacing={2}
                        direction={"row-reverse"}
                        alignItems={"center"}
                        justify={"center"}
                    >
                        <Grid item xs={3}>
                            <ReactCardFlip isFlipped={this.state.isAdminFlipped}>
                                <Card>
                                    <CardActions style={styles.adminCardAction}>
                                        <Button variant={"outlined"} onClick={this.flipAdminCard}>Administrator</Button>
                                    </CardActions>
                                </Card>
                                <Card>
                                    <Grid container
                                        direction={"column"}>
                                        <TextField required label="Login"/>
                                        <TextField required label="Password" type={"password"}/>
                                        <TextField required label="Repeat password" type={"password"}/>
                                        <Button>Register</Button>
                                    </Grid>
                                </Card>
                            </ReactCardFlip>
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
                            <ReactCardFlip isFlipped={this.state.isProfessorFlipped}>
                                <Card>
                                    <CardActions style={styles.professorCardAction}>
                                        <Button variant={"outlined"} onClick={this.flipProfessorCard}>Professor</Button>
                                    </CardActions>
                                </Card>
                                <Card>
                                    <Grid container
                                          direction={"column"}>
                                        <TextField required label="Login"/>
                                        <TextField required label="Password" type={"password"}/>
                                        <TextField required label="Repeat password" type={"password"}/>
                                        <Button>Register</Button>
                                    </Grid>
                                </Card>
                            </ReactCardFlip>
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
                            <ReactCardFlip isFlipped={this.state.isStudentFlipped}>
                                <Card>
                                    <CardActions style={styles.studentCardAction}>
                                        <Button variant={"outlined"} onClick={this.flipStudentCard}>Student</Button>
                                    </CardActions>
                                </Card>
                                <Card>
                                    <Grid container
                                          direction={"column"}>
                                        <TextField required label="Login"/>
                                        <TextField required label="Password" type={"password"}/>
                                        <TextField required label="Repeat password" type={"password"}/>
                                        <Button>Register</Button>
                                    </Grid>
                                </Card>
                            </ReactCardFlip>
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
}
export default Registration;