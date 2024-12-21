import { Button, Input, Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import  {useState } from 'react'
// import Add from '@mui/icons-material/Add';
import s from './AddLocation.module.css'
const AddLocation = () => {
    const [location, setLocation] = useState();
    const [open, setOpen] = useState(false);
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
          {/* <Typography id="modal-desc" textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog with an
            optional <code>aria-describedby</code> attribute.
          </Typography> */}
          <Input 
            onChange={(e) => setLocation(e.target.value)
            }
            placeholder="Search"
          />
          <Button
            variant="outlined"
            color="neutral"
            // startDecorator={<Add />}
            sx={{width: "100px", height: "30px"}}
            // onClick={}
        >
          Add
      </Button>
        </Sheet>
        </Modal>
    </div>
    
    )
}

export default AddLocation
