import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { Duaa } from './pages/Duaa'
import { Cura } from './pages/Cura'
import { Akeedh } from './pages/Akeedh'
import { AlTashkeel } from './pages/AlTashkeel'
import { Team } from './pages/Team'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="duaa" element={<Duaa />} />
          <Route path="cura" element={<Cura />} />
          <Route path="akeedh" element={<Akeedh />} />
          <Route path="al-tashkeel" element={<AlTashkeel />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
