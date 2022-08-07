import { Button, Divider, Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import backgroundImage from "../Images/background.jpg";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from "../Images/Cody_Resume.pdf";
import "./pdf.css";


const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Box>
      <Grid
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          pl: 6,
          pt: 8,
          pb: 6,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            pb: 2,
          }}
        >
          Sixu (Cody) Zheng's Resume
        </Typography>
      </Grid>
      <Divider
        variant="middle"
        style={{ color: "black" }}
        sx={{ borderBottomWidth: 5 }}
      >
        ***
      </Divider>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <Link
          href={resume}
          download
          sx={{
            color: "black",
            fontSize: "1.2rem",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          Download Cody's Resume
        </Link>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Document
          file={resume}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
          display={"flex"}
          justifyContent={"center"}
        >
          <Page width={800} pageNumber={pageNumber} />
        </Document>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </Typography>
        <Grid item display={"flex"} justifyContent={"center"}>
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            sx={{ textTransform: "capitalize", color: "purple" }}
          >
            Previous
          </Button>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            sx={{ textTransform: "capitalize", color: "purple" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Resume