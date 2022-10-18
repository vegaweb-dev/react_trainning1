import React, { useEffect, useState } from 'react';

const initialForm = {
  id: null,
  name: '',
  constellation: '',
};

const CrudForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert('datos incompletos');
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.constellation}
          name="constellation"
          placeholder="Enter Constellation"
          onChange={handleChange}
        />
        <input type="reset" value="Resetear" onClick={handleReset} />
        <input type="submit" value="Enviar" onSubmit={handleSubmit} />
      </form>
    </>
  );
};

export default CrudForm;
