import { useState } from "react";
import { useDispatch } from "react-redux";
import SVGSelector from "../../assets/SVGSelector";
import s from "./WeatherCard.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal, Box, Typography } from "@mui/material";
import { WeatherCard as WeatherCardType } from "../../types/types"; // ✅ Импорт типа

const WeatherCard = ({ id, location, description, grad, currentTime }: WeatherCardType) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeCard = () => {
    dispatch({ type: "REMOVE_CARD", payload: id });
  };

  return (
    <>
      {/* Карточка */}
      <div className="schale">
        <div className={s.card} onClick={handleOpen} style={{ cursor: "pointer" }}>
          <div className={s.title}>{location}</div>
          <button
            className={s.button}
            onClick={(e) => {
              e.stopPropagation();
              removeCard();
            }}
          >
            <ClearIcon />
          </button>
          <div className={s.picture}>
            <SVGSelector name={description} />
          </div>
          <div className={s.grad}>{grad}°C</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>

      {/* Модальное окно */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 3,
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{location}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {description}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {grad}°C
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            {currentTime} {/* ✅ Время теперь корректно передается */}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <SVGSelector name={description} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default WeatherCard;