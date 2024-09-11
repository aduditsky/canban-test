import React, { useState } from 'react';

import {
  ButtonGroup,
  CloseButton,
  FormContainer,
  ModalOverlay,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from '@/styles/form.styles';
import { ItemType } from '@/shared/types';

export interface ItemModalProps {
  onClose: () => void;
  onSubmit: (newItem: ItemType) => void;
  item?: ItemType;
  columnTitle?: string;
}

const ItemModal: React.FC<ItemModalProps> = ({
  onClose,
  onSubmit,
  item,
  columnTitle,
}) => {
  const [newItem, setNewItem] = useState<ItemType>(
    item || {
      imageUrl: '',
      productId: '',
      title: '',
      description: '',
      category: '',
      price: 0,
      rating: 0,
      points: 0,
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newItem);
    onClose();
  };

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <FormContainer>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <h2>
          {item
            ? 'Редактирование карточки'
            : `Новая карточка в колонку ${columnTitle || 'без названия'}`}
        </h2>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Ссылка на изображение:</StyledLabel>
          <StyledInput
            type='text'
            name='imageUrl'
            value={newItem.imageUrl}
            onChange={handleChange}
          />
          <StyledLabel>ID товара:</StyledLabel>
          <StyledInput
            type='text'
            name='productId'
            value={newItem.productId}
            onChange={handleChange}
          />
          <StyledLabel>Заголовок:</StyledLabel>
          <StyledInput
            type='text'
            name='title'
            value={newItem.title}
            onChange={handleChange}
          />
          <StyledLabel>Описание:</StyledLabel>
          <StyledInput
            type='text'
            name='description'
            value={newItem.description}
            onChange={handleChange}
          />
          <StyledLabel>Категория:</StyledLabel>
          <StyledSelect
            name='category'
            value={newItem.category}
            onChange={handleChange}
          >
            <option value=''>Выберите категорию</option>
            <option value='electronics'>Электроника</option>
            <option value='clothing'>Одежда</option>
            <option value='books'>Книги</option>
          </StyledSelect>
          <StyledLabel>Цена:</StyledLabel>
          <StyledInput
            type='number'
            name='price'
            value={newItem.price}
            onChange={handleChange}
          />
          <StyledLabel>Рейтинг:</StyledLabel>
          <StyledInput
            type='number'
            name='rating'
            value={newItem.rating}
            onChange={handleChange}
          />
          <StyledLabel>Баллы:</StyledLabel>
          <StyledInput
            type='number'
            name='points'
            value={newItem.points}
            onChange={handleChange}
          />
          <ButtonGroup>
            <StyledButton type='submit' primary>
              {item ? 'Сохранить изменения' : 'Создать карточку'}
            </StyledButton>
            <StyledButton type='button' onClick={onClose}>
              Отмена
            </StyledButton>
          </ButtonGroup>
        </StyledForm>
      </FormContainer>
    </ModalOverlay>
  );
};

export default ItemModal;
