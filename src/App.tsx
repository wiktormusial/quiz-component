import Quiz from "./components/Quiz";
import "./App.css";
import { questionsList } from "./data/questionsList";

const App = () => {
  if (questionsList) {
    return <Quiz questionsList={questionsList} />;
  } else {
    return <div>Loading</div>;
  }
};

export default App;
