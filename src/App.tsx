export default function App() {
  const telefone = "5554991819009";
  const foto = "/Marcelo.jpeg";

  const mensagem = encodeURIComponent(
    "Olá, Marcelo. Vim para saber sobre Atendimento Psicológico Online e gostaria de receber informações sobre consultas. Pode me passar horários e valores?"
  );

  const whatsappLink = `https://wa.me/${telefone}?text=${mensagem}`;
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 900 : false;

  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={styles.floatingWhatsApp}
      >
        WhatsApp
      </a>

      <main style={styles.wrapper}>
        <section style={styles.heroCard}>
          <div style={styles.leftColumn}>
            <p style={styles.badge}>Atendimento Psicológico Online</p>

            <h1 style={styles.title}>Marcelo Correia Ramos</h1>

            <p style={styles.crp}>Psicólogo | CRP-07/27623</p>

            <p style={styles.description}>
              Atendimento psicológico online para todo o Brasil, com foco em
              acolhimento, clareza no primeiro contato e organização no processo
              terapêutico.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={styles.primaryButton}
            >
              Falar comigo no WhatsApp
            </a>

            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <p style={styles.cardLabel}>Indicado para</p>
                <h3 style={styles.cardTitle}>
                  Demandas emocionais e comportamentais
                </h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Ansiedade e sobrecarga emocional</li>
                  <li style={styles.listItem}>
                    Dificuldade em controlar impulsos
                  </li>
                  <li style={styles.listItem}>
                    Impulsividade e hábitos repetitivos
                  </li>
                  <li style={styles.listItem}>
                    Uso excessivo de jogos e apostas
                  </li>
                </ul>
              </div>

              <div style={styles.infoCard}>
                <p style={styles.cardLabel}>Foco clínico</p>
                <h3 style={styles.cardTitle}>
                  Acompanhamento com escuta e direção
                </h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>Controle do impulso</li>
                  <li style={styles.listItem}>Dependências comportamentais</li>
                  <li style={styles.listItem}>Organização emocional</li>
                  <li style={styles.listItem}>
                    Clareza desde o primeiro contato
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={styles.rightColumn}>
            <div style={styles.imageFrame}>
              <img
                src={foto}
                alt="Marcelo Correia Ramos"
                style={styles.image}
              />
            </div>

            <div style={styles.bioCard}>
              <p style={styles.bioStrong}>
                Psicólogo clínico com atendimento online para todo o Brasil.
              </p>

              <p style={styles.bioText}>
                Formado em Psicologia desde 2012 pela Faculdade Católica
                Salesiana de Vitória e pós-graduando em Transtorno do Controle
                do Impulso e Dependências Comportamentais pela USP.
              </p>

              <p style={styles.bioText}>
                Atuo com escuta qualificada, acolhimento e clareza no processo
                terapêutico, desde o primeiro contato.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function getStyles(isMobile: boolean): { [key: string]: React.CSSProperties } {
  return {
    page: {
      minHeight: "100vh",
      background:
        "linear-gradient(180deg, #eef2f7 0%, #f8fafc 45%, #eef2f7 100%)",
      padding: isMobile ? "14px 10px 90px" : "32px 18px 80px",
      fontFamily:
        "Inter, Arial, Helvetica, sans-serif",
      boxSizing: "border-box",
    },

    wrapper: {
      maxWidth: "1180px",
      margin: "0 auto",
    },

    heroCard: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      borderRadius: isMobile ? "22px" : "30px",
      padding: isMobile ? "18px 14px" : "34px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.25fr 0.85fr",
      gap: isMobile ? "18px" : "28px",
      boxShadow: "0 20px 50px rgba(15, 23, 42, 0.18)",
      overflow: "hidden",
    },

    leftColumn: {
      minWidth: 0,
      textAlign: isMobile ? "center" : "left",
    },

    rightColumn: {
      minWidth: 0,
    },

    badge: {
      display: "inline-block",
      margin: 0,
      marginBottom: isMobile ? "12px" : "18px",
      padding: "8px 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.10)",
      color: "#e2e8f0",
      fontSize: isMobile ? "12px" : "13px",
      fontWeight: 700,
    },

    title: {
      margin: 0,
      color: "#ffffff",
      fontSize: isMobile ? "34px" : "52px",
      lineHeight: isMobile ? 1.04 : 1.02,
      fontWeight: 800,
      letterSpacing: isMobile ? "-0.8px" : "-1.4px",
    },

    crp: {
      margin: "10px 0 0 0",
      color: "#cbd5e1",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: 600,
    },

    description: {
      margin: isMobile ? "18px auto 20px" : "22px 0 24px",
      color: "#e2e8f0",
      fontSize: isMobile ? "17px" : "20px",
      lineHeight: 1.7,
      maxWidth: isMobile ? "100%" : "680px",
    },

    primaryButton: {
      display: "inline-block",
      background: "#22c55e",
      color: "#ffffff",
      textDecoration: "none",
      padding: isMobile ? "14px 18px" : "15px 24px",
      borderRadius: "14px",
      fontWeight: 700,
      fontSize: isMobile ? "16px" : "17px",
      boxShadow: "0 12px 28px rgba(34, 197, 94, 0.24)",
      marginBottom: isMobile ? "20px" : "24px",
    },

    infoGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "16px",
      width: "100%",
    },

    infoCard: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: isMobile ? "16px" : "20px",
      textAlign: "left",
    },

    cardLabel: {
      margin: "0 0 8px 0",
      color: "#93c5fd",
      fontSize: "12px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.4px",
    },

    cardTitle: {
      margin: "0 0 12px 0",
      color: "#ffffff",
      fontSize: isMobile ? "18px" : "20px",
      lineHeight: 1.35,
      fontWeight: 700,
    },

    list: {
      margin: 0,
      paddingLeft: "18px",
      color: "#e2e8f0",
    },

    listItem: {
      marginBottom: "8px",
      fontSize: isMobile ? "14px" : "15px",
      lineHeight: 1.65,
    },

    imageFrame: {
      borderRadius: "22px",
      overflow: "hidden",
      background: "#d6d9df",
      marginBottom: "16px",
    },

    image: {
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "cover",
      aspectRatio: isMobile ? "4 / 4.3" : "4 / 4.8",
    },

    bioCard: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px",
      padding: isMobile ? "16px" : "20px",
      textAlign: "center",
    },

    bioStrong: {
      margin: "0 0 12px 0",
      color: "#ffffff",
      fontSize: isMobile ? "16px" : "18px",
      lineHeight: 1.6,
      fontWeight: 700,
    },

    bioText: {
      margin: "0 0 12px 0",
      color: "#dbe4ef",
      fontSize: isMobile ? "14px" : "15px",
      lineHeight: 1.75,
    },

    floatingWhatsApp: {
      position: "fixed",
      right: isMobile ? "12px" : "18px",
      bottom: isMobile ? "12px" : "18px",
      zIndex: 1000,
      background: "#25D366",
      color: "#ffffff",
      textDecoration: "none",
      padding: isMobile ? "12px 16px" : "14px 18px",
      borderRadius: "999px",
      fontWeight: 800,
      fontSize: isMobile ? "14px" : "15px",
      boxShadow: "0 14px 28px rgba(37, 211, 102, 0.28)",
    },
  };
}