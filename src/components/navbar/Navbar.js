import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography, Stack } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import navlogo from "../../assests/images/navlogo.png";
import searchicon from "../../assests/images/searchicon.png";
import {getStartedBtn,homeBtn,homeButton,otherBtn,signinBtn,signinButton,simpleButton,
  vipTokenBtn,} from "../../styles/style";
import { buttonsStack, closeNavSx, getStartedButton, iconBox, iconBoxx, logoSx, mainButtonsStack, menuIconSx, navAppBAr, navCon, navLogoFlex, navLogoSx, toolbarBox, toolbarCon } from "./style";


const Navbar = () => {
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
    <Fragment>
      <Container maxWidth="custom" sx={navCon}>
        <AppBar
          position="absolute"
          sx={navAppBAr}
        >
          <Container maxWidth="custom" sx={toolbarCon}>
            <Toolbar disableGutters>
              <Box sx={toolbarBox}>
                <Box
                  component="img"
                  src={navlogo}
                  sx={logoSx}
                ></Box>
              </Box>

              <Box sx={iconBoxx}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon sx={menuIconSx} />
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
                  sx={closeNavSx}
                >
                  <Stack
                    spacing={1}

                    sx={buttonsStack}
                  >
                    <Button sx={homeButton}>Home</Button>
                    <Button sx={simpleButton}>HELP</Button>
                    <Button sx={signinButton}>Sign in</Button>
                  </Stack>
                </Menu>
              </Box>
            
              <Box sx={navLogoFlex}>
                <Box
                  component="img"
                  src={navlogo}
                  sx={navLogoSx}
                ></Box>
              </Box>

              <Stack
                sx={mainButtonsStack}
              >
                <Typography sx={homeBtn}>Home</Typography>
                <Typography sx={otherBtn}>ANNOUCEMENTS</Typography>
                <Typography sx={vipTokenBtn}>VIP FAN TOKEN</Typography>
                <Typography sx={otherBtn}>HELP</Typography>
                <Box component="img" src={searchicon}></Box>
                <Button sx={signinBtn}>Sign in</Button>
              </Stack>

              <Box>
                <Button
                  sx={getStartedButton}
                >
                  <Typography sx={getStartedBtn}>get started</Typography>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </Fragment>
  );
};

export default Navbar;
