import './App.css'
import AddLocation from './components/AddLocation/AddLocation'
import CardWorkspace from './components/CardWorkspace/CardWorkspace'
import SettingsIcon from '@mui/icons-material/Settings';

function App() {

  return (
    <div className="wrapper">
      <div className="title">Weather App</div>
      <AddLocation/>
      <CardWorkspace/>
      <div className="settings">
        <SettingsIcon fontSize="large"/>
      </div>
    </div>
  )
}

export default App
