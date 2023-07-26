import "./App.css";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/state/User";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana"
  //   },
  // ]

  return (
    <div className="App">
      <ThemeContextProvider>
        <User/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
