import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainRouter } from './routers/MainRouter.jsx'
import { Provider } from 'react-redux'
import { MovieStore } from './store/MovieProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={MovieStore}>
    <MainRouter>
    <App />
    </MainRouter>
    </Provider>
  </StrictMode>,
)
