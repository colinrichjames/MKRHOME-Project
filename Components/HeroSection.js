import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '@fontsource/playfair-display'; // Import Playfair Display

// Define slides data
const slides = [
  {
    text: "Learn, build, and create your dream home",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: '#FFB6C1' 
  },
  {
    text: "Gardening Projects",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5",
    color: '#9FA8DA' 
  },
  {
    text: "Painting Projects",
    image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e",
    color: '#FFABAB' 
  },
  {
    text: "Home Renovation Tips",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    color: '#B39DDB' 
  }
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundColor: 'lavender',
      }}
    >
      {/* Static "Homemade" Text */}
      <Container
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white',             // White fill color
            fontSize: '6rem',            // Increased font size
            WebkitTextStroke: '2px #f3dcff', // Outline with #f3dcff color
          }}
        >
          Homemade
        </Typography>

      </Container>

      {/* Carousel for Backgrounds and Tagline */}
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        axis="horizontal" // Change to horizontal for left-to-right scrolling
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(230, 230, 250, 0.8)',
              backdropFilter: 'blur(3px)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Container
              sx={{
                position: 'absolute',
                bottom: '20%',
                textAlign: 'center',
                animation: 'fadeIn 2s ease-out',
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: slide.color, fontWeight: 'bold' }}
              >
                {slide.text}
              </Typography>
            </Container>
          </Box>
        ))}
      </Carousel>

      {/* CSS for fading animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}