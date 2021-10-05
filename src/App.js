import "./App.css";
import Header from "./Components/Header/Header";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import TinderCards from "./Components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
