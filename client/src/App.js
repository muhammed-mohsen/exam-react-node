import React, { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import QuestionContainer from "./components/QuestionContainer";
import { getQuestions } from "./store/questions";
import "./index.css";

function App() {
  useEffect(() => {
    store.dispatch(getQuestions());
  }, []);
  return (
    <Provider store={store}>
      <QuestionContainer />
    </Provider>
  );
}

export default App;
