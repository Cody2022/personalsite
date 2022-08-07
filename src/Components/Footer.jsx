import { BottomNavigation, BottomNavigationAction, Box, Link, Paper} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import React from 'react'

const Footer = () => {
    
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
              sx={{ "&:hover": {
                color: 'blue',
                background:"#cbf0e28c"
              },}}
            />
            <BottomNavigationAction
              href="https://github.com/Cody2022"
              label="GitHub"
              icon={<GitHubIcon sx={{ color: "#171515" }} />}
              sx={{ "&:hover": {
                color: 'blue',
                background:"#cbf0e28c"
              },}}
            />
            <BottomNavigationAction
              href="https://scholar.google.ca/citations?user=U0HMz0wAAAAJ&hl=en"
              label="GoogleScholar"
              icon={<SchoolIcon sx={{ color: "#EA4335" }} />}
              sx={{ "&:hover": {
                color: 'blue',
                background:"#cbf0e28c"
              },}}
            />
          </BottomNavigation>

          <Link
            href="/softwareengineer"
            sx={{ display: "flex", justifyContent: "center", color:"black" , pb: 2, pt: 1, textDecoration:"none" }}
          >
            © 2022 Copyright: Sixu (Cody) Zheng
          </Link>
        </Paper>
      </Box>
    );
}

export default Footer