import {Button, Grid, TextField} from "@material-ui/core";
import React from "react";

const TextFields = (props) => {

    return (
        <Grid container
              direction={"column"}>
            <TextField required label="Login" onChange={this.handleChangeLogin} id={props.profession} value={this.state.login}/>
            <TextField required label="Password" type={"password"} onChange={this.handleChangePassword} value={this.state.password}/>
            <TextField required
                       error={this.state.isTextFieldError}
                       label={"Repeat password"}
                       type={"password"}
                       value={this.state.repeatPassword}
                       onChange={this.handleChangeRepeatPassword}/>
            <Button disabled={this.state.isButtonDisabled} variant={"outlined"} onClick={this.onRegisterClick}>Register</Button>
        </Grid>
    );
}