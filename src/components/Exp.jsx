import styles from "../styles/Exp.module.css";

function Exp() {
  return (
        <section className={styles.exp}>
          <div className={styles.content}>
          <p className={styles.title}>Experiencia</p>
          <ul>
            <li><strong>Practicas de empresa en Talento S.L. Tenerife</strong> Febrero - Mayo 2025 </li>
            <li><strong>Tecnologías usadas : </strong> 
            <ul>
                <li><strong>Backend</strong> Node.js, Express</li>
                <li><strong>Frontend</strong> React, Vite, JavaScript, HTML, CSS, CMS ( Strapi ) </li>
                <li><strong>Otras Tecnologías</strong> Docker, MongoDb, MySql, Git</li>
                
            </ul>
            </li>
          </ul>
          </div>
        </section>
  );
}

export default Exp;
