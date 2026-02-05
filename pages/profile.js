import React from 'react';
import { Box, Container, Typography, Avatar, Button, Stack, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import PrimarySearchAppBar from '../Components/PrimarySearchAppBar';
import FloatingActionButton from '../Components/FloatingActionButton';

const Profile = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <PrimarySearchAppBar />

      
      {/* Profile Header with Background Image */}
      <Box
        sx={{
          height: '300px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'absolute',
              bottom: -40,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar 
              src="https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Amanda Jane"
              sx={{ width: 100, height: 100, border: '3px solid white' }} 
            />
          </Box>
        </Container>
      </Box>
      
      {/* Profile Text Section */}
      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5">Amanda Jane</Typography>
        <Typography variant="subtitle1" color="textSecondary">DIY Enthusiast | Dallas, TX</Typography>
        <Button variant="outlined" sx={{ mt: 1 }}>Edit Profile</Button>
      </Container>
  
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8, px: { xs: 2, sm: 3 } }}>
        {/* Metrics Section */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 3 }}>
          <Box textAlign="center">
            <Typography variant="h6">15</Typography>
            <Typography variant="body2" color="textSecondary">Projects Completed</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">200</Typography>
            <Typography variant="body2" color="textSecondary">Followers</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">180</Typography>
            <Typography variant="body2" color="textSecondary">Following</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">12</Typography>
            <Typography variant="body2" color="textSecondary">Tools Added</Typography>
          </Box>
        </Stack>

        {/* Background Information */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Background Information</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
          As a first-time homebuyer and passionate DIY enthusiast, I’ve always loved the idea of creating a space that truly feels like mine. I enjoy learning new skills and tackling projects, whether it’s a simple update or a bigger renovation. When I discovered Homemade, I was drawn to how it brings everything I need into one place—tutorials, tools, and even a community of other DIYers who share their experiences and tips.
          </Typography>
        </Paper>

        {/* Projects Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Projects</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Painting a room" secondary="Learn how to paint a room like a pro" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bathroom remodel" secondary="Modernize your bathroom with a DIY remodel" />
            </ListItem>
          </List>
          <Button variant="contained" sx={{ mt: 2 }}>Add Project</Button>
        </Paper>

        {/* Achievements Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Achievements</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Beginner Builder" secondary="Congrats on completing your first project!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Painting Pro" secondary="Master the brush and roller. You've successfully completed a painting project." />
            </ListItem>
          </List>
          <Button variant="contained" sx={{ mt: 2 }}>Add Achievement</Button>
        </Paper>

        {/* Toolbox Section */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Toolbox</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {['Hammer', 'Screwdriver', 'Drill', 'Shovel', 'Measuring Tape', 'Level', 'Wood', 'Paint', 'Wrench', 'Rake', 'Saw', 'Stud Finder'].map((tool) => (
              <Grid item xs={6} sm={4} key={tool}>
                <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                  {tool}
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" sx={{ mt: 2 }}>Add Tool</Button>
        </Paper>
      </Container>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </Box>
  );
};

export default Profile;