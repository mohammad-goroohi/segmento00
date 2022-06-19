import './App.css';
import SignUpLayout from './components/Layouts/SignUpLayout';
import SignInLayout from './components/Layouts/SignInLayout';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
function App() {
    return (
        <div>
            <Router>
                <div className='flex fixed bottom-1'>
                    <Link to="/su/p1">صفحه 1</Link>
                    <Link to="/su/p2">صفحه 2</Link>
                    <Link to="/si/p3">صفحه 3</Link>
                    <Link to="/si/p4">صفحه 4</Link>
                    <Link to="/si/p5">صفحه 5</Link>
                    <Link to="/si/p6">صفحه 6</Link>
                    <Link to="/si/p7">صفحه 7</Link>
                </div>


                <Routes>
                    <Route path='/su/*' element={<SignUpLayout />} />
                </Routes>
                <Routes>
                    <Route path='/si/*' element={<SignInLayout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;