import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChangeAvatar from "./pages/ChangeAvatar";
import RecoveryPassword from "./pages/RecoveryPassword";


function App() {
  return (
    <Router>

      <div className="flex flex-col w-screen h-screen justify-center  items-center bg-gray-100 dark:bg-gray-900 transition duration-500">
        <Header />

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign-up" exact>
            <Signup />
          </Route>
          <Route path="/recovery-password" exact>
            <RecoveryPassword />
          </Route>

          <Route path="/change-avatar">
            <ChangeAvatar />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
