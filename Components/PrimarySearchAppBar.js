import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Drawer state

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer List
  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Home', 'Projects', 'Profile', 'Ask Roger', 'About Us', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '-')}`} passHref legacyBehavior>
              <ListItemButton component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> :
                   index === 1 ? <ConstructionIcon /> :
                   index === 2 ? <AccountCircleIcon /> :
                   index === 3 ? <ChatIcon /> :
                   index === 4 ? <InfoIcon /> :
                   <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)} // Open drawer on click
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Wrap MAKER HOME in a Link for navigation */}
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="span" // Use "span" to avoid default link styling
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: 'inherit', // Maintain inherited color
                textDecoration: 'none', // Remove underline
                '&:hover': {
                  textDecoration: 'none', // Ensure underline doesn't appear on hover
                },
                cursor: 'pointer', // Look clickable
              }}
            >
              MAKER HOME
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Link href="/profile" passHref>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent', // Keeps hover effect consistent
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </Box>
  );
}