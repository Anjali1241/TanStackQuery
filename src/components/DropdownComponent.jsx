// DropdownComponent.js
import React, { useState } from 'react';
import { useFetchData } from '../commonFunction/Query';

const DropdownComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const { data, error, isLoading } = useFetchData(selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedValue}>
        <option value="">Select an option</option>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
