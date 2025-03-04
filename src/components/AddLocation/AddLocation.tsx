import { Button, Input, Modal, ModalClose, Sheet, Typography, Snackbar, Alert } from "@mui/joy";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./AddLocation.module.css";
import CardService from "../../API/CardService";
import { WeatherCard } from "../../types/types"; 
import { RootState } from "../../store";

const AddLocation = () => {
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const cards = useSelector((state: RootState) => state.card.cardCollection);

  const showAlert = (message: string, type: "error" | "success") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); 
  };

  const getLocalTime = (timezoneOffset: number): string => {
    const nowUTC = new Date();
    const localTime = new Date(nowUTC.getTime() + timezoneOffset * 1000);
    return new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(localTime);
  };

  const fetchCard = async (location: string): Promise<WeatherCard | null> => {
    try {
      const cardData = await CardService.getAll(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=344829534daad3b221f3b193eb1d720f`
      );

      return {
        location: cardData.name.toLowerCase(),
        grad: Math.round(cardData.main.temp),
        description: cardData.weather[0].description,
        id: Date.now(),
        currentTime: getLocalTime(cardData.timezone), 
      };
    } catch (error) {
      console.error("Ошибка при получении данных карточки:", error);
      showAlert("Ошибка при загрузке данных!", "error");
      return null;
    }
  };

  const addCard = (card: WeatherCard) => {
    dispatch({ type: "ADD_CARD", payload: card });
  };

  useEffect(() => {
    if (cards.length === 0) return;

    const fetchAllCards = async () => {
      try {
        const updatedCards = await Promise.all(
          cards.map(async (card: WeatherCard) => {
            const cardData = await CardService.getAll(
              `https://api.openweathermap.org/data/2.5/weather?q=${card.location}&units=metric&APPID=344829534daad3b221f3b193eb1d720f`
            );

            return {
              ...card,
              grad: Math.round(cardData.main.temp),
              description: cardData.weather[0].description,
              currentTime: getLocalTime(cardData.timezone), 
            };
          })
        );

        dispatch({ type: "SET_CARDS", payload: updatedCards });
      } catch (error) {
        console.error("Ошибка при обновлении карточек:", error);
        showAlert("Ошибка при обновлении карточек!", "error");
      }
    };

    fetchAllCards();
  }, []);

  const handleAddLocation = async () => {
    if (!currentLocation.trim()) {
      showAlert("Введите название города!", "error");
      return;
    }

    
    const isDuplicate = cards.some(card => card.location.toLowerCase() === currentLocation.toLowerCase());

    if (isDuplicate) {
      showAlert("Этот город уже добавлен!", "error");
      return;
    }

    const newCard = await fetchCard(currentLocation);
    if (newCard) {
      addCard(newCard);
      setCurrentLocation("");
      showAlert("Город успешно добавлен!", "success");
      setOpen(false);
    }
  };

  return (
    <div className={s.addlocation}>
      {/* Алерты */}
      {alert && (
        <Snackbar
          open
          autoHideDuration={3000} 
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>
      )}

      <Button variant="outlined" color="neutral" sx={{ width: "200px", height: "30px" }} onClick={() => setOpen(true)}>
        Add Location
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Sheet variant="outlined" sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography component="h2" level="h4" textColor="inherit" sx={{ fontWeight: "lg", mb: 1 }}>
            Add new location
          </Typography>

          <Input value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} placeholder="Search" />

          <Button variant="outlined" color="neutral" sx={{ width: "100px", height: "30px", marginLeft: "50px", marginTop: "10px" }} onClick={handleAddLocation}>
            Add
          </Button>
        </Sheet>
      </Modal>
    </div>
  );
};

export default AddLocation;
