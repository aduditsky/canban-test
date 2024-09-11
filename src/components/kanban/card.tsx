import React from 'react';
import Image from 'next/image';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CardStyles, ButtonGroup } from '@/styles/card.styles';
import { ItemType } from '@/shared/types';

export interface CardComponentProps {
  item: ItemType;
  isDragging: boolean;
  handleDragStart: (item: ItemType) => void;
  handleDragEnd: () => void;
  onDelete: (id: string) => void;
  onEdit: (item: ItemType) => void;
  onMove: (id: string, direction: 'left' | 'right') => void;
}
const CardComponent: React.FC<CardComponentProps> = ({
  item,
  isDragging,
  handleDragStart,
  handleDragEnd,
  onDelete,
  onEdit,
  onMove,
}) => {
  const { id, imageUrl, title, price, rating, description } = item;

  return (
    <CardStyles
      key={id}
      draggable
      isDragging={isDragging}
      onDragStart={() => handleDragStart(item)}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={150}
        height={150}
        style={{ borderRadius: '10px' }}
      />
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
      <div className='price'>Цена: ${price}</div>
      <div className='rating'>Рейтинг: {rating}</div>

      <ButtonGroup>
        <button onClick={() => onEdit(item)} data-tooltip='Редактировать'>
          <AiFillEdit size={14} />
        </button>
        <button
          onClick={() => onMove(item.id || '', 'left')}
          data-tooltip='Переместить влево'
        >
          <FaArrowLeft size={14} />
        </button>
        <button
          onClick={() => onMove(item.id || '', 'right')}
          data-tooltip='Переместить вправо'
        >
          <FaArrowRight size={14} />
        </button>
        <button onClick={() => onDelete(item.id || '')} data-tooltip='Удалить'>
          <AiOutlineDelete size={14} color='white' />
        </button>
      </ButtonGroup>
    </CardStyles>
  );
};

export default CardComponent;
