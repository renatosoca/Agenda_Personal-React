import { useDispatch } from 'react-redux';

import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar
      position='fixed'
      sx={{ 
        width: { sm: `calc(100% - ${ drawerWidth }px)` } ,
        ml: { sm: `${ drawerWidth }px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center' >
          <Typography variant='h6' noWrap component='div' >Diario</Typography>

          <IconButton
            onClick={ handleLogout }
            color='error'
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
