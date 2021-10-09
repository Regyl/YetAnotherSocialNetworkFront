import React from 'react';
import {Box, Button, Card, Grid, TextField} from "@material-ui/core";
import {API} from "../../api/API";
import axios from "axios";


class Authorisation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
    }
    handleChangeLogin(e) {
        this.setState({login: e.target.value});
    }
    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }
    onLoginClick(e) {
        let user = 'username='+this.state.login+'&password='+this.state.password;
        axios.post('http://localhost:8080/sign-in', user, {withCredentials: true});
        let resp = axios.get('http://localhost:8080/tests/', {withCredentials: true}).then((response) => {console.log(response)});
        /*let response = API.loginIn(user)
            .then((response) => {
                console.log(response.getHeader('Set-Cookie') + '1');
            })
            .catch((err) => {
                console.log(err.status + 'err')
            });*/
    }

    render() {

        return (
            <Grid container
                  direction={"column"}
                  spacing={2}
                  justifyContent={"center"}
            >
                <Grid item xs={3}>
                    <Card>
                        <TextField required label="Login" onChange={this.handleChangeLogin} id={"Administrator"} value={this.state.login}/>
                        <TextField required label="Password" type={"password"} onChange={this.handleChangePassword} value={this.state.password}/>
                        <Button variant={"outlined"} onClick={this.onLoginClick}>Sign in</Button>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Authorisation;