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
          Samet starter
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          React + TypeScript + Vite + MUI konfigurace je připravena.
        </Typography>
        <Button variant="contained">MUI komponenty fungují</Button>
      </Box>
    </Container>
  );
}

export default App;
