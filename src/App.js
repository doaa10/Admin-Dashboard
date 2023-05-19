import './App.css';
import { Home } from './pages/home/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { List } from './pages/list/List';
import { Login } from './pages/login/Login';
import { Single } from './pages/single/Single';
import { New } from './pages/new/New';


export const App=()=> {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
