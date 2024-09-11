import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  gap: 10px;
  align-items: stretch;
`;

export const Column = styled.div`
  flex-grow: 1;
  width: 100%;
  min-height: 700px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.columnBackground};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
export const ColumnTitle = styled.h3`
  text-align: center;
  margin: 0;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 15px 0;
  border: none;
  height: 1px;
  background-color: ${(props) => props.theme.colors.dividerColor};
`;

export const AddItemButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  width: fit-content;

  background-color: #3b82f6;
  color: white;

  border: none;
  border-radius: 5px;

  padding: 10px 20px;

  margin: 0 auto;
  margin-bottom: 20px;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Item = styled.div<{ isDragging: boolean }>`
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${({ isDragging }) => (isDragging ? '#f0f0f0' : '#fff')};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }

  .title {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .price {
    color: #2ecc71;
    font-size: 1em;
    margin-bottom: 5px;
  }

  .rating {
    font-size: 0.9em;
    color: #f39c12;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const SortButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  span {
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #3b82f6;
    color: white;
    font-size: 12px;

    &:hover {
      background-color: #2563eb;
    }
  }
`;

export const ResetButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const ResetButton = styled.button`
  background-color: #ff4c4c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d93a3a;
  }

  &:active {
    background-color: #c32d2d;
  }
`;
