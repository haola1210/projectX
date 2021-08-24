import Login from "./pages/Login"
import TopNav from "./components/TopNav"
function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center  items-center bg-gray-100 dark:bg-gray-900 transition duration-500">
      <TopNav />
      <Login />
    </div>
  );
}

export default App;
