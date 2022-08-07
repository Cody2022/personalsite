import { Card, CardContent, CardMedia, Divider, Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import backgroundImage from "../Images/background.jpg";
import VIT from "../Images/VIT_diagram.jpg";
import SAGD from "../Images/sagd.png";
import heatmasstransfer from "../Images/heatmasstransfer.png";
import displacement from "../Images/displacement.png";

const PetroleumEngineer = () => {
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
          I was a professional engineer (P.Eng., APEGA) in petroleum engineering
          before pivoting into tech industry. My excellent work ethic has
          provided me with many opportunities to accomplish goals that have
          earned me recognition at work. I have strong abilities to work in a
          fast-paced and high-demand environment. As a team player, I am able to
          collaborate as part of a productive team, as well can work
          independently.
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
          Selected Projects
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        style={{
          background:
            "linear-gradient(172deg, rgba(250,253,227,0.8576564414828431) 0%, rgba(167,236,247,0.9528945367209384) 47%, rgba(147,171,221,0.742810503107493) 94%)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Card
          sx={{
            maxWidth: 550,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Vacuum Insulated Tubing Heat Transfer
          </Typography>
          <CardMedia
            component="img"
            height="210"
            image={VIT}
            alt="VIT"
          />
          <Link
            display={"flex"}
            justifyContent={"center"}
            href="https://cosia.ca/node/210"
          >
            (Schematic of VIT, Source: Cosia)
          </Link>
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              VIT consists of two concentric tubing strings. The annulus between
              two tubings is vacuumed and filled with insulation materials. As a
              result, VIT can greatly reduces the amount of heat that a well
              loses to its surroundings above the bitumen-bearing zone.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              In this project, I collaborated with team members to develop
              numerical heat transfer model, history match the measured
              temperature distribution to determine the downhole VIT thermal
              conductivity, and calculate temperature distribution above the
              payzone. The technical findings from this project can be used to
              monitor the performance of SAGD operations, assess the
              effectiveness of VIT, and optimize the well operation parameters.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 550,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Inflow Control Devices (ICDs)
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={SAGD}
            alt="ICD"
          />
          <Link
            display={"flex"}
            justifyContent={"center"}
            href="https://www.japex.co.jp/en/news/uploads/pdf/JAPEX20170808_HEInProduction_DemoNotRestart_e.pdf"
          >
            (Conceptual Diagram of SAGD Method, Source: JAPEX)
          </Link>
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              To obtain high efficiency, the SAGD process demands a high degree
              of steam conformance along the wellbore. However, a number of
              factors actually lead to a deformed and nonoptimal steam chamber
              that undermines energy maintenance and lowers the ultimate
              recovery factor.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              In this project, numerically, we developed CFD models to optimize
              the structures of inflow control devices (ICDs) to enhance steam
              flashing and improve steam conformance of SAGD wells.
              Experimentally, ICDs models were designed, manufactured, and
              tested at an industry facility. The newly designed the ICD is
              under review for patent application. It will improve the SAGD well
              performance, resulting in enormoos both economic and environmental
              benefits.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 550,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Determination of Diffusion Coefficients of Solvents
          </Typography>
          <CardMedia
            component="img"
            height="300"
            image={heatmasstransfer}
            alt="PVT cell"
          />
          <Link
            display={"flex"}
            justifyContent={"center"}
            href="https://doi.org/10.2118/179618-PA"
          >
            (PVT cell and schematic of diffusion cell, Source: Zheng and Yang,
            2016)
          </Link>
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              By coupling heat and mass transfer for C3H8/n-C4H10/CO2/ heavy-oil
              systems as well as by treating heavy oil as multiple
              pseudocomponents, a new technique together with its computational
              scheme has been developed to determine individual diffusion
              coefficients of alkane solvents and CO2 in heavy oil at high
              pressures and elevated temperatures by dynamic volume analysis
              (DVA).
            </Typography>
            <Typography sx={{ pt: 1 }}>
              Experimentally, well-designed diffusion tests have been conducted
              by using a visualized pressure/volume/ temperature (PVT) setup.
              Theoretically, the volume-translated Peng-Robinson (PR) equation
              of state (EOS) characterizing heavy oil as multiple
              pseudocomponents has been incorporated to develop a 2D
              heat and-mass-transfer model for the aforementioned systems.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 550,
            m: 2,
            borderRadius: 3,
            background: "rgba(0,0,0,0)",
            boxShadow: 6,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              pt: 1,
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Pressure Maintenance and EOR with CO2 Injection
          </Typography>
          <CardMedia
            component="img"
            height="300"
            image={displacement}
            alt="3D model"
          />
          <Link
            display={"flex"}
            justifyContent={"center"}
            href="https://doi.org/10.1016/j.petrol.2013.10.020"
          >
            (Schematic of the experimental setup, Source: Zheng and Yang, 2013)
          </Link>
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              In this study, techniques have been developed to experimentally
              and numerically evaluate performance of CO2 injection in heavy oil
              reservoirs for pressure maintenance purpose.
            </Typography>
            <Typography sx={{ pt: 1 }}>
              Experimentally, a threedimensional (3D) physical model consisting
              of five vertical wells and three horizontal wells is used to
              examine the effect of well configurations on pressure maintenance
              and oil recovery with CO2 injection in heavy oil reservoirs.
              Subsequently, numerical simulation has been performed to match the
              experimental measurements. It has been found that pressure
              maintenance with CO2 injection is beneficial for oil recovery in
              heavy oil reservoirs. The well configurations associated with
              horizontal well(s) are found to achieve a better performance.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}

export default PetroleumEngineer