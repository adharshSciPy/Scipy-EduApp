import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <AppBar position='static'>
                <Toolbar sx={{ color: 'white' }}>
                    <IconButton>
                        <Typography variant={'subtitle1'} onClick={() => navigate('/register')} sx={{ color: 'white' }}>Register</Typography>
                    </IconButton>
                    <IconButton>
                        <Typography variant={'subtitle1'} onClick={() => navigate('/login')} sx={{ color: 'white' }}>Login</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Box sx={{mt:5}}>
                   <Typography variant="h6" color="initial"> Welcome Page</Typography>
            </Box>
        </>
    )
}

export default LandingPage