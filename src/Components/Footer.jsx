import { BottomNavigation, BottomNavigationAction, Box, Divider, Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate();
    return (
      <Box>
       <Paper
          // sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          style={{ backgroundColor: "#03c7d1" }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <BottomNavigationAction
              href="https://www.linkedin.com/in/sixu-cody-zheng"
              label="Linkedin"
              icon={<LinkedInIcon sx={{ color: "#0077b5" }} />}
            />
            <BottomNavigationAction
              href="https://github.com/Cody2022"
              label="GitHub"
              icon={<GitHubIcon sx={{ color: "#171515" }} />}
            />
            <BottomNavigationAction
              href="https://scholar.google.ca/citations?user=U0HMz0wAAAAJ&hl=en"
              label="GoogleScholar"
              icon={<SchoolIcon sx={{ color: "#EA4335" }} />}
            />
          </BottomNavigation>
          <Typography sx={{ display: "flex", justifyContent: "center", pb: 2, pt:1 }}>
            © 2022 Copyright: Sixu (Cody) Zheng
          </Typography>
        </Paper>
       </Box>
    );
}

export default Footer