// import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
// import agent from "../../app/api/agent";
// import { useState } from "react";

// export default function AboutPage(){
//     const [validationErrors, setValidationErrors] = useState<string[]>([]);

//     function getValidationError(){
//         agent.TestErrors.getValidationError()
//             .then(() => console.log('should not see this'))
//             .catch(error => setValidationErrors(error));
//     }
//     return (
//         <Container>
//             <Typography gutterBottom variant='h2'>Errors for testing purposes</Typography>
//             <ButtonGroup fullWidth>
//                 <Button variant='contained' onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
//                 <Button variant='contained' onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
//                 <Button variant='contained' onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
//                 <Button variant='contained' onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
//                 <Button variant='contained' onClick={getValidationError}>Test Validation Error</Button>
//             </ButtonGroup>
//             {validationErrors.length > 0 &&
//             <Alert severity='error'>
//                 <AlertTitle>Validation Errors</AlertTitle>
//                 <List>
//                     {validationErrors.map(error => (
//                         <ListItem key={error}>
//                             <ListItemText>{error}</ListItemText>
//                         </ListItem>
//                     ))}
//                 </List>
//             </Alert>
//             }
//         </Container>
//     )
// }
// About.tsx
// About.tsx
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '1.5rem' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography paragraph>
          Welcome to our e-shop! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          ...
          {/* Add more information about your e-shop here */}
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
