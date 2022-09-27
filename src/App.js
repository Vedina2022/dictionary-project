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
          <h3 className="mb-4">"In the beginning was the Word.."</h3>
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className="App-footer mt-5">
          This project was coded by
          <a
            href="https://www.linkedin.com/in/nadiia-kyshinska-8aa342168/"
            target="_blank"
            title="LinkedIn profile"
            className="branding-link"
            rel="noreferrer"
          >
            {" "}
            Nadiia Kyshinska
          </a>{" "}
          and is
          <a
            href="https://github.com/Vedina2022/dictionary-project"
            target="_blank"
            className="branding-link"
            title="GitHub link"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub.
          </a>{" "}
          Photos provided by
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noreferrer"
            title="Photos provider's link"
            className="branding-link"
          >
            {" "}
            Pexels
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
