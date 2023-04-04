import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import line from "../../assests/images/line.png";
import {buttonInnerBox, buttonOuterBox,buyViewButton,coinOff,} from "../../styles/style";
import fetchgetNews from "../../api/NewsApi";
import CircularProgress from "@mui/material/CircularProgress";
import { buyViewLine, newsSx } from "./style";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    fetchgetNews(setfetchedData, setLoading, setError);
  }, []);

  console.log(fetchedData);

  return (
    <Fragment>
      <Container maxWidth="custom" sx={{ backgroundColor: "#b5142a" }}>
        <Stack
          direction={{ lg: "row", sm: "row", xs: "column" }}
          alignItems={{ xs: "center", md: "initial" }}
          alignContent="center"
          justifyContent="space-evenly"
          sx={newsSx}
        >
          {loading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}

          {fetchedData.length !== 0 && !loading ? (
            <>
              <Typography sx={coinOff}>{fetchedData}</Typography>
              <Typography sx={coinOff}>{fetchedData}</Typography>
              <Typography sx={coinOff}>{fetchedData}</Typography>
            </>
          ) : (
            <Typography sx={coinOff}>{error}</Typography>
          )}

          <Box sx={buttonOuterBox}>
            <Box sx={buttonInnerBox}>
              <Button sx={buyViewButton}>Buy</Button>

              <Box component="img" src={line} sx={buyViewLine}></Box>

              <Button sx={buyViewButton}>view</Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default News;
