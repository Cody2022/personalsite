import { Card,CardContent,CardMedia,Divider, Grid, Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import backgroundImage from "../Images/background.jpg";
import selfImage from "../Images/Cody.png"
import URLogo from "../Images/UR_Logo.png"
import upcLogo from "../Images/upcLogo.jpg"
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SoftwareEngineer = () => {
 
  return (
    <Box>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            pl: 6,
            pt: 4,
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
            variant="h5"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              pb: 1,
            }}
          >
            Software Engineer + Petroleum Engineer
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
            With a background in both academia and industry, I have developed
            strong R&D, fast-learning, and problem-solving skills. I enjoy
            learning new things and have great passion for applying software
            technology to solve business problems and create value.
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
              pt: 2,
            }}
          >
            Prior to pivoting into tech industry, I had held positions, such as
            research associate and petroleum engineer, contributing to success
            of various research and industrial projects. My past research,
            mathematical and analytical skills and practical project management
            and customer service experience are great assets for my new role in
            the tech industry.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={6} sx={{ pl: 2, pt: 2, pb: 4 }}>
          <Card sx={{ maxWidth: 340, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="360"
              image={selfImage}
              alt="Cody"
            />
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <ListItemIcon>
                <MailOutlineIcon sx={{ color: "#EA4335" }} />
              </ListItemIcon>
              <ListItemText primary="cody23zh@gmail.com" />
            </ListItem>
          </Card>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        style={{ color: "black" }}
        sx={{ borderBottomWidth: 3 }}
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
      >
        <Typography
          sx={{
            pb: 1,
            fontFamily: "serif",
            fontSize: "2rem",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Software Engineering Projects
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", pb: 2 }}
        style={{
          background:
            "linear-gradient(172deg, rgba(250,253,227,0.8576564414828431) 6%, rgba(167,236,247,0.9528945367209384) 47%, rgba(147,171,221,0.742810503107493) 94%)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card
          sx={{
            maxWidth: 360,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h5"
            sx={{ pt: 1, display: "flex", justifyContent: "center" }}
          >
            Guess Weather
          </Typography>
          {/* <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            /> */}
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              “Guess Weather” is a text-based interactive game. Players guess
              the weather of different cities. The game can compare users’
              guesses with real-time weather data fetched from a third-party
              REST API. If the difference between the guessed temperature of a
              city and real-time data is within the player defined deviation,
              the player will win one point. The game results can be
              automatically saved in the database.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              (Technologies used: Express.js, Node.js, MongoDB, Git, GitHub, IP
              geolocation API, and OpenWeather API)
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 360,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h5"
            sx={{ pt: 1, display: "flex", justifyContent: "center" }}
          >
            AlterCarbon
          </Typography>
          {/* <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            /> */}
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              "AlterCarbon" is a fully functional and responsive web
              application. Users can use the application: 1) calculate personal
              (and/or household) carbon footprints based on the consumption of
              electricity, natural gas, and car usage; 2) track carbon emissions
              history using responsive chart and table; 3) monitor CO2 emissions
              of the City of Calgary’s facilities on a map; and 4) perform
              calculation for offsetting carbon emissions.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              (Technologies used: MongoDB, Express.js, React, Node.js, MUI,
              MapBox, React Bootstrap, Chart.js, Trello)
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 360,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h5"
            sx={{ pt: 1, display: "flex", justifyContent: "center" }}
          >
            I am Here
          </Typography>
          {/* <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            /> */}
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              "I am Here" is a full stack application connecting newcomers and
              volunteers. By using the application, volunteers can be flexible
              and easy to post their availabilities, manage schedules, and chat
              with newcombers. Newcomers will be able to easily access
              accommodation, translation, transportation services provided by
              volunteers, as well as education resources provided by governments
              and institutions.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              (Technologies used: Express.js, Node.js, MongoDB, React, MUI,
              React Bootstrap, Auth0, Socket-io, Git, Trello)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Divider
        variant="middle"
        style={{ color: "black" }}
        sx={{ borderBottomWidth: 3 }}
      >
        *****
      </Divider>
      <Grid
        style={{
          backgroundColor: "#cbf0e28c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        sx={{ pt: 2, pb: 0 }}
      >
        <Typography
          sx={{
            pb: 1,
            fontFamily: "serif",
            fontSize: "2rem",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Education
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          pb: 2,
        }}
        style={{
          backgroundColor: "#cbf0e28c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Card
          sx={{ borderRadius: 3, display: "flex", flexDirection: "row", mb: 2 }}
        >
          <CardMedia
            sx={{ maxWidth: 250 }}
            component="img"
            height="110"
            image={URLogo}
            alt="UofR Logo"
          />
          <CardContent>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                fontFamily: "serif",
                color: "black",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "start",
              }}
            >
              Doctor of Philosophy (Ph.D.), Petroleum Systems Engineering
            </Typography>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                fontFamily: "serif",
                color: "black",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "start",
                pt: 1,
              }}
            >
              Master of Applied Science (M.A.Sc.), Petroleum Systems Engineering
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 3, display: "flex", flexDirection: "row" }}>
          <CardMedia
            sx={{ maxWidth: 120 }}
            component="img"
            height="120"
            image={upcLogo}
            alt="UofR Logo"
          />
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontFamily: "serif",
                color: "#0a306c",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flexStart",
              }}
            >
              China University <br /> of Petroleum
            </Typography>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{
                fontFamily: "serif",
                color: "black",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "flexStart",
                pl: 3,
              }}
            >
              Bachelor of Engineering, Petroleum Engineering
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Divider
        variant="middle"
        style={{ color: "black" }}
        sx={{ borderBottomWidth: 3 }}
      >
        *******
      </Divider>
      <Grid
        style={{
          backgroundColor: "#cbf0e28c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        sx={{ pt: 2, pb: 0 }}
      >
        <Typography
          sx={{
            pb: 1,
            fontFamily: "serif",
            fontSize: "2rem",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Selected Publications
        </Typography>
      </Grid>
      <Grid
        style={{
          backgroundColor: "#cbf0e28c",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: 10,
        }}
      >
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.2118/179618-PA"
          // sx={hoverEffect}
          sx={{
            pl: 8,
            pr: 4,
            pb: 1,
            fontFamily: "serif",
            color: "black",
            display: "flex",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          1) Zheng, S. and Yang, D. (2017). Determination of Individual
          Diffusion Coefficients of C3H8/n-C4H10/CO2-Heavy Oil Systems at High
          Pressures and Elevated Temperatures by Dynamic Volume Analysis. SPE
          Journal, 22(3), 799–816.
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.1016/j.ijheatmasstransfer.2016.05.136"
          sx={{
            pl: 8,
            pr: 4,
            pb: 1,
            display: "flex",
            fontFamily: "serif",
            color: "black",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          2) Zheng, S., Sun, H., and Yang, D. (2016). Coupling Heat and Mass
          Transfer for Determining Individual Diffusion Coefficient of a Hot
          C3H8-CO2 Mixture in Heavy Oil under Reservoir Conditions.
          International Journal of Heat and Mass Transfer, 102, 251–263.
          <br />
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.1115/1.4033982"
          sx={{
            pl: 8,
            pr: 4,
            pb: 1,
            display: "flex",
            fontFamily: "serif",
            color: "black",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          3) Zheng, S. and Yang, D. (2016). Experimental and Theoretical
          Determination of Diffusion Coefficients of CO2-Heavy Oil Systems by
          Coupling Heat and Mass Transfer. ASME. Journal of Energy Resources
          Technology, 139 (2), 02291–02291-15.
          <br />
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.1021/acs.iecr.5b03929"
          sx={{
            pl: 8,
            pr: 4,
            pb: 1,
            display: "flex",
            fontFamily: "serif",
            color: "black",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          4) Zheng, S., Li, H., Sun, H., and Yang, D. (2016). Determination of
          Diffusion Coefficient for Alkane Solvent-CO2 Mixtures in Heavy Oil
          with Consideration of Swelling Effect. Industrial and Engineering
          Chemistry Research, 55 (6), 1533–1549.
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.2118/157719-PA"
          sx={{
            pl: 8,
            pr: 4,
            pb: 1,
            display: "flex",
            fontFamily: "serif",
            color: "black",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          5) Zheng, S. and Yang, D. (2013). Pressure Maintenance and Improving
          Oil Recovery by Means of Immiscible Water-Alternating-CO2 Processes in
          Thin Heavy-oil Reservoirs. SPE Reservoir Evaluation and Engineering,
          16 (1), 60–71.
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://doi.org/10.1016/j.petrol.2013.10.020"
          sx={{
            pl: 8,
            pr: 4,
            display: "flex",
            fontFamily: "serif",
            color: "black",
            textIndent: "-1.1em",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            },
          }}
        >
          6) Zheng, S., Li, H., and Yang, D. (2013). Pressure Maintenance and
          Improving Oil Recovery with Immiscible CO2 Injection in Thin Heavy Oil
          Reservoirs. Journal of Petroleum Science and Engineering, 112,
          139–152.
        </Link>
        <Link
          variant="h6"
          color="text.primary"
          href="https://scholar.google.ca/citations?user=U0HMz0wAAAAJ&hl=en"
          sx={{
            pl: 10,
            pr: 4,
            pt: 1,
            display: "flex",
            fontFamily: "serif",
            color: "red",
            textIndent: "-1em",
            "&:hover": {
              color: "blue",
              fontSize: "140%",
            },
          }}
        >
          Click Here to Find the Full Publication List
        </Link>
      </Grid>
    </Box>
  );
}

export default SoftwareEngineer