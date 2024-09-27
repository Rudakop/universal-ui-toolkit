import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
`;

const CardTitle = styled.h2`
  margin-top: 0;
`;

const Card: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;
