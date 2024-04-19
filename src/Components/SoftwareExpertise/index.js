import React from "react";
import { Grid, Typography } from "@mui/material";
import "./sofware.css";

const SoftwareExpertiseSection = () => {
  const softwareList = [
    "Corporate Law",
    "Civil Litigation & Property Law",
    "Family Law",
    "Criminal Cases",
    "Employment Law",
    "Bankruptcy Law",
  ];

  return (
    <div style={{ padding: "40px" }} className="soft" id="soft">
      <Typography variant="h4" gutterBottom>
        Software Expertise
      </Typography>
      <Grid container spacing={2} className="grid">
        {softwareList.map((software, index) => (
          <Grid className="ballcont" item key={index}>
            <div className="ball">
              <span className="text">{software}</span>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SoftwareExpertiseSection;
