import { Box, Typography, useTheme } from "@mui/material";

import React from 'react';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ color: theme.palette.secondary[100], mb: "5px" }}
        fontWeight={"bold"}

      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        mb={'1rem'}
        ml={'0.5rem'}
        sx={{ color: theme.palette.secondary[300] }}
        fontWeight={"bold"}

      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header