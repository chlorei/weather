import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'

// action = {type: "", payload: "?"}




createRoot(document.getElementById('root')!).render(
  <Provider store={store}>          
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

)
