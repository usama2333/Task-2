import React, { Fragment, useState , useEffect } from "react";
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
import fetchCardList from "../../api/CardsApi";

const Cards = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCardList(setData);
  }, []);

  console.log('This is card component data',data);
 
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

          {data.map((data) => (

          
            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia sx={cardMediaSx}>
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>{data.userName}</Typography>
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
                      <Typography sx={cardIconText}>{data.coinV2FValue}</Typography>
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
                        sx={{ width: "29px", height: "29px", mr: "7px", ml : '-35px' }}
                      ></Box>
                      <Typography sx={cardIconText}>{data.coinName}</Typography>
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
                        sx={{ width: "29px", height: "29px", mr: "7px" ,ml : '-61px'}}
                      ></Box>
                      <Typography sx={cardIconText}>{data.coinValue}</Typography>
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
            ))}


            {data.map((data) => (

           

            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia sx={cardMediaSx}>
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>{data.userName}</Typography>
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
                        sx={{ width: "25px", height: "25px", mr: "7px", }}
                      ></Box>
                      <Typography sx={cardIconText}>{data.coinV2FValue}</Typography>
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
                        sx={{ width: "29px", height: "29px", mr: "7px" ,ml : '-35px'}}
                      ></Box>
                      <Typography sx={cardIconText}>{data.coinName}</Typography>
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
                        sx={{ width: "29px", height: "29px", mr: "7px" ,ml : '-61px'}}
                      ></Box>
                      <Typography sx={cardIconText}>{data.coinValue}</Typography>
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
            ))}

            {data.map((data) => (
            <Box sx={{ position: "relative" }}>
              <Card sx={cardSx}>
                <CardMedia
                  sx={{ pt: "25px", pb: "25px", backgroundColor: "#b11705" }}
                >
                  <Box sx={cardMediaBox}>
                    <Typography sx={cardHeaderText}>{data.userName}</Typography>
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
                      <Typography sx={cardIconText}>{data.coinV2FValue}</Typography>
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
            ))}

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
