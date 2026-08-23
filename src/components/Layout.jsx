import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function Layout() {
  return (
    <>
      <style>{`
        /* ── Outer white page wrapper ─────────────────────── */
        /* No overflow restriction so sticky positioning works */
        .page-root {
          width: 100%;
          background: #ffffff;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        /* ── Inner scroll container ───────────────────────── */
        .app-frame {
          width: 100%;
          position: relative;
        }
      `}</style>

      <div className="page-root">
        <div className="app-frame">

          {/* Navbar is fixed/absolute inside each section's sticky context */}
          <Navbar />

          {/* Page sections rendered here — Hero handles its own bg */}
          <main>
            <Outlet />
          </main>

          {/* Persistent Footer */}
          <Footer />

        </div>
      </div>
    </>
  )
}

