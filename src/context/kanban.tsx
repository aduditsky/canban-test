import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '@/lib/localStorageService';
import { ColumnType, ItemType } from '@/shared/types';
import { initialColumns } from '@/lib/init';
import ItemModal from '@/components/modal/add-product';

interface KanbanContextProps {
  columns: ColumnType[];
  isDragging: boolean;
  handleAddItem: (item: ItemType) => void;
  handleDragStart: (item: ItemType) => void;
  handleDragEnd: () => void;
  handleDrop: (columnId: string) => void;
  handleDelete: (id: string) => void;
  handleEdit: (updatedItem: ItemType) => void;
  handleMove: (id: string, direction: 'left' | 'right') => void;
  sortItems: (columnId: string, order: 'asc' | 'desc' | 'none') => void;
  openModal: (item?: ItemType, columnId?: string) => void;
  closeModal: () => void;
  currentItem: ItemType | undefined;
  isModalOpen: boolean;
  resetColumns: () => void;
}

const KanbanContext = createContext<KanbanContextProps | undefined>(undefined);

export const useKanbanContext = (): KanbanContextProps => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error('useKanbanContext must be used within a KanbanProvider');
  }
  return context;
};

interface KanbanProviderProps {
  children: ReactNode;
}

export const KanbanProvider: React.FC<KanbanProviderProps> = ({ children }) => {
  const [columns, setColumns] = useState<ColumnType[]>(() => {
    return getLocalStorageItem('kanbanColumns', initialColumns);
  });

  const [draggedItem, setDraggedItem] = useState<ItemType | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentItem, setCurrentItem] = useState<ItemType | undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState<string | null>(null);

  useEffect(() => {
    setLocalStorageItem('kanbanColumns', columns);
  }, [columns]);

  const handleAddItem = (newItem: ItemType) => {
    if (!currentColumnId) return;

    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === currentColumnId
          ? {
              ...column,
              items: [
                ...column.items,
                { ...newItem, id: Date.now().toString() },
              ],
            }
          : column
      )
    );
    closeModal();
  };

  const handleDelete = (id: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        items: column.items.filter((item) => item.id !== id),
      }))
    );
  };

  const handleEdit = (updatedItem: ItemType) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        items: column.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ),
      }))
    );
    closeModal();
  };

  const handleMove = (id: string, direction: 'left' | 'right') => {
    const currentIndex = columns.findIndex((column) =>
      column.items.some((item) => item.id === id)
    );

    if (currentIndex === -1) return;

    const targetIndex =
      direction === 'left' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= columns.length) return;

    setColumns((prevColumns) => {
      const currentColumn = prevColumns[currentIndex];
      const targetColumn = prevColumns[targetIndex];
      const movedItem = currentColumn.items.find((item) => item.id === id);

      if (!movedItem) return prevColumns;

      return prevColumns.map((column, index) => {
        if (index === currentIndex) {
          return {
            ...column,
            items: column.items.filter((item) => item.id !== id),
          };
        }

        if (index === targetIndex) {
          return {
            ...column,
            items: [...targetColumn.items, movedItem],
          };
        }

        return column;
      });
    });
  };

  const handleDragStart = (item: ItemType) => {
    setDraggedItem(item);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (columnId: string) => {
    if (!draggedItem) return;

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        const newItems = column.items.filter(
          (item) => item.id !== draggedItem.id
        );
        return column.id === columnId
          ? { ...column, items: [...newItems, draggedItem] }
          : { ...column, items: newItems };
      })
    );
    setDraggedItem(null);
    handleDragEnd();
  };

  const sortItems = (columnId: string, order: 'asc' | 'desc' | 'none') => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id !== columnId) return column;

        const sortedItems = [...column.items].sort((a, b) => {
          if (order === 'asc') return a.rating - b.rating;
          if (order === 'desc') return b.rating - a.rating;
          return 0;
        });

        return {
          ...column,
          items: order === 'none' ? column.items : sortedItems,
        };
      })
    );
  };

  const openModal = (item?: ItemType, columnId?: string) => {
    setCurrentItem(item);
    setCurrentColumnId(columnId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(undefined);
    setCurrentColumnId(null);
  };

  const resetColumns = () => {
    setColumns(initialColumns);
    removeLocalStorageItem('kanbanColumns');
  };

  return (
    <KanbanContext.Provider
      value={{
        columns,
        isDragging,
        handleAddItem,
        handleDragStart,
        handleDragEnd,
        handleDrop,
        handleDelete,
        handleEdit,
        handleMove,
        sortItems,
        openModal,
        closeModal,
        currentItem,
        isModalOpen,
        resetColumns,
      }}
    >
      {children}

      {isModalOpen && (
        <ItemModal
          onClose={closeModal}
          onSubmit={currentItem ? handleEdit : handleAddItem}
          item={currentItem}
          columnTitle={columns.find((col) => col.id === currentColumnId)?.title}
        />
      )}
    </KanbanContext.Provider>
  );
};
