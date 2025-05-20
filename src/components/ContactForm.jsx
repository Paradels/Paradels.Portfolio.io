import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "TU_SERVICE_ID",    // ← Reemplaza con tu Service ID
        "TU_TEMPLATE_ID",   // ← Reemplaza con tu Template ID
        formData,
        "TU_PUBLIC_KEY"     // ← Reemplaza con tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setFormData({ name: "", email: "", message: "" });
        setError(false);
      })
      .catch((err) => {
        console.error("Error al enviar el mensaje:", err);
        setError(true);
      });
  };

  return (
    <section className={styles.contactForm}>
      <h2>Contacto</h2>

      {enviado && <p className={styles.confirm}>¡Gracias! Te responderé pronto.</p>}
      {error && <p className={styles.error}>Ocurrió un error. Intenta nuevamente más tarde.</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
