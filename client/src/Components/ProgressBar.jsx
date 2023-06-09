import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  const { show, value, ...other } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          {...other}
          sx={{
            bgcolor: "#161616",
            borderRadius: 10,
            height: 10,
            "& .MuiLinearProgress-bar": {
              borderRadius: 10,
              bgcolor: "#3a0303",
            },
          }}
        />
      </Box>
      <Box>
        {show && (
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            value
          )}%`}</Typography>
        )}
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
};

export default function LinearWithValueLabel({ showPer, progress }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress}  />
    </Box>
  );
}
