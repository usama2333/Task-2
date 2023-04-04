import React, { Fragment } from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import mainImg from "../../assests/images/mainImg.png";
import line from "../../assests/images/line.png";
import { newGeneration,phoneImg,textBox, tradeCrypto,} from "../../styles/style";
import { conImg, lineBox, lineSx, newGenStack, phoneImgBox } from "./style";

const Home = () => {
  return (
    <Fragment>
      <Container maxWidth="custom" sx={conImg}>
        <Stack direction={newGenStack}>
          <Box sx={textBox}>
            <Typography sx={newGeneration}>
              NEW GENERATION FAN TOKENS AND CRYPTOCURRENCY EXCHANGE
            </Typography>

            <Box sx={lineBox}>
              <Box component="img" src={line} sx={lineSx}></Box>

              <Typography sx={tradeCrypto}>
                Trade Crypto and Fiat Currencies.
              </Typography>
            </Box>
          </Box>

          <Box sx={phoneImgBox}>
            <Box component="img" src={mainImg} sx={phoneImg}></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Home;
