import * as React from 'react';
import {Box, Toolbar, IconButton, Typography, Button, AppBar, MenuItem, Menu, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {AccountCircle} from "@material-ui/icons";

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


export default function MainPage() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                    >
                        <MenuIcon />
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
                            <MenuItem onClick={handleClose}>Sign in</MenuItem>
                            <MenuItem onClick={handleClose}>Sign up</MenuItem>
                        </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}