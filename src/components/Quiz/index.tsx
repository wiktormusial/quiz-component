import { useState } from "react";
import styled from "styled-components";
import { useQuestions } from "../../hooks/useQuestions";
import { QuestionsList } from "../../types/questions";
import QuizAnswer from "./QuizAnswer";
import QuizError from "./QuizError";

interface Props {
  questionsList: QuestionsList;
}

const Q = styled.div`
  padding: 10px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 5px;
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
    </Q>
  );
};

export default Quiz;
