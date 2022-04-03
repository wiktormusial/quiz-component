import { useState } from "react";
import styled from "styled-components";
import { useQuestions } from "../../hooks/useQuestions";
import { QuestionsList } from "../../types/questions";
import QuizAnswer from "./QuizAnswer";
import QuizError from "./QuizError";
import QuizNext from "./QuizNext";

interface Props {
  questionsList: QuestionsList;
}

const Q = styled.div`
  padding: 10px;
  margin: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: fit-content;
  border-radius: 5px;
  background: white;
`;

const QHeader = styled.h1``;

const QList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Quiz: React.FC<Props> = ({ questionsList }) => {
  const [error, setError] = useState("");
  const { title, answers } = useQuestions(questionsList);

  return (
    <Q>
      <QHeader>{title}</QHeader>
      <QList>
        {answers.map((item) => {
          return (
            <QuizAnswer
              error={error}
              setError={setError}
              key={item.answer}
              answer={item}
            />
          );
        })}
      </QList>
      <QuizError error={error} />
      <QuizNext />
    </Q>
  );
};

export default Quiz;
