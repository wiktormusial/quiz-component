import { useRef } from "react";
import styled from "styled-components";
import { Answer } from "../../types/questions";

interface Props {
  answer: Answer;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  key: string;
}

const Ans = styled.li`
  border-radius: 5px;
  padding: 5px;
`;

const QuizAnswer: React.FC<Props> = ({ answer, setError, error }) => {
  const ref = useRef<HTMLLIElement>(null);

  const isCorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      if (error) {
        setError("");
      }
      ref.current!.style.borderColor = "green";
      ref.current!.style.border = "1px";
      ref.current!.style.borderStyle = "solid";
    } else {
      setError("Answer is not correct");
    }
  };

  return (
    <Ans ref={ref} onClick={() => isCorrect(answer.isCorrect)}>
      {answer.answer}
    </Ans>
  );
};

export default QuizAnswer;
