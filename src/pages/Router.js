import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { ShedulePage } from './ShedulePage';

/**
 * @function Router
 * @returns {JSX.Element}
 */

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/shedulepage" element={<ShedulePage />} />
    </Routes>
  );
};
