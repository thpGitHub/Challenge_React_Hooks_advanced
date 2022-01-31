import './App.css'
import DivPages from './Pages/DivPage'
import ThemeContextProvider from './Contexts/ThemeContext.js'
// import {ErrorBoundary} from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <DivPages />
      </ThemeContextProvider>
    </div>
  )
}

export default App
