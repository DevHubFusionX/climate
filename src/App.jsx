import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}
