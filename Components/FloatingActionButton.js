// FloatingActionButton.js
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import ChatWithRoger from '../Components/ChatWithRoger'; // Import the Chat component

export default function FloatingActionButton() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen((prev) => !prev);

  return (
    <>
      <Fab
        color="primary"
        aria-label="ask roger"
        onClick={toggleChat}
        style={{ position: 'fixed', bottom: 16, right: 16 }}
        variant="extended"  // This allows the button to show both an icon and text
      >
        <ChatIcon sx={{ mr: 1 }} /> {/* Add margin to space the icon from the text */}
        Ask Roger
      </Fab>
      {chatOpen && <ChatWithRoger onClose={toggleChat} />} {/* Render Chat */}
    </>
  );
}