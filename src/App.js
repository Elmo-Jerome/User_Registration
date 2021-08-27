import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const userRegister = () => {
    Axios.post('http://localhost:3001/user-register', { name: name, email: email, company: company, role: role }).then(() => { 
      alert("You are now registered!");
    }).catch(() => {
      alert("Try again.");
    })
  }

  return (
    <div className="App form-group">
      <label for="name">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your Full name here" required onChange={(event) => { setName(event.target.value); }} />
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter your valid email here" required onChange={(event) => { setEmail(event.target.value); }} />
      <label for="company">Company</label>
      <input type="text" className="form-control" id="company" placeholder="Enter your Company name here" required onChange={(event) => { setCompany(event.target.value); }} />
      <label for="role">Role</label>
      <input type="text" className="form-control" id="role" placeholder="Enter your Company role here" required onChange={(event) => { setRole(event.target.value); }} />

      <button className="form-control btn-info" onClick={userRegister}>Register</button>
    </div>
  );
}

export default App;
