import { Route, Switch,Link } from 'react-router-dom';
import {UserRegistration} from './UserRegistration';
import {CreateUser} from './CreateUser';
import {EditUser} from './EditUser';

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Registered Users</Link>
          </li>
          <li className="navbar-item">
            <Link to="/createUser" className="nav-link">Register</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={UserRegistration} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route exact path="/createUser" component={CreateUser} />
    </Switch>
    </div>
  );
}

export default App;
