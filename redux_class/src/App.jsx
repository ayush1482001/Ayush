import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './component/nav.jsx'
import Home from './component/home.jsx'
import Footer from './component/footer.jsx'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <Nav/>
      <Home />
      <Footer />
    </Provider>
    </>
  )
}

export default App;
