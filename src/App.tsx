import './App.css'
import AddLocation from './components/AddLocation/AddLocation'
import CardWorkspace from './components/CardWorkspace/CardWorkspace'

function App() {

  return (
    <div className="wrapper">
      <div className="title">Weather App</div>
      <AddLocation/>
      <CardWorkspace/>
    </div>
  )
}

export default App
