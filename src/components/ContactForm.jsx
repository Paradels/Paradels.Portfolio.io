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
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
          setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
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
      </div>

      <button className={styles.submitBtn} type="submit">Enviar</button>

      {status && (
        <p
          className={
            status.includes("correctamente")
              ? styles.successMsg
              : styles.errorMsg
          }
          role="alert"
        >
          {status}
        </p>
      )}
    </form>
  );
}
