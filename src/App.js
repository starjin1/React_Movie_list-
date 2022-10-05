import React from 'react';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about/:id' element={<About />}></Route>
    </Routes>
    </BrowserRouter>
  //     <Router>
  //     <Switch>
  //     <Route path='/' exact={true} component={Home}>
  //         {/* <Home /> */}
  //     </Route>
  //     <Route path='/about/:id' component={About}>
  //         {/* <About /> */}
  //     </Route>
  //   </Switch>
  // </Router>
  );
}

export default App;
