import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  Container,
} from "@mui/material";

const Service = ({
  image,
  name,
  title,
  description,
  imagePosition = "right",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box sx={{ p: 3, borderRadius: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6} order={isImageLeft ? 1 : 2}>
            <Card sx={{ boxShadow: 0 }}>
              <CardMedia
                component="img"
                image={image}
                alt={`${name}'s photo`}
                sx={{
                //   width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} order={isImageLeft ? 2 : 1}>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
                dangerouslySetInnerHTML={{ __html: name }}
              />
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Typography
                variant="body1"
                component="p"
                sx={{ textAlign: "justify", lineHeight: 1.6 }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Service;
