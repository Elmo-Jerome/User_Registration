import { Route, Switch } from 'react-router-dom';
import './App.css';
import { RegistrationForm } from './RegistrationForm';
import {UserRegistration} from './UserRegistration';
import {UserList} from './UserList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserRegistration} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/userlist" component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
