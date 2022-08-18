import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import UseLoginStore from "./Pages/Login/UseLoginStore"
import Public from './Pages/Public';
import Private from './Pages/Private';
import Events from './Pages/Events/Events';
import Event from './Pages/Events/Event';
import CommentList from './Pages/Comments/Comments';
import CommentDetails from './Pages/Comments/Details';


function App() {

  const { loggedIn } = UseLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));
  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={!loggedIn ? <Public /> : <Private />}></Route>
      <Route path="/events" element={<Events />}>
        <Route path=":id" element={<Event />}> </Route> </Route>
      <Route path="/goals" element={<CommentList />}>
        <Route path=":id" element={<CommentDetails />}> </Route> </Route>


      <Route path="*" element={<NotFound />}></Route>


    </Routes >
  );
}

export default App;
