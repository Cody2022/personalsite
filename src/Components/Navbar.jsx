import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate } from 'react-router-dom';


const ResponsiveAppBar = () => {
  const navigate=useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "#03c7d1" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 3,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Comic Sans MS",
              fontWeight: 700,
              //   letterSpacing: '.3rem',

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Welcome to Cody's site
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper": {
                  boxSizing: "border-box",
                  width: 100,
                  backgroundColor: "#09eef9bf",
                },
              }}
            >
              <div style={{backgroundColor:"#03c7d1"}} >
              <MenuItem onClick={()=>{
                navigate("/");
                handleCloseNavMenu()}}>
                <Typography textAlign="center">Software Engineer</Typography>
              </MenuItem>
              <MenuItem onClick={()=>{
                  navigate("/petroleumengineer");
                  handleCloseNavMenu()}}>
                <Typography textAlign="center">Petroleum Engineer</Typography>
              </MenuItem>
              <MenuItem onClick={()=>{
                  navigate("/interests");
                  handleCloseNavMenu()}}>
                <Typography textAlign="center">Interests</Typography>
              </MenuItem>
              <MenuItem onClick={()=>{
                  navigate("/resume");
                  handleCloseNavMenu()}}>
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
              </div>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Comic Sans MS",
              fontWeight: 700,
              //   letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Weclome to Cody's site
          </Typography>
          <Box sx={{ pl: 12, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/")}
              sx={{
                my: 2,
                color: "white",
                fontSize: "1rem",
                textTransform: "capitalize",
                display: "block",
              }}
            >
              Software Engineer
            </Button>
            <Button
              onClick={() => navigate("/petroleumengineer")}
              sx={{
                my: 2,
                color: "white",
                fontSize: "1rem",
                textTransform: "capitalize",
                display: "block",
              }}
            >
              Petroleum Engineer
            </Button>
            <Button
              onClick={() => navigate("/interests")}
              sx={{
                my: 2,
                color: "white",
                fontSize: "1rem",
                textTransform: "capitalize",
                display: "block",
              }}
            >
              Interests
            </Button>
            <Button
              onClick={() => navigate("/resume")}
              sx={{
                my: 2,
                color: "white",
                fontSize: "1rem",
                textTransform: "capitalize",
                display: "block",
              }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
