import { ThemeProvider } from './components/ui/theme-provider'
import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Portfolio />
    </ThemeProvider>
  )
}
