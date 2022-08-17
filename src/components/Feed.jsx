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
      <Post
        username="tahahameed"
        postimage="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        userimage="https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
        caption="working..."
      />
      <Post
        username="tania89"
        postimage="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        userimage="https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
        caption="viewing this beautiful city"
      />
      <Post
        username="aleeizhere"
        postimage="https://images.pexels.com/photos/5055264/pexels-photo-5055264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        userimage="https://media-exp1.licdn.com/dms/image/C4D03AQEspumm_GLsrA/profile-displayphoto-shrink_800_800/0/1643978487936?e=1665619200&v=beta&t=C4JtPJpSqcEHsBKi6_DcKUN13mbu4B0_QRvWXC8ivhM"
        caption="let's play"
      />
      <Post
        username="aleeizhere"
        postimage="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        userimage="https://media-exp1.licdn.com/dms/image/C4D03AQEspumm_GLsrA/profile-displayphoto-shrink_800_800/0/1643978487936?e=1665619200&v=beta&t=C4JtPJpSqcEHsBKi6_DcKUN13mbu4B0_QRvWXC8ivhM"
      />
    </Box>
  );
};

export default Feed;
