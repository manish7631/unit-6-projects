import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
export default function ButtonAppBar() {

    const { isAuth, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginClick = () => {

        if (isAuth) {
            logout()

        } else {
            navigate("/login")
        }

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{
                backgroundColor: "white",
                color: "black"
            }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/">MODESENS</Link>

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/product">Products</Link>
                    </Typography>
                    <Button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
