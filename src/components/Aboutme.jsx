
import styles from "../styles/AboutMe.module.css";

function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.content}>
      <p className={styles.title}>Sobre mí</p>
      <p className={styles.paragraph}>
        Soy un desarrollador en formación con experiencia en el desarrollo de aplicaciones web,
        especializado en tecnologías como JavaScript, React, C# y bases de datos. Actualmente,
        estoy cursando el segundo año de Desarrollo de Aplicaciones Web (DAW), donde sigo ampliando
        mis conocimientos en entornos frontend y backend.
      </p>
      <p className={styles.paragraph}>
        Me considero una persona proactiva, sociable y con don de gentes,
        lo que me permite trabajar eficazmente en equipo y adaptarme a diferentes entornos.
        Siempre estoy buscando nuevas oportunidades para aprender y mejorar,
        ya sea explorando nuevas tecnologías o perfeccionando mis habilidades en el desarrollo de software.
      </p>
      <p className={styles.paragraph}>
        Además, tengo experiencia en configuración de servidores y redes, lo que me permite entender la informática
        desde una perspectiva más amplia. Mi objetivo es seguir creciendo como desarrollador y aportar valor a cualquier
        equipo con mi entusiasmo y capacidad de aprendizaje.
      </p>
      </div>
    </section>
  );
}

export default AboutMe;
