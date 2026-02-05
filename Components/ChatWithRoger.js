import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import fetchChatResponse from '../Services/openAIService';

export default function ChatWithRoger({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');
      setLoading(true);

      // Fetch response from OpenAI
      const response = await fetchChatResponse(input);
      if (response) {
        setMessages((prev) => [...prev, { sender: 'roger', text: response }]);
      }
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ position: 'fixed', bottom: 80, right: 16, width: 300, p: 2, borderRadius: 3, zIndex: 1500, }}>
      {/* Header with Avatar and Title */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ask Roger
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Message Container */}
      <Box sx={{ maxHeight: 300, overflowY: 'auto', mt: 2, mb: 2, px: 1 }}>
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            display="flex"
            flexDirection={msg.sender === 'user' ? 'row-reverse' : 'row'}
            alignItems="flex-start"
            mb={1}
          >
            {/* Avatar for messages */}
            <Avatar
              sx={{
                bgcolor: msg.sender === 'user' ? 'secondary.main' : 'primary.main',
                ml: msg.sender === 'user' ? 1 : 0,
                mr: msg.sender === 'user' ? 0 : 1,
              }}
            >
              {msg.sender === 'user' ? <AccountCircleIcon /> : 'R'}
            </Avatar>

            {/* Speech Bubble for messages */}
            <Box
              sx={{
                bgcolor: msg.sender === 'user' ? 'secondary.light' : 'grey.300',
                color: msg.sender === 'user' ? 'black' : 'black',
                p: 1.5,
                borderRadius: 2,
                maxWidth: '70%',
                boxShadow: 2,
                position: 'relative',
                textAlign: 'left',
              }}
            >
              <Typography variant="body1" sx={{ wordWrap: 'break-word' }}>
                {msg.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Loading Indicator */}
      {loading && (
        <Box display="flex" justifyContent="center" my={1}>
          <CircularProgress size={24} />
        </Box>
      )}

      {/* Multiline Text Input with Auto-Resize */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        multiline
        maxRows={4} // Adjusts to a maximum of 4 rows
        sx={{ mt: 2 }}
      />
      <Button onClick={sendMessage} fullWidth variant="contained" sx={{ mt: 1 }}>
        Send
      </Button>
    </Paper>
  );
}