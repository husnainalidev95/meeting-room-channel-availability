import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <footer>
      <Box
        mt={{ xs: 10 }}
        px={{ xs: 2, sm: 6 }}
        py={{ xs: 2, sm: 6 }}
        bgcolor="primary.dark"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>
                Solutions
              </Box>
              <Box mt={4}>
                Hotel Chains
              </Box>
              <Box mt={2}>
                Independent Hotels
              </Box>
              <Box mt={2}>
                Partners (OTAs, TMCs, DMCs, etc.)
              </Box>
              <Box mt={2}>
                Unique Venues and Event spaces
              </Box>
              <Box mt={2}>
                Customer examples
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                Products
              </Box>
              <Box mt={4}>
                Online Booking Engine
              </Box>
              <Box mt={2}>
                Global Distribution System
              </Box>
              <Box mt={2}>
                Venue Sales Management
              </Box>
              <Box mt={2}>
                Integrations
              </Box>
              <Box mt={2}>
                Analytics
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                More
              </Box>
              <Box mt={4}>
                Knowledge Base
              </Box>
              <Box mt={2}>
                Blog
              </Box>
              <Box mt={2}>
                Company
              </Box>
              <Box mt={2}>
                Contact
              </Box>
              <Box mt={2}>
                Webinars
              </Box>
              <Box mt={2}>
                HotelMICEtech
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}