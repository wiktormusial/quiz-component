import styled from "styled-components";

const QN = styled.p`
  padding: 5px;
  padding-top: 0;
  text-align: right;
  font-weight: bold;
  color: #42a5f5;
  cursor: pointer;
`;

const QuizNext = () => {
  return <QN>Next question -&gt; </QN>;
};

export default QuizNext;
