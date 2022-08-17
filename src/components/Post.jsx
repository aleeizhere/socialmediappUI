import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import { red } from "@mui/material/colors";
import React from "react";

const Post = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "460",
        pt: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, pb: 1, pl: 1 }}>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEspumm_GLsrA/profile-displayphoto-shrink_800_800/0/1643978487936?e=1665619200&v=beta&t=C4JtPJpSqcEHsBKi6_DcKUN13mbu4B0_QRvWXC8ivhM"
          sx={{
            border: "2px solid",
            borderColor: "background.body",
            width: 36,
            height: 36,
          }}
        ></Avatar>
        <Box>
          <Typography fontWeight="500">aleeism</Typography>
          <Typography component="span" fontWeight="300" fontSize={12}>
            Wed, 23 Aug
          </Typography>
        </Box>
        <IconButton sx={{ ml: "auto" }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <Typography component="p" sx={{ px: 2, pb: 1 }}>
        Hey it's me there
      </Typography>
      <CardMedia
        component="img"
        height="360"
        image="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonGroup>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: red[400] }} />}
          />
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <ReplyIcon sx={{ transform: "scaleX(-1)" }} />
          </IconButton>
        </ButtonGroup>
        <Typography variant="p" fontSize={14} sx={{ mr: 2 }}>
          comments
        </Typography>
      </Box>
    </Card>
  );
};

export default Post;
