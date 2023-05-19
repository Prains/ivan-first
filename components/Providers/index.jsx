"use client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "@/services/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  );
};

export default Providers;
