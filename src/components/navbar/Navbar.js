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
      <Container maxWidth="custom" sx={{ position: "relative" }}>
        <AppBar
          position="absolute"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="custom" sx={{ mt: "10px" }}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: { md: 1, sm: 0 } }}>
                <Box
                  component="img"
                  src={navlogo}
                  sx={{
                    ml: { xlg: "50px",lg : '15px', md: "0px" },
                    width: {xlg : '228px', lg : '180px' , md : '150px' , sm : '120px'},
                    height: {xlg : '122px',lg :'80px' , md : '70px' , sm : '70px'},
                    display: { xs: "none", md: "flex" },
                  }}
                ></Box>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="black"
                >
                  <MenuIcon sx={{width : '50px' , height : '50px'}} />
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
                    display: {
                      xs: "inline-block",
                      md: "none",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Stack
                    spacing={1}

                    sx={{
                      flexDirection: "column",
                      alignItems: "center",
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <Button sx={homeButton}>Home</Button>
                    <Button sx={simpleButton}>HELP</Button>
                    <Button sx={signinButton}>Sign in</Button>
                  </Stack>
                </Menu>
              </Box>
            
              <Box sx={{ flexGrow: { md: 0, sm: 1, xs: 1 } }}>
                <Box
                  component="img"
                  src={navlogo}
                  sx={{
                    width: { md: "228px", lg: "228px", xs: "128px" },
                    height: { md: "128px", lg: "128px", xs: "100px" },
                    display: { xs: "none", md: "none" },
                  }}
                ></Box>
              </Box>

              <Stack
                sx={{
                  flexGrow: 1,
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                  display: { xs: "none", md: "flex" },
                }}
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
                  sx={{
                    mr: { xlg: "80px", md: "0px" },
                    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
                    backgroundImage:
                      "linear-gradient(115deg, #662a74 6%, #802255 95%)",
                  }}
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
