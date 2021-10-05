// import from libs
import { useEffect } from "react"
import { useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useDispatch } from "react-redux"

//import components and pages
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"
import ChangeAvatar from "./pages/ChangeAvatar";
import RecoveryPassword from "./pages/RecoveryPassword";
import ErrorGlobal from "./components/ErrorGlobal";

//import routes
import PublicRoute from "./routers/PublicRoute"
import PrivateRoute from "./routers/PrivateRoute"

//import saga actions
import { FETCH_USER_SESSION } from "./redux/session/sessionActions"

function App() {
  const dispatch = useDispatch()
  const { errorMessage } = useSelector(state => state.error)
  const session = useSelector(state => state.session)
  useEffect(() => {
    dispatch({ type : FETCH_USER_SESSION })
  }, [])

  return (
    <Router>

      <div className="flex flex-col w-screen h-screen justify-center  items-center bg-gray-100 dark:bg-gray-900 transition duration-500">
        <Header />
        { errorMessage && <ErrorGlobal message={errorMessage} /> }

        <Switch>
          <PublicRoute path="/login" exact>
            <Login />
          </PublicRoute>
          <PublicRoute path="/sign-up" exact>
            <Signup />
          </PublicRoute>
          <PublicRoute path="/recovery-password" exact>
            <RecoveryPassword />
          </PublicRoute>

          <PrivateRoute path="/change-avatar">
            <ChangeAvatar />
          </PrivateRoute>

          <PrivateRoute path="/">
            <Main />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
