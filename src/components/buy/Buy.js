import React, { Fragment } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { shadows } from "@mui/system";
import line from "../../assests/images/line.png";

const Buy = () => {
  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#b5142a" }}>
        <Stack
          direction="row"
          alignItems="center"
          alignContent="center"
          justifyContent="space-evenly"
          sx={{ height: "auto", flexWrap : 'wrap' , pt : '25px' , pb : '25px' }}
        >
          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "20px",
              // fontWeight: 600,
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: 1.8,
              letterSpacing: "normal",
              textAlign: "left",
              color: "#fff",
              height: "20px",
              mt : {xs : '10px'}
              
            }}
          >
            50% OFF ON V2F COINS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "20px",
              // fontWeight: 600,
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: 1.8,
              letterSpacing: "normal",
              textAlign: "left",
              color: "#fff",
              height: "20px",
              mt : {xs : '10px'}
            }}
          >
            50% OFF ON V2F COINS
          </Typography>

          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "20px",
              // fontWeight: 600,
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: 1.8,
              letterSpacing: "normal",
              textAlign: "left",
              color: "#fff",
              height: "20px",
              mt : {xs : '10px'}
            }}
          >
            50% OFF ON V2F COINS
          </Typography>

          <Box
            sx={{
              width: {lg :'271px' , md : '180px' , sm : '150px', xs : '130px'},

              boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              // boxShadow : 3,
              backgroundColor: "#fff",
              mt : {md : '0px' , sm : '20px', xs : '20px'}
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {lg : '61px' , sm : '50px', xs:'45px'},
               
                
              }}
            >
              <Button
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: {lg : '22px' , md :'20px' , sm : '18px' , xs : '18px'},
                  // fontWeight: 600,
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: 1.27,
                  letterSpacing: "0.66",
                  textAlign: "left",
                  color: "#b11705",
                  height: "22px",
                }}
              >
                Buy
              </Button>
             

              <Box component="img" src={line} sx={{width: '2px' ,height: '20px'}}></Box>
              
              <Button
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: {lg : '22px' , md :'20px' , sm : '18px' , xs : '18px'},
                  // fontWeight: 600,
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: 1.27,
                  letterSpacing: "0.66",
                  textAlign: "left",
                  color: "#b11705",
                  height: "22px",
                }}
              >
                view
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Buy;
