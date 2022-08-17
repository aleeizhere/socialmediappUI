import React, { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Addbutton from "./components/Addbutton";
import Postmodal from "./components/Postmodal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("dark");
  const darktheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darktheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        flexDirection="row"
      >
        <Navbar />
        <Stack direction="row" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Addbutton setOpen={setOpen} />

        <Postmodal open={open} setOpen={setOpen} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
