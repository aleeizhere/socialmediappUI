import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";
const Feed = () => {
  return (
    <Box
      flex={4}
      p={1}
      border
      gap={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
