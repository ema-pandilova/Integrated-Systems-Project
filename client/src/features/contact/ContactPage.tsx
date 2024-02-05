// import { Button, ButtonGroup, Typography } from '@mui/material';
// import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
// import { decrement, increment } from './counterSlice';

// export default function ContactPage(){
//     const dispatch = useAppDispatch();
//     const {data, title} = useAppSelector(state => state.counter);

//     return (
//         <>
//             <Typography variant="h2">
//                 {title}
//             </Typography>
//             <Typography variant="h5">
//                 The data is {data}
//             </Typography>
//             <ButtonGroup>
//                 <Button onClick = {() => dispatch(decrement(1))}variant='contained' color='error'>Decrement</Button>
//                 <Button onClick = {() => dispatch(increment(1))} variant='contained' color='primary'>Increment</Button>
//                 <Button onClick = {() => dispatch(increment(5))} variant='contained' color='secondary'>Increment by 5</Button>
//             </ButtonGroup>
//         </>
//     )
// }
// Contact.tsx
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '1.5rem' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions or concerns, feel free to reach out to us:
        </Typography>
        <Typography>
          <strong>Telephone:</strong> +1 (555) 123-4567
        </Typography>
        <Typography>
          <strong>Email:</strong> info@example.com
        </Typography>
        <Typography>
          <strong>Address:</strong> 123 Main Street, Cityville, Country
        </Typography>
        {/* You can add more contact information or a contact form as needed */}
      </Paper>
    </Container>
  );
};

export default Contact;
