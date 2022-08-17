import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import Image from "@mui/icons-material/Image";
import VideoCameraBack from "@mui/icons-material/VideoCameraBack";
import PersonAdd from "@mui/icons-material/PersonAdd";
import DateRange from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "20px",
});

const Postmodal = ({ open, setOpen }) => {
  return (
    <StyledModal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={400}
        height={300}
        borderRadius={3}
        p={2}
        pb={0}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Typography variant="h6" color="gray" textAlign="left">
          Create post
        </Typography>
        <UserBox>
          <Avatar
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            sx={{ width: 30, height: 30 }}
          />
          <Typography fontWeight={500} variant="span">
            aleeism
          </Typography>
        </UserBox>
        <TextField
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Post</Button>
          <Button sx={{ width: "100px" }}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
  );
};

export default Postmodal;
