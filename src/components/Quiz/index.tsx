import { useQuestions } from "../../hooks/useQuestions";
import { QuestionsList } from "../../types/questions";

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
          return <li key={item.answer}>{item.answer}</li>;
        })}
      </ul>
    </div>
  );
};

export default Quiz;
