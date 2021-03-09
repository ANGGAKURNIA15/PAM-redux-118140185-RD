import React from "react";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";
import storeState from "./redux/store";

const App = () => {
  return (
    <Provider store={storeState}>
      <Counter />;
    </Provider>
  );
};

export default App;
