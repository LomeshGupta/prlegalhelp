import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import TeamMember from '../../Components/TeamMember';

const Team = ({ members }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom paddingBottom="20px">
        Associate Attorneys
      </Typography>
      <Grid container spacing={4} paddingBottom="20px">
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TeamMember
              image={member.image}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
