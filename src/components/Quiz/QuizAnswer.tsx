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
  padding-top: 1.1em;
  padding-bottom: 1.1em;
  padding-left: 1.5em;
  cursor: pointer;
`;

const QuizAnswer: React.FC<Props> = ({ answer, setError, error }) => {
  const ref = useRef<HTMLLIElement>(null);

  const isCorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      if (error) {
        setError("");
      }
      ref.current!.style.boxShadow =
        "box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
      ref.current!.style.background = "#4caf50";
      ref.current!.style.fontWeight = "bold";
      ref.current!.style.color = "white";
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
