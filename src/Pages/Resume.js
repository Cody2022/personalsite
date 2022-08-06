import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import backgroundImage from "../Images/background.jpg";
import { Document, Page } from 'react-pdf';
import resume from "../Images/Cody_Resume.pdf"

const Resume = () => {
  // const [file, setFile] = useState(resume);
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);

  
  // }
  return (
  //   <Box>
  //     <Grid
  //       style={{
  //         backgroundImage: `url(${backgroundImage})`,
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "cover",
  //       }}
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignContent: "center",
  //         pl: 6,
  //         pt: 8,
  //         pb: 6,
  //       }}
  //     >
  //       <Typography
  //         variant="h3"
  //         sx={{
  //           color: "white",
  //           display: "flex",
  //           justifyContent: "center",
  //           pb: 2,
  //         }}
  //       >
  //         Sixu (Cody) Zheng's Resume
  //       </Typography>
  //     </Grid>
  //     <Divider
  //       variant="middle"
  //       style={{ color: "black" }}
  //       sx={{ borderBottomWidth: 5 }}
  //     >
  //       ***
  //     </Divider>
  //     <Grid>
     
  // );
  //     </Grid>

  //   </Box>
  <div>
      <Document file="../Images/Cody_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default Resume