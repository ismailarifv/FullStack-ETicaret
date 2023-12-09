
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Layout } from './layouts/Layout.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import CardProvider from './context/CardProvider.jsx';
import ScrollToTop from "./components/ScroolToTop";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop />
 <CardProvider>
  <Layout>
    <App />
   </Layout>
   </CardProvider>
   </BrowserRouter>
)
