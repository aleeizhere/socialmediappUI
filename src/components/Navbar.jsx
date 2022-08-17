import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Input,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Notifications from "@mui/icons-material/Notifications";
import Mail from "@mui/icons-material/Mail";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "100",
            display: { xs: "none", sm: "inline-block" },
          }}
        >
          <span style={{ fontWeight: "500" }}>aleeism</span>.io
        </Typography>
        <LocalFireDepartmentIcon
          sx={{ display: { xs: "inline-block", sm: "none" } }}
        />
        <Search>
          <Input
            placeholder="Search..."
            disableUnderline
            sx={{ width: "100%", color: "black" }}
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => {
              setOpen(true);
            }}
          />
        </Icons>
        <Userbox
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span"> John Doe</Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorReference="anchorPosition"
        TransitionComponent={Fade}
        anchorPosition={{ top: 50, left: 1500 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
