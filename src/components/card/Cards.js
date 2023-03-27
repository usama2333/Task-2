import React, { Fragment } from "react";
import {Container, Stack,Typography,Box,Card,CardContent,CardMedia,} from "@mui/material";
import celebs from "../../assests/images/celebs.png";
import line from "../../assests/images/line.png";
import downarrow from "../../assests/images/downarrow.png";
import uparrow from "../../assests/images/uparrow.png";
import firstlogo from "../../assests/images/firstlogo.png";
import greenarrow from "../../assests/images/greenarrow.png";
import mlppic from "../../assests/images/mlppic.png";
import third from "../../assests/images/third.png";
import arrows from "../../assests/images/arrows.png";
import dot from "../../assests/images/dot.png";
import dollars from "../../assests/images/dollars.png";
import cardprofile1 from "../../assests/images/cardprofile1.png";
import cardprofile2 from "../../assests/images/cardprofile2.png";
import cardprofilepic3 from "../../assests/images/cardprofilepic3.png";
import {cardHeaderText,cardV2fText,cardIconText,arrowBox,cebLine, cardSx,cardMediaSx,
  cardMediaBox, logoSx,celebsBox, profilePicSx,v2fValueBox,coinRow,priceRow,bottomArrow, 
  dotBox,profilePicLast,flexBox,} from "../../styles/style";

