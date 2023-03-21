import React, { Fragment } from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import backgroundMain from "../../assests/images/backgroundMain.png";
import mainImg from "../../assests/images/mainImg.png";
import phone from "../../assests/images/phone.png";

const Home = () => {
  return (
    <Fragment>
      <Container
        maxWidth="custom"
        sx={{ backgroundImage: `url(${backgroundMain})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover' }}
      >
        <Stack direction={{md : 'column' , lg : 'row'}}>
          <Box sx={{ flexGrow: 1 , mt : {lg : '400px' , md : '250px', sm : '200px' , xs : '150px'},display: "flex",
                justifyContent: "center",
                 }}>
            <Typography
              sx={{
                ml : '70px',
                fontFamily: "CityofEmber",
                fontSize: {lg : '55px' , md : '55px', sm : '40px' , xs : '30px'},
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: 1.29,
                letterSpacing: "normal",
                textAlign: "left",
                color: "#b11705",
              }}
            >
              NEW GENERATION FAN TOKENS AND 
              CRYPTOCURRENCY EXCHAN
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 ,display: "flex",
                justifyContent: "center",
                alignItems: "center", }}>
          
            <Box
             component='img'
             src = {mainImg}
             sx={{
                
                width: {xs : '400px',sm : '600px',md : '700px',lg : '600px' , xlg : '700px' , xl : 'auto'},
                height: 'auto',
                display : 'inline-block',
                mt : {sm : '70px',md : '80px', lg : '200px'},
                
                
             }}
            >

            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
