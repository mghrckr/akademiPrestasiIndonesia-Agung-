import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import Router from "./routers/Router"
import store from "./store"
import './App.css'



function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </>
  )
}


export default App
