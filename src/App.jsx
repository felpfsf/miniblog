import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { Router } from "./routes/router"

function App() {
  return (
    <>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  )
}

export default App