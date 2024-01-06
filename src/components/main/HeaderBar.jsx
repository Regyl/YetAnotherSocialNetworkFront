import React, {Component} from "react";
import {AppBar, Breadcrumbs, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {API} from "../../api/API";
import HistoryPaths from "../../enums/HistoryPaths";
import {withRouter} from "react-router-dom";
import GlobalVariables from "../../enums/GlobalVariables";


class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAccountClick = this.handleAccountClick.bind(this);
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget})
    };

    handleLogout() {
        API.logout().then(this.props.history.push(HistoryPaths.Home));
        this.handleClose();
    }

    handleAccountClick() {
        this.props.history.push({pathname: HistoryPaths.Account});
        this.handleClose();
    }

    render() {
        return(
            <Grid item style={{width: '100%', height: '100%'}}>
                <AppBar position="static" style={{backgroundColor: GlobalVariables.basicColor}}>
                    <Toolbar>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                {GlobalVariables.name}
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
                        <IconButton
                            size="medium"
                            color="inherit"
                            onClick={this.handleMenu}
                            style={{marginLeft: 'auto'}}>
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.handleAccountClick}>My account</MenuItem>
                            <MenuItem onClick={this.handleLogout}>Sign out</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Grid>
        );
    }

}

export default withRouter(HeaderBar);