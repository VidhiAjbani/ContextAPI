import React from "react";
import MainScreen from "./Screens/MainScreen";
import CountContextProvider from "./contextAPI/countContextProvider";

export default function App() {
  return(
    <CountContextProvider>
    <MainScreen/>
    </CountContextProvider>
  )
}

