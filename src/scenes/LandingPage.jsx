import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate()
    return (
        <AppBar>
            <Toolbar sx={{color: 'white'}}>
                <IconButton>
                    <Typography variant={'subtitle1'} onClick={()=>navigate('/register')} sx={{color: 'white'}}>Register</Typography>
                </IconButton>
                <IconButton>
                    <Typography variant={'subtitle1'} onClick={()=>navigate('/login')} sx={{color: 'white'}}>Login</Typography>
                </IconButton>
                <IconButton>
                    <Typography variant={'subtitle1'} onClick={()=>navigate('/admin')} sx={{color: 'white'}}>Admin</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default LandingPage