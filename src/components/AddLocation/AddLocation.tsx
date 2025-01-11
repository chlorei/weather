import { Button, Input, Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import  { useState } from 'react'
import s from './AddLocation.module.css'
import { useDispatch } from 'react-redux';
import CardService from '../../API/CardService';

const AddLocation = () => {


    type Card = {
      location: string;
      grad: string;
      description: string;
      id: number;
    };

    
    const dispatch = useDispatch();
    const [currentLocation, setCurrentLocation] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    

    async function fetchCard(location: string) {
      const cardData = await CardService.getAll(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=344829534daad3b221f3b193eb1d720f`)
      console.log(cardData)
      const newCard : Card= {
        location: cardData.name,
        grad: cardData.main.temp,
        description: cardData.weather[0].description,
        id: Date.now(),
      }
      return newCard    } 

    const addCard = (card : Card) => {
      dispatch({type: "ADD_CARD", payload: card})
    }
    
    return (
    <div className={s.addlocation}>
        <Button
            variant="outlined"
            color="neutral"
            // startDecorator={<Add />}
            sx={{width: "200px", height: "30px"}}
            onClick={() => setOpen(true)}
      >
        Add Location
        </Button>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            Add new location
          </Typography>
          <Input 
            onChange={(e) => setCurrentLocation(e.target.value)}
            placeholder="Search"
          />
          <Button
            variant="outlined"
            color="neutral"
            // startDecorator={<Add />}
            sx={{width: "100px", height: "30px", marginLeft: "50px", marginTop: "10px"}}
            onClick={async () => {
              if (currentLocation !== "") {
                try {
                  console.log(currentLocation)
                  const newCard = await fetchCard(currentLocation); // Ждем завершения fetchCard
                  addCard(newCard); // Передаем полученные данные в addCard
                  setCurrentLocation(""); // Сбрасываем поле ввода
                  setOpen(false); // Закрываем модальное окно
                } catch (error) {
                  console.error("Ошибка при получении данных карточки:", error);
                }
              } else {
                console.log("ERROR: поле ввода пустое");
              }
            }}
        >
          Add
      </Button>
        </Sheet>
        </Modal>  
    </div>
    
    )
}

export default AddLocation
