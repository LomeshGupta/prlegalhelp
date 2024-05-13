import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CounterBox = ({ intervalDuration, title }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < intervalDuration) {
                setCount((prevCount) => prevCount + 1);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [count, 50]);

    return (
        <Box mb={4} p={3} width="100%" bgcolor="#fff" color="black" borderRadius={3}>
            <Typography variant="h3" gutterBottom>
                {count} +
            </Typography>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
        </Box>
    );
};

export default CounterBox;
