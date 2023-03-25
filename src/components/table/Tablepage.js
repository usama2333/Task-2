import React, { Fragment } from "react";
import { Typography, Container, Stack, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import coinchart from "../../assests/images/coinchart.png";
import line from "../../assests/images/line.png";
// import v2flogo from "../../assests/images/v2flogo.png";
// import zing from "../../assests/images/zing.png";
import greenarrow from "../../assests/images/greenarrow.png";
import redarrow from "../../assests/images/redarrow.png";
import neil from "../../assests/images/neil.png";
// import fetchcoinList from '../../api/FetchCoinList';
import { tableHeader,simpleTableText,dText,greenTypo,v2f, zin , redTypo} from "../../styles/style";

const Tablepage = () => {
  
  // fetchcoinList();

  const headerData  = ['Name' , 'Symbol' , 'Price' , 'Stage Name' , 'Start Date' , 'End Date' , 'Remaning Supply' , 'Total Supply']

   console.log('This is header data',headerData)
  const data = [
  
    {
      name: "DJ NEIL",
      symbol: "NEIL",
      price: 2,
      stageName: "Private Sale 1",
      totalSupply : 2345566,
      remainingSupply : 2345566,
      startDate : "2023-03-05T11:29",
      FinalDate : "2023-03-24T11:29",
      rank : 1,
      imageURL : "https://rest.exchange.staging.v2f.exchange/assets/neil.png"
  },
  {
      name: "V2F",
      symbol: "V2F",
      price : 13,
      stageName: "Private Sale 123",
      totalSupply: 13,
      remainingSupply: 13,
      startDate: "2023-03-23T11:32",
      FinalDate: "2023-04-07T11:32",
      rank: 12,
      imageURL: "https://rest.exchange.staging.v2f.exchange/assets/V2F.png"
  }

]
console.log('this is table page data');
 console.log(data);

//  data.map((data) => {
//   console.log(data.name);
//  })

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ mt: "43px", mb: "131px" }}>
        <Stack
          direction={{ lg: "row", md: "column-reverse", sm :'column-reverse' , xs : 'column-reverse' }}
          alignItems="center"
          justifyContent="space-around"
          spacing={5}
        >
          <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
            <Table sx={{ maxWidth: "1560px" }} aria-label="simple table">
              <TableHead sx={{borderTop : '5px solid #5d2c72', }}>
                <TableRow>
                {headerData.map((data) => (
                  
                  <TableCell align="center" sx={tableHeader}>
                    {data}
                  </TableCell>
                ))}
                  
                  {/* <TableCell align="center" sx={tableHeader}>
                    Symbol
                  </TableCell>
                  <TableCell align="center" sx={tableHeader}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={tableHeader}>
                    Stage Name
                  </TableCell>

                  <TableCell align="center" sx={tableHeader}>
                    Start Date
                  </TableCell>

                  <TableCell align="center" sx={tableHeader}>
                    End Date
                  </TableCell>

                  <TableCell align="center" sx={tableHeader}>
                    Remaning Supply
                  </TableCell>

                  <TableCell align="center" sx={tableHeader}>
                    Total Supply
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>

              {data.map((data) => (
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#f9f0f6",
                      padding: "27.9px 28px 32px 33px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Stack direction="row">
                      <Box
                        component="img"
                        src={data.imageURL}
                        sx={{ width: "23px", height: "36px" }}
                      ></Box>
                      <Typography sx={v2f}>{data.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>{data.symbol}</TableCell>
                  <TableCell>
                    <Stack
                    //  direction='column'

                    //  alignItems='center'
                    >
                      <Box
                        component="img"
                        src={greenarrow}
                        sx={{
                          width: "13.8px",
                          height: "13.8px",
                          display: "flex",
                          alignSelf: "center",
                          justifyContent : 'center'
                        }}
                      ></Box>
                      <Typography sx={greenTypo}>$ {data.price}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>{data.stageName}</TableCell>
                  <TableCell sx={simpleTableText}>{data.startDate}</TableCell>
                  <TableCell
                    sx={{backgroundColor: "#f9f0f6",}}
                  >
                    <Stack>
                      <Typography sx={dText}>{data.FinalDate}</Typography>
                      <Typography sx={simpleTableText}>(remaning)</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>{data.remainingSupply}</TableCell>
                  <TableCell sx={simpleTableText}>{data.totalSupply}</TableCell>
                </TableRow>

              ))}

                
              
{/* 
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#f9f0f6",
                      padding: "27.9px 28px 32px 33px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Stack direction="row">
                      <Box
                        component="img"
                        src={zing}
                        sx={{ width: "34px", height: "34px" }}
                      ></Box>
                      <Typography sx={zin}>Zingerela</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>ZGLA</TableCell>
                  <TableCell>
                    <Stack
                    //  direction='column'

                    //  alignItems='center'
                    >
                      <Box
                        component="img"
                        src={redarrow}
                        sx={{
                          width: "13.8px",
                          height: "13.8px",
                          display: "flex",
                          alignSelf: "center",
                        }}
                      ></Box>
                      <Typography sx={redTypo}>$0.320</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>Pre-Sale </TableCell>
                  <TableCell sx={simpleTableText}>62d ago</TableCell>
                  <TableCell
                   sx={{backgroundColor: "#f9f0f6",}}
                  >
                    <Stack>
                      <Typography sx={dText}>0d</Typography>
                      <Typography sx={simpleTableText}>(remaning)</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>200,000.0</TableCell>
                  <TableCell sx={simpleTableText}>500,000.0</TableCell>
                </TableRow>*/}


                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#f9f0f6",
                      padding: "27.9px 28px 32px 33px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Stack direction="row">
                      <Box
                        component="img"
                        src={neil}
                        sx={{ width: "34px", height: "34px" }}
                      ></Box>
                      <Typography sx={zin}>Dj Neil</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>NEIL</TableCell>
                  <TableCell>
                    <Stack
                    //  direction='column'

                    //  alignItems='center'
                    >
                      <Box
                        component="img"
                        src={redarrow}
                        sx={{
                          width: "13.8px",
                          height: "13.8px",
                          display: "flex",
                          alignSelf: "center",
                        }}
                      ></Box>
                      <Typography sx={redTypo}>$0.320</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>Pre-Sale </TableCell>
                  <TableCell sx={simpleTableText}>62d ago</TableCell>
                  <TableCell 
                   sx={{backgroundColor: "#f9f0f6",}}
                  >
                    <Stack>
                      <Typography sx={dText}>0d</Typography>
                      <Typography sx={simpleTableText}>(remaning)</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>200,000.0</TableCell>
                  <TableCell sx={simpleTableText}>500,000.0</TableCell>
                </TableRow> 


                
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ ml: "23px" , display : 'flex' , flexDirection : 'column' , justifyContent : 'flex-start'}}>
            <Box component="img" src={coinchart} sx={{display :'inline-block' , width :{md : '250px' , xs : '200px'} }}></Box>
            <Box
              component="img"
              src={line}
              sx={{ width: "139px", height: "7px" , mt : '15px' }}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Tablepage;
