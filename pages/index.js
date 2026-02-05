// Import necessary components and modules
import Head from 'next/head';
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import PrimarySearchAppBar from '../Components/PrimarySearchAppBar';
import FloatingActionButton from '../Components/FloatingActionButton';
import HeroSection from '../Components/HeroSection';
import FeaturedProjects from '../Components/FeaturedProjects';
import SignUp from '../Components/sign-up/SignUp';
import React, { useState, useEffect, useRef } from 'react';
import { fetchImages } from '../Services/unsplashService';
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css';


require('dotenv').config(); // Add this line to load .env variables

export default function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // For infinite scrolling
  const loaderRef = useRef(null);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  // Fetch initial images and more as user scrolls
  useEffect(() => {
    async function loadImages() {
      const imageResults = await fetchImages('home decor', page); // Adjust query as needed
      setImages(prevImages => [...prevImages, ...imageResults]);
    }
    loadImages();
  }, [page]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      <Head>
        <title>MKR Home - Your DIY Companion</title>
        <meta name="description" content="Learn, build, and create your dream home with MKR Home." />
      </Head>
      <HeroSection />
      
      <Container maxWidth="lg">

        {/* Featured Projects Section */}
        <FeaturedProjects images={images} loaderRef={loaderRef} />  {/* Use FeaturedProjects component */} 

        {/* Testimonials Section */}
        <Box my={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            What Our Users Are Saying
          </Typography>
          <Box mt={2} p={3} bgcolor="grey.100" borderRadius={2}>
            <Typography variant="body1" color="textSecondary">
              "MKR Home makes DIY projects so much easier! I feel more confident in tackling my home improvement projects."
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1} textAlign="right">
              - Alex G., Homeowner
            </Typography>
          </Box>
        </Box>

        <FloatingActionButton />
      </Container>
        {/* Sign-Up Component at the Bottom you can uncomment the signup component to make the dark mode work 
        
        <SignUp /> {/* Render the SignUp component at the bottom */}
    </div>
  );
}