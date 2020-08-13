import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import Course from "../page/course/course"
import Bootcamps from "../page/bootcamp/bootcamp"
import "../page/sass/normalize.scss"
function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/bootcamps/:curso" component={Course}></Route>
        <Route exact path="/bootcamps" component={Bootcamps}></Route>
      </Switch>
    </div>
  );
}

export default App;
