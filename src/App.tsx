import React from "react";
import { BrowserRouter, Route,  Redirect, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import { ThemeProvider } from "./styles/typed-components";
import theme from "./styles/theme";

const App: React.FC<any> = () => (
  <ThemeProvider theme={theme}>
    <AppPresenter/>
  </ThemeProvider>
)

const AppPresenter: React.FC<any> = ({
  data
}) => (
  <BrowserRouter>
    <Switch>
      <Route to={"/"} exact={true} component={Home}/>
      <Redirect to={"*"} from={"/"}/>
    </Switch>
  </BrowserRouter>
);


export default App;