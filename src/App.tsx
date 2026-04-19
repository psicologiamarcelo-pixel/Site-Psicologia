export default function App() {
  const telefone = '5554991819009';
  const foto = '/Marcelo.jpeg';

  const mensagem = encodeURIComponent(
    'Olá, Marcelo. Vim para saber sobre Atendimento Psicológico Online e gostaria de receber informações sobre consultas. Pode me passar informações sobre horários e valores?'
  );

  const whatsappLink = `https://wa.me/${telefone}?text=${mensagem}`;
  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth <= 900 : false;

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

      <main style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <p style={styles.badge}>Atendimento Psicológico Online</p>

            <h1 style={styles.title}>Marcelo Correia Ramos</h1>

            <p style={styles.crp}>Psicólogo | CRP-07/27623</p>

            <p style={styles.subtitle}>
              Atendimento psicológico online para todo o Brasil, com foco em
              acolhimento, clareza no primeiro contato e organização no processo
              terapêutico.
            </p>

            <div style={styles.trustRow}>
              <div style={styles.trustItem}>Atendimento online</div>
              <div style={styles.trustItem}>Escuta qualificada</div>
              <div style={styles.trustItem}>Contato inicial pelo WhatsApp</div>
            </div>

            <div style={styles.heroButtons}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={styles.primaryBtn}
              >
                Falar comigo no WhatsApp
              </a>

              <a href="#como-funciona" style={styles.secondaryBtn}>
                Como funciona
              </a>
            </div>
          </div>

          <div style={styles.profileCard}>
            <div style={styles.profileImageWrap}>
              <img
                src={foto}
                alt="Marcelo Correia Ramos"
                style={styles.profileImage}
              />
            </div>

            <div style={styles.profileInfo}>
              <p style={styles.profileLabel}>Sobre o atendimento</p>
              <h3 style={styles.profileName}>
                Psicólogo clínico com atendimento online para todo o Brasil
              </h3>
              <p style={styles.profileDescription}>
                Formado em Psicologia desde 2012 pela Faculdade Católica
                Salesiana de Vitória e pós-graduando em Transtorno do Controle
                do Impulso e Dependências Comportamentais pela USP.
              </p>
              <p style={styles.profileDescription}>
                Atuo com escuta qualificada, acolhimento e clareza no processo
                terapêutico, desde o primeiro contato.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.highlightBar}>
          <div style={styles.highlightItem}>Atendimento para todo o Brasil</div>
          <div style={styles.highlightItem}>Contato simples e direto</div>
          <div style={styles.highlightItem}>
            Consulta online com praticidade
          </div>
        </section>

        <section id="como-funciona" style={styles.section}>
          <h2 style={styles.sectionTitle}>Como funciona</h2>
          <p style={styles.sectionIntro}>
            Um processo simples para você começar com mais segurança e clareza.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardNumber}>1</div>
              <h3 style={styles.cardTitle}>Primeiro contato</h3>
              <p style={styles.cardText}>
                Você entra em contato pelo WhatsApp e recebe as orientações
                iniciais sobre o atendimento.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardNumber}>2</div>
              <h3 style={styles.cardTitle}>Informações da consulta</h3>
              <p style={styles.cardText}>
                Você recebe informações sobre horários, valores e funcionamento
                do atendimento online.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardNumber}>3</div>
              <h3 style={styles.cardTitle}>Confirmação</h3>
              <p style={styles.cardText}>
                Depois disso, seguimos com a definição do melhor horário para o
                seu atendimento.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.infoGrid}>
          <div style={styles.infoPanelDark}>
            <p style={styles.panelMini}>Indicado para</p>
            <h2 style={styles.panelTitleLight}>
              Demandas emocionais e comportamentais
            </h2>
            <ul style={styles.featureListDark}>
              <li style={styles.featureItemDark}>
                Ansiedade e sobrecarga emocional
              </li>
              <li style={styles.featureItemDark}>
                Impulsividade e hábitos repetitivos
              </li>
              <li style={styles.featureItemDark}>
                Dificuldade em controlar comportamentos
              </li>
              <li style={styles.featureItemDark}>
                Jogos, apostas e outros padrões difíceis de interromper
              </li>
            </ul>
          </div>

          <div style={styles.infoPanelLight}>
            <p style={styles.panelMiniBlue}>Foco clínico</p>
            <h2 style={styles.panelTitleDark}>
              Acompanhamento com escuta e direção
            </h2>
            <ul style={styles.featureListLight}>
              <li style={styles.featureItemLight}>Controle do impulso</li>
              <li style={styles.featureItemLight}>
                Dependências comportamentais
              </li>
              <li style={styles.featureItemLight}>
                Organização emocional e tomada de decisão
              </li>
              <li style={styles.featureItemLight}>
                Clareza no processo desde o primeiro contato
              </li>
            </ul>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <p style={styles.ctaMini}>Pronto para começar?</p>
          <h2 style={styles.ctaTitle}>
            Tire suas dúvidas e veja como iniciar seu atendimento
          </h2>
          <p style={styles.ctaText}>
            Toque no botão abaixo para abrir o WhatsApp com a mensagem já
            pronta.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={styles.finalBtn}
          >
            Falar no WhatsApp agora
          </a>
        </section>
      </main>
    </div>
  );
}

