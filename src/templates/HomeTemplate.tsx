import React, { Fragment } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import ScrollUp from "../components/ScrollUp/ScrollUp";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollUp />
    </Fragment>
  );
};

export default HomeTemplate;
