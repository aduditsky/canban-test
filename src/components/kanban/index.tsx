import React from 'react';
import CardComponent from './card';
import {
  AddItemButton,
  Column,
  ColumnTitle,
  ColumnWrapper,
  Container,
  Divider,
  ResetButton,
  ResetButtonWrapper,
  SortButtonGroup,
} from '@/styles/kanban.styles';
import { useKanbanContext } from '@/context/kanban';
import { FaPlus } from 'react-icons/fa';

const DragDropComponent: React.FC = () => {
  const {
    columns,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    isDragging,
    sortItems,
    handleDelete,
    handleMove,
    openModal,
    resetColumns,
  } = useKanbanContext();

  return (
    <>
      <ResetButtonWrapper>
        <ResetButton onClick={resetColumns}>Сбросить прогресс</ResetButton>
      </ResetButtonWrapper>

      <Container>
        {columns.map((column) => (
          <ColumnWrapper key={column.id}>
            <SortButtonGroup>
              <span>Сортировка по рейтингу</span>
              <button onClick={() => sortItems(column.id, 'asc')}>↑</button>
              <button onClick={() => sortItems(column.id, 'desc')}>↓</button>
              {/* Я не понимаю, что нужно от этой сортировки без работы по апи. На всякий случай заготовку сделал */}
              {/* <button onClick={() => sortItems(column.id, 'none')}>
                Без сортировки
              </button> */}
            </SortButtonGroup>

            <Column
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(column.id)}
            >
              <ColumnTitle>
                {column.title} - {column.items.length}
              </ColumnTitle>

              <Divider />

              <AddItemButton onClick={() => openModal(undefined, column.id)}>
                <FaPlus />
              </AddItemButton>

              {column.items.map((item) => (
                <CardComponent
                  key={item.id}
                  item={item}
                  isDragging={isDragging}
                  handleDragStart={() => handleDragStart(item)}
                  handleDragEnd={handleDragEnd}
                  onDelete={handleDelete}
                  onEdit={() => openModal(item, column.id)}
                  onMove={handleMove}
                />
              ))}
            </Column>
          </ColumnWrapper>
        ))}
      </Container>
    </>
  );
};

export default DragDropComponent;
