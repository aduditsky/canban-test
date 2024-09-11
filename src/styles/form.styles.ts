import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  max-width: 100%;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? '#3b82f6' : 'transparent')};
  color: ${({ primary, theme }) => (primary ? '#fff' : theme.colors.text)};
  border: ${({ primary, theme }) =>
    primary ? 'none' : `1px solid ${theme.colors.text}`};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ primary, theme }) =>
      primary ? '#2563eb' : theme.colors.text};
    color: ${({ primary }) => (primary ? '#fff' : '#fff')};
  }
`;
