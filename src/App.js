import './App.css';
import './components/css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './pages/pageone/PageOne';
import Welcome from './components/Home/Welcome';
import Header from './components/Header/Header';
import PageTwo from './pages/PageTwo/PageTwo';
import PageThree from './pages/PageThree/PageThree';
function App() {
  return (
    <>
      <div >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Welcome />} />
            <Route exact path='/page-1' element={<PageOne />} />
            <Route exact path='/page-2' element={<PageTwo />} />
            <Route exact path='/page-3' element={<PageThree />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