function getStyles(isMobile: boolean): { [key: string]: React.CSSProperties } {
  return {
    page: {
      minHeight: '100vh',
      background:
        'radial-gradient(circle at top, #dbeafe 0%, #eff6ff 22%, #f8fafc 58%, #eef2f7 100%)',
      padding: isMobile ? '18px 12px 90px' : '32px 16px 80px',
      fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      boxSizing: 'border-box',
    },

    container: {
      maxWidth: '1120px',
      margin: '0 auto',
    },

    floatingWhatsApp: {
      position: 'fixed',
      right: isMobile ? '14px' : '18px',
      bottom: isMobile ? '14px' : '18px',
      zIndex: 1000,
      background: '#25D366',
      color: '#ffffff',
      textDecoration: 'none',
      padding: isMobile ? '13px 16px' : '14px 18px',
      borderRadius: '999px',
      fontWeight: 800,
      fontSize: isMobile ? '15px' : '16px',
      boxShadow: '0 14px 28px rgba(37, 211, 102, 0.32)',
    },

    hero: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      alignItems: 'center',
      background:
        'linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)',
      borderRadius: isMobile ? '24px' : '32px',
      padding: isMobile ? '22px 18px' : '34px',
      boxShadow: '0 22px 60px rgba(15, 23, 42, 0.2)',
      marginBottom: '22px',
    },

    heroText: {
      maxWidth: '620px',
      textAlign: isMobile ? 'center' : 'left',
    },

    badge: {
      display: 'inline-block',
      margin: 0,
      marginBottom: isMobile ? '14px' : '18px',
      padding: '8px 14px',
      borderRadius: '999px',
      background: 'rgba(255,255,255,0.12)',
      color: '#e2e8f0',
      fontSize: isMobile ? '12px' : '13px',
      fontWeight: 700,
      letterSpacing: '0.3px',
    },

    title: {
      margin: 0,
      color: '#ffffff',
      fontSize: isMobile ? '38px' : '48px',
      lineHeight: isMobile ? 1.02 : 1.04,
      fontWeight: 800,
    },

    crp: {
      margin: '12px 0 0 0',
      color: '#cbd5e1',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: 600,
    },

    subtitle: {
      marginTop: isMobile ? '18px' : '22px',
      marginBottom: isMobile ? '20px' : '24px',
      color: '#e2e8f0',
      fontSize: isMobile ? '16px' : '18px',
      lineHeight: 1.75,
      maxWidth: '640px',
      marginInline: isMobile ? 'auto' : undefined,
    },

    trustRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: isMobile ? '20px' : '26px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },

    trustItem: {
      background: 'rgba(255,255,255,0.08)',
      color: '#e2e8f0',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '999px',
      padding: '8px 12px',
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: 600,
    },

    heroButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: isMobile ? 'center' : 'flex-start',
    },

    primaryBtn: {
      display: 'inline-block',
      background: '#25D366',
      color: '#ffffff',
      textDecoration: 'none',
      padding: isMobile ? '14px 20px' : '15px 24px',
      borderRadius: '14px',
      fontWeight: 700,
      fontSize: isMobile ? '15px' : '16px',
      boxShadow: '0 10px 25px rgba(37, 211, 102, 0.28)',
    },

    secondaryBtn: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.08)',
      color: '#ffffff',
      textDecoration: 'none',
      padding: isMobile ? '14px 20px' : '15px 24px',
      borderRadius: '14px',
      fontWeight: 700,
      fontSize: isMobile ? '15px' : '16px',
      border: '1px solid rgba(255,255,255,0.18)',
    },

    profileCard: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '28px',
      padding: isMobile ? '16px' : '18px',
      backdropFilter: 'blur(8px)',
    },

    profileImageWrap: {
      borderRadius: '22px',
      overflow: 'hidden',
      marginBottom: '16px',
      background: '#cbd5e1',
      minHeight: isMobile ? '260px' : '340px',
    },

    profileImage: {
      width: '100%',
      height: '100%',
      minHeight: isMobile ? '260px' : '340px',
      objectFit: 'cover',
      display: 'block',
    },

    profileInfo: {
      color: '#ffffff',
      textAlign: isMobile ? 'center' : 'left',
    },

    profileLabel: {
      margin: 0,
      color: '#93c5fd',
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '0.4px',
      textTransform: 'uppercase',
    },

    profileName: {
      margin: '8px 0 10px 0',
      fontSize: isMobile ? '22px' : '24px',
      fontWeight: 800,
      lineHeight: 1.3,
    },

    profileDescription: {
      margin: '0 0 12px 0',
      color: '#cbd5e1',
      fontSize: isMobile ? '15px' : '15px',
      lineHeight: 1.75,
    },

    highlightBar: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '14px',
      marginBottom: '22px',
    },

    highlightItem: {
      background: 'rgba(255,255,255,0.9)',
      border: '1px solid #dbeafe',
      borderRadius: '18px',
      padding: '16px 18px',
      color: '#0f172a',
      fontWeight: 700,
      fontSize: isMobile ? '15px' : '16px',
      textAlign: 'center',
      boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
    },

    section: {
      background: '#ffffff',
      borderRadius: isMobile ? '22px' : '26px',
      padding: isMobile ? '22px 18px' : '30px',
      marginBottom: '22px',
      boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
    },

    sectionTitle: {
      margin: '0 0 10px 0',
      color: '#0f172a',
      fontSize: isMobile ? '26px' : '30px',
      fontWeight: 800,
      textAlign: isMobile ? 'center' : 'left',
    },

    sectionIntro: {
      margin: '0 0 22px 0',
      color: '#64748b',
      fontSize: isMobile ? '15px' : '16px',
      lineHeight: 1.7,
      textAlign: isMobile ? 'center' : 'left',
    },

    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '16px',
    },

    card: {
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '22px',
    },

    cardNumber: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: '#0f172a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      marginBottom: '14px',
    },

    cardTitle: {
      margin: '0 0 8px 0',
      color: '#111827',
      fontSize: '19px',
      fontWeight: 700,
    },

    cardText: {
      margin: 0,
      color: '#475569',
      fontSize: '15px',
      lineHeight: 1.75,
    },

    infoGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '22px',
      marginBottom: '22px',
    },

    infoPanelDark: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '26px',
      padding: isMobile ? '22px 18px' : '28px',
      boxShadow: '0 14px 38px rgba(15, 23, 42, 0.14)',
    },

    infoPanelLight: {
      background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
      borderRadius: '26px',
      padding: isMobile ? '22px 18px' : '28px',
      border: '1px solid #dbeafe',
      boxShadow: '0 14px 38px rgba(15, 23, 42, 0.06)',
    },

    panelMini: {
      margin: 0,
      color: '#93c5fd',
      fontWeight: 700,
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },

    panelMiniBlue: {
      margin: 0,
      color: '#2563eb',
      fontWeight: 700,
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },

    panelTitleLight: {
      margin: '10px 0 14px 0',
      color: '#ffffff',
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 800,
      lineHeight: 1.25,
    },

    panelTitleDark: {
      margin: '10px 0 14px 0',
      color: '#0f172a',
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 800,
      lineHeight: 1.25,
    },

    featureListDark: {
      margin: 0,
      paddingLeft: '20px',
      color: '#cbd5e1',
    },

    featureListLight: {
      margin: 0,
      paddingLeft: '20px',
      color: '#475569',
    },

    featureItemDark: {
      marginBottom: '10px',
      fontSize: isMobile ? '15px' : '16px',
      lineHeight: 1.75,
    },

    featureItemLight: {
      marginBottom: '10px',
      fontSize: isMobile ? '15px' : '16px',
      lineHeight: 1.75,
    },

    ctaSection: {
      background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
      borderRadius: isMobile ? '24px' : '30px',
      padding: isMobile ? '26px 18px' : '34px 28px',
      textAlign: 'center',
      boxShadow: '0 14px 38px rgba(15, 23, 42, 0.06)',
    },

    ctaMini: {
      margin: 0,
      color: '#2563eb',
      fontWeight: 800,
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },

    ctaTitle: {
      margin: '10px 0 12px 0',
      color: '#0f172a',
      fontSize: isMobile ? '28px' : '34px',
      fontWeight: 800,
      lineHeight: 1.2,
    },

    ctaText: {
      margin: '0 0 20px 0',
      color: '#475569',
      fontSize: isMobile ? '15px' : '16px',
      lineHeight: 1.7,
      maxWidth: '700px',
      marginInline: 'auto',
    },

    finalBtn: {
      display: 'inline-block',
      background: '#111827',
      color: '#ffffff',
      textDecoration: 'none',
      padding: isMobile ? '14px 22px' : '16px 26px',
      borderRadius: '14px',
      fontWeight: 700,
      fontSize: isMobile ? '15px' : '16px',
      boxShadow: '0 10px 25px rgba(17, 24, 39, 0.16)',
    },
  };
}
