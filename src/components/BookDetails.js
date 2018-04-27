import React from 'react';

const BookDetail = ({ fields }) => {
  return (
    <div style={{ padding: '36px', display: 'inline-block', border: '1px solid #ccc' }}>
      {fields.map(field => (
        <div key={field.id}>
          <strong>{field.name}:</strong>
          <label>{field.value}</label>
        </div>
      ))}
    </div>
  );
};

export default BookDetail;
