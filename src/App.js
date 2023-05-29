import Home from './pages/Home';
import "./App.css";
import { QueryClientProvider,QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import NewUser from './pages/NewUser';


const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navbar />
    <Sidebar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/newUser' element={<NewUser/>}/>
    </Routes>
    </BrowserRouter>
    <ReactQueryDevtools intialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
