// services/unsplashService.js

import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'nbUeLxDk8uhuZfR4XzC_5StKo0cb50WF0OXU94aTbQI';

export async function fetchImages(query) {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
      params: { query, per_page: 10 },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
  }
}