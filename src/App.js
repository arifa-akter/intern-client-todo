import { Route, Routes } from "react-router-dom";
import Header from './component/Header';
import SignUp from "./component/Users/SignUp";
import SignIn from "./component/Users/SignIn";
import ToDoAdd from "./component/ToDo/ToDoAdd";
import CategoryAdd from "./component/Category/CategoryAdd";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path="/" element={<SignUp></SignUp>}></Route>
      <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      <Route path="/addTodo" element={<ToDoAdd></ToDoAdd>}></Route>
      <Route path="/categoryAdd" element={<CategoryAdd></CategoryAdd>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
