import styles from "../styles/Skills.module.css";

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.content}>
      <p className={styles.title}>Habilidades Técnicas</p>
      <ul>
        <li><strong>Lenguajes de Programación:</strong> JavaScript, C#, Java</li>
        <li><strong>Frontend:</strong> React, Razor Pages</li>
        <li><strong>Backend:</strong> API REST, Spring Boot, Node.js</li>
        <li><strong>Arquitecturas y Patrones:</strong> MVC, MVP</li>
        <li><strong>Bases de Datos:</strong> MySQL, SQL Server</li>
        <li><strong>Despliegue y Servidores:</strong> Windows Server, Linux, Virtualización</li>
      </ul>
      </div>
    </section>
  );
}

export default Skills;
