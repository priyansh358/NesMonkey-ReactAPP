import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

 const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <BrowserRouter>
            <NavBar />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />}></Route>
            <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={6} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />}></Route>
            <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={6} country="in" category="health" />}></Route>
            <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={6} country="in" category="science" />}></Route>
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
 export default App;
