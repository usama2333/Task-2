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
import redarrow from "../../assests/images/redarrow.png";
import neil from "../../assests/images/neil.png";
import fetchcoinList from "../../api/FetchCoinList";
import {tableHeader,simpleTableText,dText,greenTypo,v2f,zin, redTypo,redArrow,coinChartBox,
  coinChartSx, 
  tableCell} from "../../styles/style";

const Tablepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchcoinList(setData);
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
            sx={{ overflowX: "auto", ml: { xlg: "70px", md: "0px" } }}
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
                        <Typography sx={simpleTableText}>(remaning)</Typography>
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

                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#f9f0f6",
                      padding: {
                        xlg: "27.9px 28px 32px 33px",
                        md: "0px 0px 0px 10px",
                      },
                      boxSizing: "border-box",
                    }}
                  >
                    <Stack
                      direction="row"
                      // justifyContent='center'
                      alignItems="center"
                    >
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
                    <Stack>
                      <Box
                        component="img"
                        src={redarrow}
                        sx={redArrow}
                      ></Box>
                      <Typography sx={redTypo}>$0.320</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={simpleTableText}>Pre-Sale </TableCell>
                  <TableCell sx={simpleTableText}>62d ago</TableCell>
                  <TableCell sx={{ backgroundColor: "#f9f0f6" }}>
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
      </Container>
    </Fragment>
  );
};

export default Tablepage;
