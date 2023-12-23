import React, { ChangeEvent } from 'react';

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searchbar;