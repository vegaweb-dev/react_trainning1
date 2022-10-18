import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
  { id: 1, name: 'name1', constellation: 'constellation1' },
  { id: 2, name: 'name2', constellation: 'constellation2' },
  { id: 3, name: 'name3', constellation: 'constellation3' },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
    console.log(data);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = () => {};

  return (
    <>
      <CrudForm
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
};

export default CrudApp;
