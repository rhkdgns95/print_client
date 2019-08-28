import React from "react";
import { BrowserRouter, Route,  Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home";

const App: React.FC = () => <AppPresenter/>

const AppPresenter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route to={"/"} exact={true} component={Home}/>
      <Redirect to={"*"} from={"/"}/>
    </Switch>
  </BrowserRouter>
);


export default App;