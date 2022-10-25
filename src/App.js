import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './app/Login/Login';
import ModelManagement from './model-management/ModelManagement';

import './styles/common.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/model-management" element={<ModelManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
