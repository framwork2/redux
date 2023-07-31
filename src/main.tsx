import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux"
import persistor, { store } from './store/store.tsx';
ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>

)
