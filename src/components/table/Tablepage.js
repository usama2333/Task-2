import React, { Fragment, useState, useEffect } from "react";
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
import greenarrow from "../../assests/images/greenarrow.png";
import Alert from '@mui/material/Alert';
import fetchcoinList from "../../api/FetchCoinList";
import notFound from '../../assests/images/notFound.jpg'
import {tableHeader,simpleTableText,dText,greenTypo,v2f,zin, redTypo,redArrow,coinChartBox,
  coinChartSx, 
  tableCell} from "../../styles/style";
  import CircularProgress from '@mui/material/CircularProgress';

const Tablepage = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState();
  const [show , setShow] = useState(false);
  

  useEffect(() => {
    fetchcoinList(setData,setLoading,setError,setShow);
  }, []);

  console.log(data);
  const headerData = [ "Name","Symbol","Price","Stage Name","Start Date","End Date","Remaning Supply","Total Supply"];

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ mt: "43px", mb: "131px" }}>
        <Stack
          direction={{lg: "row",md: "column-reverse",sm: "column-reverse",xs: "column-reverse",}}
          alignItems="center"
          justifyContent="space-around"
          spacing={5}
        >
          <TableContainer
            component={Paper}
            sx={{ overflowX: "auto", ml: { xlg: "70px", lg: "15px" } }}
          >
            <Table sx={{ maxWidth: "1700px" }} aria-label="simple table">
              <TableHead sx={{ borderTop: "5px solid #5d2c72" }}>
                <TableRow>
                  {headerData.map((data) => (
                    <TableCell align="center" sx={tableHeader}>
                      {data}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>


              {/* {loading &&
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
              } */}
             
              {!show && data.length !==0 && (
                <>             
                 {data.map((data) => (
                  <TableRow>
                    <TableCell
                      sx={tableCell}
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
                      <Stack>
                        <Box
                          component="img"
                          src={greenarrow}
                          sx={{
                            width: "13.8px",
                            height: "13.8px",
                            display: "flex",
                            alignSelf: "center",
                            justifyContent: "center",
                          }}
                        ></Box>
                        <Typography sx={greenTypo}>$ {data.price}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={simpleTableText}>{data.stageName}</TableCell>
                    <TableCell sx={simpleTableText}>{data.startDate}</TableCell>
                    <TableCell sx={{ backgroundColor: "#f9f0f6" }}>
                      <Stack>
                        <Typography sx={dText}>{data.FinalDate}</Typography>
                        {/* <Typography sx={simpleTableText}>(remaning)</Typography> */}
                      </Stack>
                    </TableCell>
                    <TableCell sx={simpleTableText}>
                      {data.remainingSupply}
                    </TableCell>
                    <TableCell sx={simpleTableText}>
                      {data.totalSupply}
                    </TableCell>
                  </TableRow>
                ))}
                </>
              )}


              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={coinChartBox}
          >
            <Box
              component="img"
              src={coinchart}
              sx={coinChartSx}
            ></Box>
            <Box
              component="img"
              src={line}
              sx={{ width: "139px", height: "7px", mt: "15px" }}
            ></Box>
          </Box>
        </Stack>

        {show && ( 
          <Box
           sx={{
            display : 'flex' , justifyContent : 'center' , alignItems : 'center',
            flexDirection : {xs :'column' , md :'row'}
           }}
          >
        <Box
         component='img'
         src = {notFound}
         sx={{width : '300px' , height : '300px' , display : 'inline-block'}}
        >
        </Box>
        <Alert variant="filled" severity="error">
        {error}
       </Alert>
        </Box> )}

      </Container>
    </Fragment>
  );
};

export default Tablepage;
