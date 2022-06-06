// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";
import React from "react";

const Iconify = ({ icon, sx, height, width, ...other }) => {
  return (
    <Box
      component={Icon}
      fontFamily={"Switzer"}
      icon={icon}
      width={width}
      height={height}
      sx={{ ...sx }}
      {...other}
    />
  );
};

export default Iconify;
