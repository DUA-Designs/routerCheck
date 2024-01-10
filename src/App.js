import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';



export default function App(){
    return  (<Provider store={store}>
     <Router>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to={"/routerCheck"}>Main Page</Link>

                </li>
                <li>
                    <Link to={"/routerCheck/basket"}>Basket Page</Link>

                </li>
                </ul>
            </nav>
        </div>
        <Routes>
            <Route element={<MainPage/>} path='/'></Route>
            <Route element={<BasketPage/>} path='/basket'></Route>
        </Routes>
     </Router>
    </Provider>);
}