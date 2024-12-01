import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from 'components/loading';
import './App.css';

const DefaultLayout = React.lazy(() => import('./layout/defaultLayout'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
