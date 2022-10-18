import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, setDataToEdit }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>constellation</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow el={el} key={el.id} setDataToEdit={setDataToEdit} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
