import styled from 'styled-components';

export const CardStyles = styled.div<{ isDragging: boolean }>`
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => `0 4px 8px ${theme.colors.cardShadow}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.cardBorderColor};
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'grab')};
  width: 100%;
  position: relative;

  .title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .description {
    font-size: 1em;
    font-weight: normal;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .price {
    color: ${({ theme }) => theme.colors.priceColor};
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .rating {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.ratingColor};
    margin-bottom: 10px;
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;

  padding: 10px;
  height: 100%;

  button {
    position: relative;
    background: ${({ theme }) => theme.colors.buttonBackground};
    border: none;
    cursor: pointer;
    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.buttonTextColor};

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHoverBackground};
      color: ${({ theme }) => theme.colors.buttonHoverTextColor};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.buttonHoverBackground};
    }

    &:last-child {
      margin-top: auto;
      background-color: ${({ theme }) => theme.colors.deleteButtonBackground};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.deleteButtonHoverBackground};
      }
    }

    &:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.background};
      padding: 5px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 10;
      opacity: 1;
      transition: opacity 0.2s;
    }

    &::after {
      content: '';
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
  }
`;
