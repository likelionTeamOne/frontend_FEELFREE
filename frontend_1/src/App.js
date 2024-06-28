import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home'; 
import Info from './page/info';
import Update from './page/update';
import Main from './page/main';
import Membership from './page/membership';
import Deliverya from './page/deliverya';
import Deliveryb from './page/deliveryb';
import Deliveryc from './page/deliveryc';
import Deliveryd from './page/deliveryd';
import Text from './page/text';
import Texta from './page/texta';
import Comment from './page/comment';
import Commenta from './page/commenta';
import Check from './page/check';
import Checka from './page/checka';
import Address from './page/address';
import Complete from './page/complete';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/update" element={<Update />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/deliverya" element={<Deliverya />} />
          <Route path="/deliveryb" element={<Deliveryb />} />
          <Route path="/deliveryc" element={<Deliveryc />} />
          <Route path="/deliveryd" element={<Deliveryd />} />
          <Route path="/text" element={<Text />} />
          <Route path="/texta" element={<Texta />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/commenta" element={<Commenta />} />
          <Route path="/check" element={<Check />} />
          <Route path="/checktwo" element={<Checka />} />
          <Route path="/address" element={<Address />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// 선지오 왓다감