import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const Addbutton = ({ setOpen }) => {
  return (
    <div>
      <Tooltip
        onClick={() => {
          setOpen(true);
        }}
        title="Add a post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Addbutton;
