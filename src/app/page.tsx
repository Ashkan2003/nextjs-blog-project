import Navbar from "@/components/NavBar";
import React from "react";
import Main from "@/components/Main";
import { Metadata } from "next";

const HomePage = async () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export const metadata: Metadata = {
  title:"blog-project - mainPage",
  description:"view some information about user and project..."
};

export default HomePage;
