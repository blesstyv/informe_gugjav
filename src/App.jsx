import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  FaBook,
  FaFileAlt,
  FaBalanceScale,
  FaGavel,
  FaDatabase,
  FaClipboardCheck,
  FaLightbulb,
} from "react-icons/fa";

import "./App.css";

const documentos = [
  {
    titulo: "Resumen GUGJAV",
    archivo: "/docs_gugjav/01_resumen_gugjav.md",
    icono: <FaBook />,
  },
  {
    titulo: "Marco GUGJAV",
    archivo: "/docs_gugjav/02_marco_gugjav.md",
    icono: <FaFileAlt />,
  },
  {
    titulo: "Delitos GUGJAV",
    archivo: "/docs_gugjav/03_delitos_gugjav.md",
    icono: <FaGavel />,
  },
  {
    titulo: "Comparación",
    archivo: "/docs_gugjav/04_comparacion_gugjav.md",
    icono: <FaBalanceScale />,
  },
  {
    titulo: "Responsabilidades",
    archivo: "/docs_gugjav/05_responsabilidades_gugjav.md",
    icono: <FaClipboardCheck />,
  },
  {
    titulo: "Datos GUGJAV",
    archivo: "/docs_gugjav/06_datos_gugjav.md",
    icono: <FaDatabase />,
  },
  {
    titulo: "Conclusiones",
    archivo: "/docs_gugjav/07_conclusiones_gugjav.md",
    icono: <FaLightbulb />,
  },
  {
    titulo: "Prompts",
    archivo: "/docs_gugjav/08_prompts_gugjav.md",
    icono: <FaFileAlt />,
  },
];

function App() {
  const [contenido, setContenido] = useState("");
  const [activo, setActivo] = useState(0);

  const cargarDocumento = async (index) => {
    const doc = documentos[index];

    const response = await fetch(doc.archivo);
    const text = await response.text();

    setContenido(text);
    setActivo(index);
  };

  useEffect(() => {
    cargarDocumento(0);
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo-card">
          <h1>INFORME</h1>
          <span>GUGJAV</span>
        </div>

        <div className="menu-card">
          <div className="menu">
          {documentos.map((doc, index) => (
            <button
              key={index}
              className={`menu-item ${
                activo === index ? "active" : ""
              }`}
              onClick={() => cargarDocumento(index)}
            >
              <span className="icon">{doc.icono}</span>
              <span>{doc.titulo}</span>
            </button>
          ))}
          </div>
        </div>
      </aside>

      <main className="main-content">

              <header className="top-header">
          <div className="header-content">

            <div>
              <h1>
                Informe de Fundamentos de Seguridad
                de la Información
              </h1>

              <h3>
                Caso de estudio:
                Ataque de Ransomware a BancoEstado (2020)
              </h3>

              <p>
                Plataforma web interactiva desarrollada en React
              </p>
            </div>

          </div>
        </header>
        <div className="hero">
          <h2>{documentos[activo].titulo}</h2>
          <p>
            Plataforma interactiva de documentación GUGJAV
          </p>
        </div>

        <div className="document-card">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {contenido}
        </ReactMarkdown>
        </div>

        <footer className="footer">
  <a
    href="https://github.com/blesstyv"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-content"
  >
    <svg
      height="20"
      viewBox="0 0 16 16"
      width="20"
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..."></path>
    </svg>

    <span>Desarrollado por Javier Guglielmini</span>
  </a>
</footer>

      </main>

 
    </div>
  );
}

export default App;