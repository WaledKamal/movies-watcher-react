import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Watch from "./components/pages/Watch";
import Home from "./components/Home";
import Header from "./components/Header";
import { MoviesProvider } from "./Context/MoviesContext";


function App() {
  return (
    <MoviesProvider>
      <Header />
      <BrowserRouter>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/watch/:VideoURL"}>
          <Watch />
        </Route>
        <Route exact path={"/watch/"}>
          <Home />
        </Route>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
