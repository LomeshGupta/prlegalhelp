import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import TeamMember from '../../Components/TeamMember';
import { heIL } from '@mui/material/locale';
import { Height } from '@mui/icons-material';

const Team = ({ members }) => {
  // Separate members into two groups: first row (3 cards) and second row (4 cards)
  const firstRowMembers = members.slice(0, 3);
  const secondRowMembers = members.slice(3, 7);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom paddingBottom="20px">
        Associate Attorneys
      </Typography>

      {/* First row with 3 cards */}
      <Grid container spacing={4} paddingBottom="20px">
        {firstRowMembers.map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TeamMember
              image={member.image}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* Second row with 4 cards */}
      <Grid container spacing={4}>
        {secondRowMembers.map((member, index) => (
          <Grid item xs={12} sm={3} key={index}>
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
