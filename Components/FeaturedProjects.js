import React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from '../Components/Card';

export default function FeaturedProjects({ images = [], loaderRef }) {
  // Placeholder Unsplash images in case `images` is empty
  const sampleImages = [
    { urls: { small: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRpc3RpbGxlcnl8ZW58MHx8fHwxNjE1MDMzMDE4&ixlib=rb-1.2.1&q=80&w=400' } },
    { urls: { small: 'https://images.unsplash.com/photo-1550684848-a629ceb9f866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGtvY2t0YWlsfGVufDB8fHx8MTYxNTAzMzAxOA&ixlib=rb-1.2.1&q=80&w=400' } },
    { urls: { small: 'https://images.unsplash.com/photo-1581093588401-57a898f0a8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvbWV8ZW58MHx8fHwxNjE1MDMzMDE4&ixlib=rb-1.2.1&q=80&w=400' } },
    { urls: { small: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxoYW5kcmFpbGVyfGVufDB8fHx8MTYxNTAzMzAxOA&ixlib=rb-1.2.1&q=80&w=400' } },
  ];

  const displayImages = images.length > 0 ? images : sampleImages;

  return (
    <Box
      sx={{
        height: '100vh', 
        scrollSnapAlign: 'start', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        overflow: 'hidden', 
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Projects
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          overflowX: 'auto',
          mt: 2,
          paddingX: '20px',
          // Hide scrollbar for Webkit browsers
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          // Hide scrollbar for Firefox
          scrollbarWidth: 'none',
        }}
      >
        {displayImages.map((image, index) => (
          <Box key={index} data-aos="fade-up" sx={{ minWidth: 250, marginRight: '10px' }}>
            <ProjectCard imageUrl={image.urls.small} />
          </Box>
        ))}
      </Box>

      <div ref={loaderRef} style={{ height: '50px', marginTop: '20px' }}></div>
    </Box>
  );
}