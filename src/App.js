import { RouterProvider } from 'react-router-dom';
import '../src/styles/sass/global.css'
import './App.css';
import router from './routes/MainRoute';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
