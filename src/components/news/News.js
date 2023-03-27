import React, { Fragment, useEffect, useMemo, useState } from "react";
import {
  Container, Stack, Typography, Box, Button,} from "@mui/material";
import line from "../../assests/images/line.png";
import { buttonInnerBox, buttonOuterBox, buyViewButton, coinOff, } from "../../styles/style";
import fetchgetNews from '../../api/NewsApi';

const News = () => {
  const [fetchedData,setfetchedData]=useState([])

    useEffect(()=>{
      fetchgetNews(setfetchedData);
    },[])

  console.log(fetchedData);

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#b5142a" }}>
        <Stack
          direction={{ lg: "row", sm: "row", xs: "column" }}
          alignItems={{ xs: "center", md: "initial" }}
          alignContent="center"
          justifyContent="space-evenly"
          sx={{ height: "auto", flexWrap: "wrap", pt: { xlg :'20px',lg : '12px' , md : '15px', sm :'0px'}, pb: {xlg :'20px',lg : '12px' , md :'15px', sm :'15px'} }}
        >
          <Typography sx={coinOff}>50% off on all coins</Typography>

          <Typography sx={coinOff}>50% off on all coins</Typography>

          <Typography sx={coinOff}>50% off on all coins</Typography>

          <Box sx={buttonOuterBox}>
            <Box sx={buttonInnerBox}>
              <Button sx={buyViewButton}>Buy</Button>

              <Box
                component="img"
                src={line}
                sx={{ width: "2px", height: "20px" }}
              ></Box>

              <Button sx={buyViewButton}>view</Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default News;
