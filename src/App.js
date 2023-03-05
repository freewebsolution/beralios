import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./pages/Home";
import PostDetail from "./posts/PostDetail";


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

