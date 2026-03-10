import styles from "./styles/services.module.css";

const services = [
  {
    title: "Full Stack / SDE",
    description:
      "End-to-end web application development with modern frameworks, responsive UI, API integration, and scalable backend systems.",
    tech: "Next.js · React · TypeScript · Node.js · PostgreSQL",
    github: "https://github.com/shURenZHOUluxun/mini-twitter",
  },
  {
    title: "Data Analysis",
    description:
      "Data cleaning, SQL querying, dashboard building, and business insight generation using Python, Excel, and databases.",
    tech: "Python · pandas · SQL · PostgreSQL · Excel",
    github: "https://github.com/shURenZHOUluxun/retail_sales_analysis",
  },
  {
    title: "Machine Learning",
    description:
      "Model building, feature engineering, and applied machine learning projects for prediction, classification, and intelligent systems.",
    tech: "Python · scikit-learn · TensorFlow · Jupyter",
    github: "https://github.com/shURenZHOUluxun/Stock_Volatility_Prediction",
  },
  {
    title: "Developer Tools / Automation",
    description:
      "Custom scripts, workflow automation, and productivity tools that simplify repetitive tasks and improve development efficiency.",
    tech: "Python · APIs · Automation Scripts · CLI Tools",
    github: "",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {/* <p className={styles.eyebrow}>Services</p> */}
        <h1 className={styles.title}>What I Can Build</h1>
        <p className={styles.subtitle}>
          I design and develop practical, project-driven solutions across
          software engineering, data, and machine learning.
        </p>
      </section>

      <section className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.description}</p>
              <p className={styles.tech}>{service.tech}</p>
            </div>

            <a
              href={service.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View GitHub Repo
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}