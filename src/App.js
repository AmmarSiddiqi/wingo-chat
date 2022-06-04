import "./App.css";
import Card from "./components/UI/Card";
import Leftbar from "./components/leftbar/Leftbar";
import Chat from "./components/rightbar/Chat";

function App() {
  return (
    <div className="App">
      <Card>
        <Leftbar />
        <Chat />
      </Card>
    </div>
  );
}

export default App;
