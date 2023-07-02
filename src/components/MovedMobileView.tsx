import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function MovedMobileView() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #303FA1",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="  rounded-lg items-center  flex justify-center md:py-4 md:px-10 py-2 px-6  font-extrabold hover:scale-105 transition duration-300 bg-lavender text-primary min-[1200px]:hidden  "
      >
        WE HAVE MOVED!
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2, color: "#303FA1", fontWeight: "bold" }}
          >
            Our new location:
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#303FA1", fontWeight: "bold" }}
          >
            Suite 902, L7, 66-72 Rickard Road Bankstown.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
