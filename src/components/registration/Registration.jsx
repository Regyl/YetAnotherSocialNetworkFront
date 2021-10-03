import React from 'react';
import {
    Grid, Button,
    Card, CardActions, CardMedia,
    Typography, TextField
} from "@material-ui/core";
import AdminImage from '../../img/admin.jpg'
import ProfessorImage from '../../img/professor.jpg'
import StudentImage from '../../img/student.jpg'
import ReactCardFlip from "react-card-flip";
import {API} from "../../api/API";

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
        minHeight: 185,
    },
}

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminFlipped: false,
            isProfessorFlipped: false,
            isStudentFlipped: false,
            isButtonDisabled: true,
            isTextFieldError: false,
            login: '',
            password: '',
            repeatPassword: '',
            userType: ''
        };
        this.flipAdminCard = this.flipAdminCard.bind(this);
        this.flipProfessorCard = this.flipProfessorCard.bind(this);
        this.flipStudentCard = this.flipStudentCard.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
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
    handleChangeLogin(e) {
        this.setState({login: e.target.value, userType: e.target.id});
    }
    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }
    handleChangeRepeatPassword(e) {
        this.setState({repeatPassword: e.target.value})
        if (this.state.password !== e.target.value) {
            this.setState({isButtonDisabled: true, isTextFieldError: true})
        } else if(this.state.login !== '') {
            this.setState({isButtonDisabled: false, isTextFieldError: false})
        }

    }
    onRegisterClick() {
        let user = {
            login: this.state.login,
            password: this.state.password,
            authority: this.state.userType
        }
        let response = API.postNewUser(JSON.stringify(user))
            .then((response) => {
                console.log(response.status)
            })
            .catch((err) => {
                console.log(err.response.status)
                if(err.response.status === 400) {
                    this.setState({
                        login: '',
                        password: ''
                    })
                }
            });

    }

        render() {

            return (
                <Grid>
                    <Typography align={"center"} >
                        Choose your champion
                    </Typography>

                    {/*> Administrator card pair*/}
                    <Grid
                        container
                        spacing={2}
                        direction={"row-reverse"}
                        alignItems={"center"}
                        justifyContent={"center"}
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
                                        <TextField required label="Login" onChange={this.handleChangeLogin} id={"Administrator"} value={this.state.login}/>
                                        <TextField required label="Password" type={"password"} onChange={this.handleChangePassword} value={this.state.password}/>
                                        <TextField required
                                                   error={this.state.isTextFieldError}
                                                   label={"Repeat password"}
                                                   type={"password"}
                                                   value={this.state.repeatPassword}
                                                   onChange={this.handleChangeRepeatPassword}/>
                                        <Button disabled={this.state.isButtonDisabled} variant={"outlined"} onClick={this.onRegisterClick}>Register</Button>
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
                                        <TextField required label="Login" onChange={this.handleChangeLogin} id={"Professor"} value={this.state.login}/>
                                        <TextField required label="Password" type={"password"} onChange={this.handleChangePassword} value={this.state.password}/>
                                        <TextField required
                                                   error={this.state.isTextFieldError}
                                                   label={"Repeat password"}
                                                   type={"password"}
                                                   value={this.state.repeatPassword}
                                                   onChange={this.handleChangeRepeatPassword}/>
                                        <Button variant={"outlined"} onClick={this.onRegisterClick}>Register</Button>
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
                                        <TextField required label="Login" onChange={this.handleChangeLogin} id={"Student"} value={this.state.login}/>
                                        <TextField required label="Password" type={"password"} onChange={this.handleChangePassword} value={this.state.password}/>
                                        <TextField required
                                                   error={this.state.isTextFieldError}
                                                   label={"Repeat password"}
                                                   type={"password"}
                                                   value={this.state.repeatPassword}
                                                   onChange={this.handleChangeRepeatPassword}/>
                                        <Button variant={"outlined"} onClick={this.onRegisterClick}>Register</Button>
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