/**
 * 
 * Entry Routes
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import { Route, Routes, HashRouter } from 'react-router-dom';

// ROUTER IMPORT
import AppRoutes from './appRoutes';
import * as PATH from './constants';

// ENTRY ROUTER VARIABLE DECLARE
const EntryRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path={PATH.OTHER_PATH} element={<AppRoutes />}/>
    </Routes>
  </HashRouter>
);

// EXPORT COMPONENT
export default EntryRoutes;
