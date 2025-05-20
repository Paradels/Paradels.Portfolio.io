import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactForm.module.css";

emailjs.init("11Rk_4Bc_rsvtacD2"); // Tu Public Key

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Opcional: limpiar error al escribir
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!formData.email.includes("@"))
      newErrors.email = "El correo debe contener @";
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // Si no valida, no sigue

    emailjs
      .send("service_5y234eg", "template_q5v70is", {
        title: "Mensaje desde formulario",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(
        (response) => {
          setStatus("Mensaje enviado correctamente!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        },
        (error) => {
          setStatus("Error al enviar el mensaje.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
      <h2>Contacto</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}
      </div>

      <button className={styles.submitBtn} type="submit">
        Enviar
      </button>

      {status && (
        <p
          className={
            status.includes("correctamente") ? styles.successMsg : styles.errorMsg
          }
          role="alert"
        >
          {status}
        </p>
      )}
    </form>
  );
}
