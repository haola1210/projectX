import TopNav from "./components/TopNav"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="flex flex-col w-screen h-screen justify-center  items-center bg-gray-100 dark:bg-gray-900 transition duration-500">
        <TopNav />

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/sign-up" exact>
            <Signup />
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
