import React from 'react';

const CrudTableRow = ({ el, setDataToEdit }) => {
  const { id, name, constellation } = el;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
