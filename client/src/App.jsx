import TopNav from "./components/TopNav"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"

function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center  items-center bg-gray-100 dark:bg-gray-900 transition duration-500">
      <TopNav />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Main />
    </div>
  );
}

export default App;
