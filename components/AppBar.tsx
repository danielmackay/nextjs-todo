import React from 'react';
import { makeStyles, Theme, createStyles } from '@mui/material';
import AppBar from '@mui/material';
import Toolbar from '@mui/material';
import IconButton from '@mui/material';
import Typography from '@mui/material';
import Badge from '@mui/material';
import MenuItem from '@mui/material';
import Menu from '@mui/material';
import AccountCircle from '@mui/material';
import MailIcon from '@mui/material';
import NotificationsIcon from '@mui/material';
import { Switch } from '@mui/material';

interface IAppBarProps {
  darkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      // display: 'none',
      // [theme.breakpoints.up('sm')]: {
      display: 'block',
      //},
    },
  }),
);

const PrimarySearchAppBar = (props: IAppBarProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { darkMode, toggleDarkMode } = props;

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

      <MenuItem>
        <Typography display="inline" >Dark Mode</Typography>
        <Switch checked={darkMode} onChange={() => toggleDarkMode(!darkMode)} />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My Personal Trainer
          </Typography>
          <div className={classes.grow} />
          <div>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default PrimarySearchAppBar;
