import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado!');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
      <h3 className="mb-3">Contacto</h3>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje</label>
        <textarea className="form-control" id="mensaje" name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default ContactForm; 