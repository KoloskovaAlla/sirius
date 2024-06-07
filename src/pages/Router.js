import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './LoginPage';

/**
 * @function Router
 * @returns {JSX.Element}
 */

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />  
    </Routes> 
  );
};
