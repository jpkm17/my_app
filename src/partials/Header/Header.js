import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Header.style';


const Header = () => {
    const classes = useStyles()

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" /*color="secondary"*/>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} >
                    My app
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;