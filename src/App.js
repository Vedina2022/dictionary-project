import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
          <div className="class"></div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer mt-5">
          <small>Coded by Nadiia Kyshinska</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
