import styled from "styled-components";

interface QuizProps {
  error: string;
}

const QE = styled.p`
  padding: 5px;
  font-weight: bold;
  color: #ef5350;
`;

const QuizError: React.FC<QuizProps> = ({ error }) => {
  return <QE>{error}</QE>;
};

export default QuizError;
