import React, { useState } from "react";
import styles from "../styles/MainContent.module.css";
import ContactForm from "./ContactForm";

export default function MainContent({ refs }) {
  const [mostrarBio, setMostrarBio] = useState(false);

  const toggleBio = () => {
    setMostrarBio((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      {/* SOBRE MÍ */}
      <section ref={refs.aboutMe} className={styles.aboutMe}>
        <h2>Sobre mí</h2>
        <p>
          Soy un Junior Web Developer apasionado por crear aplicaciones
          modernas y eficientes. Me especializo en tecnologías frontend y backend,
          con ganas de aprender y crecer profesionalmente.
        </p>

        <button className={styles.toggleBtn} onClick={toggleBio}>
          {mostrarBio ? "Ocultar más información" : "Mostrar más información"}
        </button>

        {mostrarBio && (
          <div className={styles.bioExtra}>
            <p>
              Durante mi formación he trabajado con diversos lenguajes y frameworks,
              aprendiendo metodologías ágiles, control de versiones con Git, pruebas
              unitarias, y despliegue de aplicaciones. Además, tengo experiencia en trabajo
              en equipo, comunicación efectiva y resolución de problemas. Estoy constantemente
              aprendiendo y actualizándome con nuevas tecnologías para ofrecer soluciones de calidad.
            </p>
          </div>
        )}
      </section>

      {/* HABILIDADES Y EXPERIENCIA */}
      <section className={styles["skills-exp-wrapper"]}>
        <section ref={refs.skills} className={styles.skills}>
          <h2>Habilidades</h2>
          <ul>
            <li><strong>JavaScript:</strong> ES6+, asincronía, DOM, fetch API</li>
            <li><strong>React:</strong> hooks, state, context, routing</li>
            <li><strong>Node.js & Express:</strong> API REST, middleware, autenticación</li>
            <li><strong>MongoDB:</strong> modelado de datos, consultas, integración</li>
            <li><strong>Docker:</strong> contenedores para desarrollo y producción</li>
            <li><strong>Git & GitHub:</strong> control de versiones, ramas, pull requests</li>
          </ul>
        </section>

        <section ref={refs.exp} className={styles.exp}>
          <h2>Experiencia</h2>
          <ul>
            <li>
              <strong>Proyecto Web Full Stack (Prácticas):</strong> 
              Desarrollé una aplicación web completa usando Node.js, Express y MongoDB en el backend.
            </li>
            <li>Implementé autenticación con validación de email por token.</li>
            <li>Utilicé Docker para contenerización y facilitar el despliegue.</li>
            <li>En frontend, trabajé con React (Vite) y CMS Strapi para la gestión de contenido.</li>
          </ul>
        </section>
      </section>

      {/* EMPRESA */}
      <section ref={refs.company} className={styles.company}>
        <h2>Mi Empresa de Prácticas</h2>
        <p>
          Durante mis prácticas profesionales desarrollé una página web completa donde
          empleé Node.js y Express para el backend, incluyendo autenticación y validación 
          por token de email. Utilicé Docker para la contenerización y MongoDB como base 
          de datos. En el frontend, construí la aplicación con Vite y React, integrando un CMS 
          basado en Strapi para gestionar el contenido dinámicamente. Además de usar Figma para hacer
          la página pixel perfect, también trabajé con Git y GitHub para el control de versiones y la
          colaboración en equipo.
        </p>
      </section>

      {/* CONTACTO */}
      <ContactForm />
    </main>
  );
}
