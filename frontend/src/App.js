import './App.css';
import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import Signup from "./Screens/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
   <Container>
   <Header />
   <Route path="/" component={HomeScreen} exact/>
   <Route path="/signin" component={LoginScreen} />
   <Route path="/signup" component={Signup} />
    </Container>
    </Router>
  );
}

export default App;
