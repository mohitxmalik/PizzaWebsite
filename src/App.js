import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Home from "./pages/index";
import checkout1 from "./pages/checkout1";
import checkout2 from "./pages/checkout2";
import checkout3 from "./pages/checkout3";
import checkout4 from "./pages/checkout4";
import checkout5 from "./pages/checkout5";
import checkout6 from "./pages/checkout6";
import forgotpassword from "./pages/forgotpassword";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SigninPage" component={SigninPage} />
        <Route exact path="/SignupPage" component={SignupPage} />
        <Route exact path="/Checkout1" component={checkout1} />
        <Route exact path="/Checkout2" component={checkout2} />
        <Route exact path="/Checkout3" component={checkout3} />
        <Route exact path="/Checkout4" component={checkout4} />
        <Route exact path="/Checkout5" component={checkout5} />
        <Route exact path="/Checkout6" component={checkout6} />
        <Route exact path="/ForgotPassword" component={forgotpassword} />
      </Switch>
    </Router>
  );
}

export default App;