const Cards = () => {

  const data = [
    {
      userName: "NEIL",
      coinName: "NEIL",
      coinValue: "12",
      coinV2FValue: "0.15384615",
      headerPhoto: "",
      headerPhotoMob: "",
      profilePhoto: "https://rest.exchange.staging.v2f.exchange/api/assets/celebrity/profilePhoto_1679639630601_Screenshot2023-03-24112349.png",
      hash: "",
      insta: "",
      fb: "",
      twitter: "",
      linkedIn: "",
      tiktok: "",
      engBio: "<p>asd</p>",
      bio: "<p>asdadada</p>",
      embedLink: "",
      rank: 32,
      category: "",
      selfUsdPrice: 0,
      friendAndFamilyUsdPrice: 0,
      businessUsdPrice: 0,
      businessFastDeliveryUsdPrice: 0,
      othersFastDeliveryUsdPrice: 0,
      buyWithV2f: true,
      profileVideo: "",
      active: true,
      bookingStatus: false,
      _id: "641d444e39d17579902269ee",
      createdAt: "2023-03-24T06:33:50.654Z",
      updatedAt: "2023-03-24T06:33:50.654Z",
      __v: 0,
      ieoInfo: {
          rank: 0,
          imageURL: "https://rest.exchange.staging.v2f.exchange/assets/neil.png",
          _id: "641d434039d1757990226792",
          totalSupply: 23444334,
          remainingSupply: 23444334,
          symbol: "NEIL",
          usdPrice: 2121,
          ethPrice: 0,
          btcPrice: 0,
          type: "VIP",
          agencyPercentage: 13,
          VIPPercentage: 20,
          plateformPercentage: 60,
          __v: 0,
          createdAt: "2023-03-24T06:29:20.231Z",
          updatedAt: "2023-03-24T06:29:20.231Z",
          stageData: {
              active: true,
              imageURL: "https://rest.exchange.staging.v2f.exchange/assets/neil.png",
              _id: "641d437839d1757990226809",
              supply: 2345566,
              remainingSupply: 2345566,
              startDuration: "2023-03-05T11:29",
              endDuration: "2023-03-24T11:29",
              stage: "Private Sale 1",
              bonusPercentage: 3,
              usdPrice: 2,
              ethPrice: 1,
              btcPrice: 1,
              minPurchase: 1,
              softCap: 1,
              hardCap: 1,
              ieoInfoId: "641d434039d1757990226792",
              __v: 0,
              createdAt: "2023-03-24T06:30:16.427Z",
              updatedAt: "2023-03-24T06:30:16.427Z"
          },
          id: "641d434039d1757990226792"
      },
      buyStatus: {
          coin: "DJ NEIL",
          symbol: "NEIL",
          deposit: false,
          withdraw: false,
          swap: false,
          buy: false,
          _id: "641d41ce39d1757990226482",
          __v: 0
      },
      supportedcoin: {
          imageURL: "https://rest.exchange.staging.v2f.exchange/assets/neil.png",
          isActive: true,
          rank: 1,
          _id: "641d41ce39d1757990226480",
          coinName: "DJ NEIL",
          coinSymbol: "NEIL",
          coinBase: "LIBOCOIN",
          created_at: "2023-03-24T06:23:10.193Z",
          updated_at: "2023-03-24T06:23:10.194Z",
          __v: 0,
      },
      id: "641d444e39d17579902269ee",
  }

  ]


  console.log(' This is card section data');
  console.log(data);

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#f9f0f6" }}>
        <Stack
          direction={{ xl: "row", lg: "column", xs: "column" }}
          justifyContent={{ lg: "space-around", md: "center" }}
          alignItems={{ lg: "space-around" }}
        >
          <Box sx={celebsBox}>
            <Box
              component="img"
              src={celebs}
              sx={{ width: "300px", height: "140px" }}
            ></Box>
            <Box component="img" src={line} sx={cebLine}></Box>
          </Box>

          <Stack
            sx={{ pt: {xs : '80px' , sm : '100px' }, pb: {xs : '60px' , md : '85px'}, flexWrap: "wrap" }}
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-around"
            alignItems="center"
            spacing={{ xl: 9, md: 2, xs: 4 }}
          >
            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia sx={cardMediaSx}>
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>MARIA LAPIEDRA</Typography>
                    <Box component="img" src={firstlogo} sx={logoSx}></Box>
                  </Box>
                </CardMedia>

                <CardContent sx={{padding : '0px' }}>
                  <Box
                    component="img"
                    src={cardprofile1}
                    sx={profilePicSx}
                  ></Box>
                  <Box sx={v2fValueBox}>
                    <Typography sx={cardV2fText}>v2f Value</Typography>

                    <Box
                     sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={greenarrow}
                        sx={{ width: "25px", height: "25px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>$0.012</Typography>
                    </Box>
                  </Box>

                  <Box sx={coinRow}>
                    <Typography sx={cardV2fText}>Coin</Typography>

                    <Box
                     sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={mlppic}
                        sx={{ width: "29px", height: "29px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>MLP</Typography>
                    </Box>
                  </Box>

                  <Box sx={priceRow}>
                    <Typography sx={cardV2fText}>Price</Typography>

                    <Box
                     sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={dollars}
                        sx={{ width: "29px", height: "29px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>$ 1.90</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Box sx={{ position: "relative" }}>
                <Box sx={bottomArrow}>
                  <Box component="img" src={uparrow}></Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia sx={cardMediaSx}>
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>MARIA LAPIEDRA</Typography>
                    <Box component="img" src={firstlogo} sx={logoSx}></Box>
                  </Box>
                </CardMedia>

                <CardContent sx={{padding : '0px'}}>
                  <Box
                    component="img"
                    src={cardprofile2}
                    sx={profilePicSx}
                  ></Box>
                  <Box sx={v2fValueBox}>
                    <Typography sx={cardV2fText}>v2f Value</Typography>

                    <Box
                     sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={greenarrow}
                        sx={{ width: "25px", height: "25px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>$0.012</Typography>
                    </Box>
                  </Box>

                  <Box sx={coinRow}>
                    <Typography sx={cardV2fText}>Coin</Typography>

                    <Box
                      sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={mlppic}
                        sx={{ width: "29px", height: "29px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>MLP</Typography>
                    </Box>
                  </Box>

                  <Box sx={priceRow}>
                    <Typography sx={cardV2fText}>Price</Typography>

                    <Box
                      sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={dollars}
                        sx={{ width: "29px", height: "29px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>$ 1.90</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Box sx={{ position: "relative" }}>
                <Box sx={bottomArrow}>
                  <Box
                    component="img"
                    src={uparrow}

                    // sx={{ display : 'inline-block'}}
                  ></Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia
                  sx={{ pt: "25px", pb: "25px", backgroundColor: "#b11705" }}
                >
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>MARIA LAPIEDRA</Typography>
                    <Box component="img" src={third} sx={logoSx}></Box>
                  </Box>
                </CardMedia>

                <CardContent sx={{padding : '0px'}}>
                  <Box
                    component="img"
                    src={cardprofilepic3}
                    // sx={profilePicSx}
                    sx={profilePicLast}
                  ></Box>
                  <Box sx={v2fValueBox}>
                    <Typography sx={cardV2fText}>v2f Value</Typography>

                    <Box
                     sx={flexBox}
                    >
                      <Box
                        component="img"
                        src={greenarrow}
                        sx={{ width: "25px", height: "25px", mr: "7px" }}
                      ></Box>
                      <Typography sx={cardIconText}>$0.012</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Box sx={{ position: "relative" }}>
                <Box sx={bottomArrow}>
                  <Box
                    component="img"
                    src={downarrow}

                    // sx={{ display : 'inline-block'}}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>

        <Box sx={dotBox}>
          <Box component="img" src={arrows}></Box>
          <Box
            component="img"
            src={dot}
            sx={{ position: "absolute", right: "15px", top: "2px" }}
          ></Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Cards;
