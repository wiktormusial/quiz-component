import { useQuestions } from "../../hooks/useQuestions";
import { QuestionsList } from "../../types/questions";
import QuizAnswer from "./QuizAnswer";

interface Props {
  questionsList: QuestionsList;
}

const Quiz: React.FC<Props> = ({ questionsList }) => {
  const { title, answers } = useQuestions(questionsList);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {answers.map((item) => {
          return <QuizAnswer key={item.answer} answer={item} />;
        })}
      </ul>
    </div>
  );
};

export default Quiz;
