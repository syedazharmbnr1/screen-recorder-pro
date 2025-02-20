import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Record from "./pages/Record"
import Edit from "./pages/Edit"
import Auth from "./pages/Auth"
import { SupabaseProvider } from "./contexts/SupabaseContext"

function App() {
  return (
    <SupabaseProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/record" element={<Record />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </SupabaseProvider>
  )
}

export default App