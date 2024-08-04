import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import UserInput from './components/UserInput'
import PreviewPage from './components/OgPreview'


const AppLayout = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/user",
    element:<UserInput/>
  },
  {
    path:"/preview",
    element:<PreviewPage/>
  }
])

export default AppLayout;
