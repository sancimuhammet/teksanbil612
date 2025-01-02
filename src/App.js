import React from "react";
import BlogCard from "./components/BlogCard";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Hikaye 1: Bir Başlangıç",
      description: "Bu, harika bir başlangıcın hikayesi...",
      date: "2025-01-02",
    },
    {
      id: 2,
      title: "Hikaye 2: Yolculuk Devam Ediyor",
      description: "Hayat, bir yolculuktur ve bu hikaye tam ortasında.",
      date: "2025-01-01",
    },
    {
      id: 3,
      title: "Hikaye 3: Hedefe Yaklaşırken",
      description: "Hedefe az kaldı ama hikaye bitmedi...",
      date: "2024-12-31",
    },
  ];

  return (
    
      
    <div className="App">
      <header className="header">
        <h1>TEKSANBİL</h1>
        <p>Teknoloji sanat ve bilim hikayeleri</p>
      </header>
      <Helmet>
      <title>Blog - Teksanbil</title>
      </Helmet>
    
      <main className="main">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App*/