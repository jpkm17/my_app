import { useState } from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from './Header.style';


const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const[menuOpen, setMenuOpen]= useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)   
    }

    const handleMenuClick = route =>{
        handleToggleMenu()
        history.push(route)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" /*color="secondary"*/>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={()=> handleToggleMenu()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        My app
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={()=> handleToggleMenu()}>
                <List>
                    <ListItem button onClick={()=> handleMenuClick('/')}>
                        <ListItemIcon> 
                            <HomeIcon />
                        </ListItemIcon>   
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={()=> handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>   
                        <ListItemText>Cadastro de clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default Header;