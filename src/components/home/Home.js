import React, { Fragment } from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import backgroundMain from "../../assests/images/backgroundMain.png";
import mainImg from "../../assests/images/mainImg.png";
import line from "../../assests/images/line.png";
import { newGeneration, phoneImg, textBox, tradeCrypto } from "../../styles/style";

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
            sx={textBox}
          >
            <Typography
              sx={newGeneration}
            >
              NEW GENERATION FAN TOKENS AND CRYPTOCURRENCY EXCHAN
            </Typography>

            <Box sx={{ 
                display: "flex", ml: {xlg : '70px' , md : '0px'},  alignItems : 'center'
                 }}>
              <Box component="img" src={line} sx={{width: '26px' ,height: '10px'}}></Box>

              <Typography
                sx={tradeCrypto}
              >
                Trade Crypto and Fiat Currencies.
              </Typography>
            </Box>
          </Box>
          
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
              sx={phoneImg}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
