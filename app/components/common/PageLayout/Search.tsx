import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      console.log(value);

      router.push(`/search/${value}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <>
      <input
        className="rounded-lg"
        onKeyDown={handleEnterPress}
        onChange={handleInputChange}
        type="text"
      />
    </>
  );
};

export default Search;
