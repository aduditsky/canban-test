import styled from 'styled-components';

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const ThemeToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
