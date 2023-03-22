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
import v2flogo from "../../assests/images/v2flogo.png";
import zing from "../../assests/images/zing.png";
import greenarrow from "../../assests/images/greenarrow.png";
import redarrow from "../../assests/images/redarrow.png";
import neil from "../../assests/images/neil.png";
import { tableHeader,simpleTableText,dText,greenTypo,v2f, zin , redTypo} from "../../styles/style";

const Tablepage = () => {
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
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={tableHeader}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={tableHeader}>
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
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                        src={v2flogo}
                        sx={{ width: "23px", height: "36px" }}
                      ></Box>
                      <Typography sx={v2f}>v2f</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>v2f</TableCell>
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
                        }}
                      ></Box>
                      <Typography sx={greenTypo}>$3.470</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>Private sale 5</TableCell>
                  <TableCell sx={simpleTableText}>11d ago</TableCell>
                  <TableCell
                    sx={{backgroundColor: "#f9f0f6",}}
                  >
                    <Stack>
                      <Typography sx={dText}>1d</Typography>
                      <Typography sx={simpleTableText}>(remaning)</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>5,000,000.0</TableCell>
                  <TableCell sx={simpleTableText}>333,333,333.0</TableCell>
                </TableRow>



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
                </TableRow>


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
