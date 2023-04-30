import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSelect from './LanguageSelect';
import i18next from 'i18next';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        {i18next.t('project-management')}
                    </Typography>
                    <LanguageSelect />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
