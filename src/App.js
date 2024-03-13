/**
 * 
 * App component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import {useReducer} from 'react';

// ROUTER IMPORT
import EntryRoutes from './view/routes/entryRoutes';

// CONTEXT
import { menuInitialState, menuContext as MenuContext, menuReducer } from './contexts/useMenuContext';

function App() {

  const [state, dispatch] = useReducer(menuReducer, menuInitialState);
  
  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      <EntryRoutes/>
    </MenuContext.Provider>
  );
}

export default App;

