import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import StandardImageList from "./StandardImageList";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      justifyContent="start"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" fontWeight="300">
            Online Friends
          </Typography>
          <AvatarGroup max={6}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
        </Box>

        <Typography variant="h6" fontWeight={300} mt={2}>
          Latest Posts
        </Typography>
        <StandardImageList />

        {/* chats */}
        <Typography variant="h6" fontWeight={300} mt={2}>
          Chats
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <Button sx={{ py: 0, width: "20rem" }} disableRipple>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography fontWeight={600} fontSize={14}>
                    Taha Abdul Hameed
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{
                        display: "flex",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                      }}
                      component="span"
                      variant="p"
                      color="text.primary"
                      fontWeight={600}
                      fontSize={13}
                    >
                      Bro, I need that Integration paper..
                    </Typography>
                  </React.Fragment>
                }
              />
              <Badge badgeContent={3} color="primary" sx={{ mt: 2 }} />
            </ListItem>
          </Button>
          <Divider variant="inset" component="li" />

          <Button sx={{ py: 0, width: "20rem" }} disableRipple>
            <ListItem
              alignItems="flex-start"
              sx={{
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEspumm_GLsrA/profile-displayphoto-shrink_800_800/0/1643978487936?e=1665619200&v=beta&t=C4JtPJpSqcEHsBKi6_DcKUN13mbu4B0_QRvWXC8ivhM"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography fontWeight={300} fontSize={14}>
                    Ali Khan
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "flex", flexWrap: "nowrap" }}
                      component="span"
                      variant="p"
                      color="text.primary"
                      fontWeight={300}
                      fontSize={13}
                    >
                      You're good at coding.
                    </Typography>
                  </React.Fragment>
                }
              />
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ display: "none", mt: 2 }}
              />
            </ListItem>
          </Button>
          <Divider variant="inset" component="li" />
          <Button sx={{ py: 0, width: "20rem" }} disableRipple>
            <ListItem
              alignItems="flex-start"
              sx={{
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography fontWeight={300} fontSize={14}>
                    Tania Simons
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "flex", flexWrap: "nowrap" }}
                      component="span"
                      variant="p"
                      color="text.primary"
                      fontWeight={300}
                      fontSize={13}
                    >
                      Lemme know when you are...
                    </Typography>
                  </React.Fragment>
                }
              />
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ display: "none", mt: 2 }}
              />
            </ListItem>
          </Button>

          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
