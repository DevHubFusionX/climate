import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home/Home'
import Infrastructure from '../pages/Infrastructure/Infrastructure'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="technology" element={<Home />} />
        <Route path="infrastructure" element={<Infrastructure />} />
      </Route>
    </Routes>
  )
}
