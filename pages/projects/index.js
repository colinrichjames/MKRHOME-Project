import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia, Grid, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/router';
import PrimarySearchAppBar from '../../Components/PrimarySearchAppBar';
import FloatingActionButton from '../../Components/FloatingActionButton';

const projects = [
  {
    id: 1,
    title: 'Bathroom Remodel',
    author: 'Jane Doe',
    location: 'Dallas, TX',
    description: 'Modernize your bathroom with a DIY remodel.',
    details: 'This guide walks you through updating a bathroom, covering tile work, fixtures, and paint. Ideal for transforming outdated bathrooms into modern spaces.',
    image: '/images/bathroom_remodel.jpg', // Replace with your image path
  },
  {
    id: 2,
    title: 'Painting a Room',
    author: 'David Joyner',
    location: 'Atlanta, GA',
    description: 'Modernize your room with a DIY remodel.',
    details: 'Learn how to paint a room like a pro. Perfect for adding a fresh look to any space, this project covers surface prep, paint selection, and application technique.',
    image: '/images/painting_room.jpg', // Replace with your image path
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <PrimarySearchAppBar />
      
      {/* Trending Projects Carousel */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" gutterBottom>
          Trending Projects
        </Typography>
        <Carousel>
          {projects.map((project) => (
            <Card key={project.id} sx={{ display: 'flex', cursor: 'pointer' }} onClick={() => handleProjectClick(project.id)}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={project.image}
                alt={project.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography component="div" variant="h6">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {project.author} - {project.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleProjectClick(project.id)}>Get Started</Button>
                  <IconButton aria-label="like project">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* Projects Feed */}
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.details}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleProjectClick(project.id)}>Learn More</Button>
                  <IconButton aria-label="like project">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <FloatingActionButton />
    </Box>
  );
}