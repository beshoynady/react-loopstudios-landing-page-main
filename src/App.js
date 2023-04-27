import React from 'react';
import Main from './component/main/Main';
import Interactive from './component/interactive/Interactive';
import Creation from './component/creations/Creation';
import './App.css';
import Footer from './component/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Main/>
      <Interactive/>
      <Creation/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
