import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Items from './views/Items/Items'
import OurStory from './views/OurStory/OurStory'
import ContactUs from './views/ContactUs/ContactUs'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    </>
  )
}

export default App
