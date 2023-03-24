import React, { Fragment } from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import backgroundMain from "../../assests/images/backgroundMain.png";
import mainImg from "../../assests/images/mainImg.png";
import line from "../../assests/images/line.png";

const Home = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{
          backgroundImage: `url(${backgroundMain})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Stack direction={{ md: "column", lg: "row" }}>
          <Box
            sx={{
              flexGrow: 1,
              mt: {
                xl: "-150px",
                xlg: "-100px",
                lg: "0px",
                md: "250px",
                sm: "200px",
                xs: "150px",
              },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                ml: {xlg : '70px' , md : '0px'},
                fontFamily: "CityofEmber",
                fontSize: { lg: "55px", md: "50px", sm: "40px", xs: "30px" },
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: { lg: 1.29, md: 1.2 },
                letterSpacing: "normal",
                textAlign: "left",
                color: "#b11705",
              }}
            >
              NEW GENERATION FAN TOKENS AND CRYPTOCURRENCY EXCHAN
            </Typography>

            <Box sx={{ 
                display: "flex", ml: {xlg : '70px' , md : '0px'},  alignItems : 'center'
                 }}>
              <Box component="img" src={line} sx={{width: '26px' ,height: '10px'}}></Box>

              <Typography
                sx={{
                  
                  fontFamily: "Metropolis",
                  fontSize: "30px",
                  fontWeight: 600,
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: {xlg : 1.9 , md : 1.6 , xs : 1.2},
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: "#672a72",
                  ml : '8px',
                  mt : {xs : '10px'}
                }}
              >
                Trade Crypto and Fiat Currencies.
              </Typography>
            </Box>
          </Box>
          {/* <Box>
                <Box
                  component='img'
                  src={line}
                  
                >

                </Box>
                <Typography>
                    Trade Crypto and Fiat Currencies.
                </Typography>
            </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={mainImg}
              sx={{
                width: {
                  xs: "400px",
                  sm: "600px",
                  md: "700px",
                  lg: "600px",
                  xlg: "700px",
                  xl: "auto",
                },
                height: "auto",
                display: "inline-block",
                mt: { sm: "70px", md: "80px", lg: "150px" },
              }}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
