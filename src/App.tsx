import Quiz from "./components/Quiz";
import { questionsList } from "./data/questionsList";
import "./App.css";

const App = () => {
  return <Quiz questionsList={questionsList} />;
};

export default App;
