import { Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import backgroundImage from "../Images/background.jpg";
import AI from "../Images/AI.jpg";
import IoT from "../Images/IoT.jpg";
import renewableenergy from "../Images/renewableenergy.jpg";
import universe1 from "../Images/jameswebb1.jpg";
import robotics from "../Images/robotics.jpg";


const Interests = () => {
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
          pt: 6,
          pb: 4,
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
          Sixu (Cody) Zheng
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          Ph.D., P.Eng.
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"serif"}
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            pl: 8,
            pr: 8,
          }}
        >
          I enjoy exploring and learning new things. My interests include
          Internet of Things (IoT), Artificial Intelligence (AI) and Robotics,
          Renewable Energy, and Universe. I am passionate about applying my
          engineering knowledge and software development skills to solve
          problems and create value to our society.
        </Typography>
      </Grid>
      <Divider
        variant="middle"
        style={{ color: "black" }}
        sx={{ borderBottomWidth: 5 }}
      >
        ***
      </Divider>
      <Grid
        style={{
          backgroundColor: "#cbf0e28c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        sx={{ pt: 2, pb: 0 }}
      ></Grid>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        style={{
          background:
            "linear-gradient(66deg, rgba(236,241,211,1) 9%, rgba(136,176,238,1) 61%, rgba(39,168,194,0.8464519596901261) 100%)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            m: 2,
            borderRadius: 3,
            background: "rgb(19, 4, 71)",
            boxShadow: 6,
          }}
        >
          <CardMedia
            component="img"
            height="370"
            image={IoT}
            alt="IoT"
          />
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Internet of things (IoT)
          </Typography>
        </Card>
        <Card
          sx={{
            maxWidth: 550,
            m: 2,
            borderRadius: 3,
            background: "rgb(19, 4, 71)",
            boxShadow: 6,
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={AI}
            alt="AI"
            sx={{pb:1}}
          />
          <CardMedia
            component="img"
            height="180"
            image={robotics}
            alt="Robotics"
          />
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Artificial Intelligence (AI) and Robotics
          </Typography>
        </Card>
        <Card
          sx={{
            maxWidth: 400,
            m: 2,
            borderRadius: 3,
            background: "rgb(19, 4, 71)",
            boxShadow: 6,
          }}
        >
          <CardMedia
            component="img"
            height="370"
            image={renewableenergy}
            alt="Renewable energy"
          />
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Renewable Energy
          </Typography>
        </Card>
        <Grid>
        
        <Card
          sx={{
            maxWidth: 1000,
            m: 2,
            borderRadius: 3,
            background: "rgb(19, 4, 71,0.8)",
            boxShadow: 6,
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={universe1}
            alt="Universe"
            
          />
          <Typography
            variant="h6"
            sx={{
              
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Universe (Image source: NASA)
          </Typography>
        </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Interests