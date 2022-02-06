import './App.css'
// ** Components **
import DivPages from './Pages/DivPage'
// ** Contexts **
import ThemeContextProvider from './Contexts/ThemeContext.js'
import PhotosCacheContextProvider from './Contexts/PhotosCacheContext.js'
// import {ErrorBoundary} from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <PhotosCacheContextProvider>
          <DivPages />
        </PhotosCacheContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
