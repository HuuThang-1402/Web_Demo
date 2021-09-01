import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./containers/Homepage";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Cart from "./containers/Cart";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Homepage}/>{" "}
    <Route exact path="/home/" component={ArticleList} />{" "}
    <Route exact path="/cart/" component={Cart} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </div>
);

export default BaseRouter;