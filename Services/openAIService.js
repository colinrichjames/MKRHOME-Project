// Import the 'path' module, which provides utilities for working with file and directory paths
const path = require('path');

// Load environment variables from a .env file using the 'dotenv' package
require('dotenv').config({ path: path.resolve(__dirname, '/MKRHOME/.env') });

// Define the OpenAI API URL for sending chat completion requests
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'; 
// API Key for accessing OpenAI's API
const API_KEY = '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';
//const API_KEY = process.env.OPENAI_API_KEY; // Fetch the API key from the .env file

// Function to send a request to OpenAI API
async function fetchChatResponse(prompt) {
  console.log("Sending request to OpenAI with prompt:", prompt); // Log the prompt being sent

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}` // Use the defined API_KEY variable
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Model compatible with chat completions
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 100 // Adjust this as needed
      })
    });

    const data = await response.json();
    console.log("Received response from OpenAI:", data); // Log the full response data

    if (response.ok) {
        return data.choices[0].message.content;
      } else {
        console.error(`OpenAI API error: ${response.status} - ${response.statusText}`, data);
        return "I'm having trouble answering right now. Please try again later.";
      }
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return "I'm having trouble connecting to OpenAI. Please try again later.";
  }
}

export default fetchChatResponse;