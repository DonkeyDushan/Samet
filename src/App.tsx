import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Samet Starter
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          React + TypeScript + Vite + MUI setup is ready.
        </Typography>
        <Button variant="contained">MUI components work</Button>
      </Box>
    </Container>
  );
}

export default App;
