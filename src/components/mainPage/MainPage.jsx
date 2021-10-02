import React from 'react';
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
    AppBar,
    MenuItem,
    Menu,
    makeStyles,
    withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {AccountCircle} from "@material-ui/icons";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [
            theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));


const MainPage = (props) => {

        const classes = useStyles(MainPage);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        //const {history} = props

        return (
            <Box className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Testing System
                        </Typography>
                        <IconButton
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem
                                linkButton
                                component={Link}
                                to={'authorisation'}
                            >Sign in</MenuItem>
                            <MenuItem
                                linkButton
                                component={Link}
                                to={'registration'}
                            >Sign up</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        );
}

export default MainPage;