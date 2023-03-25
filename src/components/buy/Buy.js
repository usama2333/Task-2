import React, { Fragment, useEffect, useMemo, useState } from "react";
import {
  Container, Stack, Typography, Box, Button,} from "@mui/material";
import line from "../../assests/images/line.png";
import { buttonInnerBox, buttonOuterBox, buyViewButton, coinOff, } from "../../styles/style";
// import fetchgetNews from '../../api/Api';
// import data from '../../api/Api';

const Buy = () => {
  // const [fetchedData,setfetchedData]=useState([])

  //   useEffect(()=>{
  //     fetchgetNews(setfetchedData);
  //   },[])

  // console.log("jasdjasgdyjasdyasdsdtf",fetchedData)

  const news = [
    {
      code: 200,
      message: "VIP News List!",
      data: [
        {
          _id: "641d46af39d1757990226ec1",
          date: "2023-03-28T11:43:00.000Z",
          coin: "V2F",
          imageURL:
            "https://rest.exchange.staging.v2f.exchange/assets/news/news-641d3c79afe5d2d44e0cb8ef-1679640239037-home_new.png",
          bgImageURL: "",
          type: "COIN",
          plateForm: "web",
          en: {
            title: "News",
            details: "50% OFF ON V2F COINS",
          },
          createdAt: "2023-03-24T06:43:59.055Z",
          es: {
            title: "sada",
            details: "asdasd",
            createdAt: "2023-03-24T07:16:35.330Z",
          },
          coinType: "dynamic",
          buy: false,
        },
      ],
    },
  ];

  console.log("This is news data");
  console.log(news);
  console.log(news[0].data[0].en.details);
  const data = news[0].data[0].en.details;

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#b5142a" }}>
        <Stack
          direction={{ lg: "row", sm: "row", xs: "column" }}
          alignItems={{ xs: "center", md: "initial" }}
          alignContent="center"
          justifyContent="space-evenly"
          sx={{ height: "auto", flexWrap: "wrap", pt: "25px", pb: "25px" }}
        >
          <Typography sx={coinOff}>{data}</Typography>

          <Typography sx={coinOff}>{data}</Typography>

          <Typography sx={coinOff}>{data}</Typography>

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

export default Buy;
