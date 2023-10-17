import './App.css';
import MainTable from "./components/MaintTable/MainTable";
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MainTable />
      </Provider>
    </div>
  );
}

export default App;
