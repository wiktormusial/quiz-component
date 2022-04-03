import { useRef } from "react";
import styled from "styled-components";
import { Answer } from "../../types/questions";

interface Props {
  answer: Answer;
  key: string;
}

const Ans = styled.li`
  border-radius: 5px;
  padding: 5px;
`;

const QuizAnswer: React.FC<Props> = ({ answer }) => {
  const ref = useRef<HTMLLIElement>(null);

  const isCorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      ref.current!.style.borderColor = "green";
      ref.current!.style.border = "1px";
      ref.current!.style.borderStyle = "solid";
    }
  };

  return (
    <Ans ref={ref} onClick={() => isCorrect(answer.isCorrect)}>
      {answer.answer}
    </Ans>
  );
};

export default QuizAnswer;
