import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundCard};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
`;
