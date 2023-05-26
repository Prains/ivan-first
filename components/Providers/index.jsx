"use client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "@/services/store";
import AuthProvider from "./AuthProvider/AuthProvider";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AuthProvider>{children}</AuthProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default Providers;
