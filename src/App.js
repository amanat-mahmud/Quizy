import { ToastContainer } from 'react-toastify';
import './App.css';
import Route from './components/Route';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Route></Route>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
