import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import HomeComp from "./components/HomeComp";
import ListPage from "./components/ListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeComp} />
          <Route exact path="/listpage" component={ListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
