import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { startLogout } from '../../store/auth';

export const Navbar = ({ drawerWidth= 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout({}) );
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${ drawerWidth }px`}
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div'>Journal App</Typography>
          <IconButton
            color='error'
            onClick={ onLogout }
          >
            <LogoutOutlinedIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
