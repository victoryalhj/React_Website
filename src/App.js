import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';

//1.전체상품페이지, 로그인, 상품상세페이지
//1-1.네이게이션바를 만든다
//2.전체상품페이지 - 전체상품
//3.로그인버튼 - 로그인페이지
//4.상품디테일 눌렀으나, 로그인안되어있을경우 로그인페이지가 먼저나옴
//5.로그인이되어있을경우 상품디테일페이지를 볼수있음
//6.로그아웃버튼을 클릭하면 로그아웃
//7.로그아웃이되면 상품디테일페이지를 볼수없음, 다시로그인페이지가 보임
//8.로그인을하면 로그아웃이 보이고, 로그아웃하면 로그인이보인다
//9.상품을 검색할수있다다

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </div>

  );
}

export default App;
