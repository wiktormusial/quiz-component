import styled from "styled-components";

interface QuizProps {
  error: string;
}

const QE = styled.p`
  padding: 5px;
`;

const QuizError: React.FC<QuizProps> = ({ error }) => {
  return <QE>{error}</QE>;
};

export default QuizError;
