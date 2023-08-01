import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BallotIcon from '@mui/icons-material/Ballot';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/img/sahab_logo.png'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <Link to={"/admin"} style={{textDecoration: "none"}}>
          <Box
            component="img"
            sx={{
            mt:1,
            height: 64,
            }}
            alt="sahab logo."
            src={Logo}
           />
           </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Accueil'].map((text) => (
            <Link to={"/admin"} style={{textDecoration: "none"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['Liste Photos', 'Liste Rapports'].map((text, index) => (
            <Link to={index % 2 === 0 ? '/admin/ListePhotos' : '/admin/ListeRapports'} style={{textDecoration: "none"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <BallotIcon /> : <FormatListBulletedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['Scanner Compteur', 'Ajouter Rapport'].map((text, index) => (
            <Link to={index % 2 === 0 ? '/admin/Scanner' : '/admin/Rapport'} style={{textDecoration: "none"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <QrCodeScannerIcon /> : <AddIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <List>
          {['Creer Comptes'].map((text) => (
            <Link to={"/admin/Compte/"} style={{textDecoration: "none"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddIcon /> 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['Liste Comptes', 'Deconnecter'].map((text, index) => (
            <Link to={index % 2 === 0 ? '/admin/ListeComptes' : '/Logout'} style={{textDecoration: "none"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <RecentActorsIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
}