import React from 'react';

export interface Filter {
  id: string;
  name: string;
  default: boolean;
}

interface Props {
  items: Filter[];
  selectedItem: Filter;
  onItemSelect: (item: Filter) => void;
}

const FilterGroup: React.FC<Props> = ({
  items,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <div>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? 'btn btn-primary' : 'btn btn-secondary'
          }
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default FilterGroup;
