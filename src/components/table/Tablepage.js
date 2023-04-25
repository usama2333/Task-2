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
import notFound from '../../assests/images/notFound.jpg';
import neil from '../../assests/images/neil.png';

import {tableHeader,simpleTableText,dText,greenTypo,v2f,zin, redTypo,redArrow,coinChartBox,
  coinChartSx, 
  tableCell} from "../../styles/style";
  import { greenArrowSx, headerData, lineSx, notFoundBox, notFoundSx, tabConPaper, tabImgSx, tableConSx, tableHeaderColor, tableStackDir } from "./style";
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
  

  return (
    <Fragment>
      <Container maxWidth="custom" sx={tableConSx}>
        <Stack
          direction={tableStackDir}
          alignItems="center"
          justifyContent="space-around"
          spacing={5}
        >
          <TableContainer
            component={Paper}
            sx={tabConPaper}
          >
            <Table sx={{ maxWidth: "1700px" }} aria-label="simple table">
              <TableHead sx={tableHeaderColor}>
                <TableRow>
                  {headerData.map((data) => (
                    <TableCell align="center" sx={tableHeader}>
                      {data}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>

              {!show && data.length !==0 && (
                <>             
                 {data.map((data) => (
                  <TableRow>
                    <TableCell
                      sx={tableCell}
                    >
                      <Stack direction="row">
                        {/* <Box
                          component="img"
                          src={data.imageURL}
                          // src={neil}
                          sx={tabImgSx}
                        ></Box> */}
                        <Typography sx={v2f}>{data.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={simpleTableText}>
                    <Box
                          component="img"
                          src={data.imageURL}
                          // src={neil}
                          sx={tabImgSx}
                        ></Box>
                    </TableCell>
                    <TableCell>
                      <Stack>
                        <Box
                          component="img"
                          src={greenarrow}
                          sx={greenArrowSx}
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
              sx={lineSx}
            ></Box>
          </Box>
        </Stack>

        {show && ( 
          <Box
           sx={notFoundBox}
          >
        <Box
         component='img'
         src = {notFound}
         sx={notFoundSx}
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
