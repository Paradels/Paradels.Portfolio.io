import React from "react";
import styles from "../styles/MainContent.module.css";

export default function MainContent() {
  return (
    <main className={styles.main}>
      <section className={styles.aboutMe}>
        <h2>Sobre mí</h2>
        <p>
          Soy un Junior Web Developer apasionado por crear aplicaciones
          modernas y eficientes. Me especializo en tecnologías frontend y backend,
          con ganas de aprender y crecer profesionalmente.
        </p>
      </section>

      <section className={styles["skills-exp-wrapper"]}>
        <section className={styles.skills}>
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

        <section className={styles.exp}>
          <h2>Experiencia</h2>
          <ul>
            <li>
              <strong>Proyecto Web Full Stack (Prácticas):</strong> 
              Desarrollé una aplicación web completa usando Node.js, Express y MongoDB en el backend.
            </li>
            <li>
              Implementé autenticación con validación de email por token.
            </li>
            <li>
              Utilicé Docker para contenerización y facilitar el despliegue.
            </li>
            <li>
              En frontend, trabajé con React (Vite) y CMS Strapi para la gestión de contenido.
            </li>
          </ul>
        </section>
      </section>

      <section className={styles.company}>
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
    </main>
  );
}
