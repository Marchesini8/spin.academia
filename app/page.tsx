const whatsappUrl =
  "https://wa.me/5517997736414?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20aula%20experimental%20na%20Spin%20Academia.";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Spin+Academia+Rua+Ribeirao+Preto+350+Catanduva+SP";

const instagramUrl = "https://www.instagram.com/spin_academia/";

const activities = [
  ["Musculação", "Força, saúde e evolução no seu ritmo.", "01", "🏋️"],
  ["Pilates", "Mobilidade, postura e consciência corporal.", "02", "🧘"],
  ["Funcional", "Treinos dinâmicos para ganhar condicionamento.", "03", "⚡"],
  ["Dança & ritmos", "Ballet, sapateado e aulas cheias de energia.", "04", "💃"],
  ["Infantil", "Movimento, coordenação e diversão para os pequenos.", "05", "🧗"],
  ["Skate", "Equilíbrio, confiança e novas habilidades.", "06", "🛹"],
];

const faqs = [
  [
    "Preciso já estar em forma para começar?",
    "Não. A equipe orienta cada aluno de acordo com o seu momento, experiência e objetivo. O importante é dar o primeiro passo.",
  ],
  [
    "A academia atende iniciantes?",
    "Sim. A Spin oferece acompanhamento próximo e modalidades para diferentes idades e níveis de condicionamento.",
  ],
  [
    "Como agendo uma aula experimental?",
    "Toque em qualquer botão de WhatsApp desta página. A equipe confirma a modalidade e o melhor horário para você.",
  ],
  [
    "Onde fica a Spin Academia?",
    "Na Rua Ribeirão Preto, 350, Vila Rodrigues, em Catanduva/SP.",
  ],
];

export default function Home() {
  return (
    <main>
      <div className="top-strip">
        <span>●</span> Aulas para diferentes idades e objetivos
      </div>

      <header className="site-header shell">
        <a className="brand" href="#inicio" aria-label="Spin Academia — início">
          <span className="spin-logo"><strong>SPIN</strong><small>ACADEMIA</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#modalidades">Modalidades</a>
          <a href="#depoimentos">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <img src="/whatsapp.svg" alt="" /> Agendar aula <span>↗</span>
        </a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span>★ 4,6 no Google</span> · Academia em Catanduva</div>
          <h1>
            Seu movimento.
            <br />
            <em>Do seu jeito.</em>
          </h1>
          <p className="hero-lead">
            Mais que uma academia: um espaço completo para ganhar força,
            cuidar do corpo e descobrir atividades que você realmente gosta.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <img className="button-icon" src="/whatsapp.svg" alt="" /> Quero uma aula experimental <span>↗</span>
            </a>
            <a className="text-link" href="#modalidades">Conhecer modalidades <span>↓</span></a>
          </div>
          <div className="trust-row" aria-label="Diferenciais">
            <div><b>✓</b><span>Acompanhamento<br />próximo</span></div>
            <div><b>✓</b><span>Ambiente<br />acolhedor</span></div>
            <div><b>✓</b><span>Para todas<br />as idades</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="/spin-turma.jpg" alt="Alunas e professoras da Spin Academia" />
          </div>
          <div className="floating-review">
            <span className="review-stars">★★★★★</span>
            <strong>“Ambiente maravilhoso!”</strong>
            <small>— avaliação no Google</small>
          </div>
          <div className="roundel" aria-hidden="true">
            <span>VENHA • SE MOVA • VIVA •</span><b>↗</b>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Modalidades em destaque">
        <div> MUSCULAÇÃO <span>✦</span> PILATES <span>✦</span> FUNCIONAL <span>✦</span> BALLET <span>✦</span> RITMOS <span>✦</span> SKATE <span>✦</span> MOVIMENTO PARA TODOS </div>
      </section>

      <section className="section shell" id="modalidades">
        <div className="section-heading">
          <div>
            <span className="kicker">TUDO EM UM SÓ LUGAR</span>
            <h2>Encontre o movimento<br />que combina com você.</h2>
          </div>
          <p>Escolha seu objetivo, experimente e conte com uma equipe atenciosa em cada etapa.</p>
        </div>
        <div className="activity-grid">
          {activities.map(([title, text, number, emoji]) => (
            <article className="activity-card" key={title}>
              <span className="activity-number">{number}</span>
              <div className="activity-icon" aria-hidden="true">{emoji}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Perguntar sobre ${title}`}>Saiba mais <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-grid shell">
          <div className="experience-images">
            <img className="pilates-image" src="/spin-pilates.jpg" alt="Aula de pilates na Spin Academia" />
            <img className="kids-image" src="/spin-infantil.jpg" alt="Atividade infantil de escalada na Spin Academia" />
          </div>
          <div className="experience-copy">
            <span className="kicker light">A EXPERIÊNCIA SPIN</span>
            <h2>Atenção de verdade.<br /><em>Evolução que aparece.</em></h2>
            <p>
              Aqui você não é só mais um. A proposta é acolher, orientar e
              transformar o treino em uma parte boa da sua rotina.
            </p>
            <ul>
              <li><span>01</span> Professores atentos e preparados</li>
              <li><span>02</span> Estrutura para diferentes modalidades</li>
              <li><span>03</span> Comunidade que motiva e acolhe</li>
            </ul>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><img className="button-icon dark-icon" src="/whatsapp.svg" alt="" /> Conversar com a equipe <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="section proof-section shell" id="depoimentos">
        <div className="proof-score">
          <span>AVALIAÇÕES REAIS</span>
          <strong>4,6</strong>
          <div>★★★★★</div>
          <small>23 avaliações no Google</small>
        </div>
        <div className="proof-content">
          <h2>Quem conhece,<br />recomenda.</h2>
          <div className="testimonial-grid">
            <blockquote>
              <div>★★★★★</div>
              <p>“Academia mais completa de Catanduva e loja super montada para todos os públicos.”</p>
              <footer>Paula Jorge MK <span>Google</span></footer>
            </blockquote>
            <blockquote>
              <div>★★★★★</div>
              <p>“Muita competência e ambiente maravilhoso!”</p>
              <footer>Natália Conde <span>Google</span></footer>
            </blockquote>
            <blockquote>
              <div>★★★★★</div>
              <p>“Professora muito atenciosa.”</p>
              <footer>Renato Santos <span>Google</span></footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-card shell">
          <div>
            <span className="kicker">A SPIN ESTÁ DE CASA NOVA</span>
            <h2>Venha conhecer<br />nosso espaço.</h2>
            <p>Rua Ribeirão Preto, 350<br />Vila Rodrigues · Catanduva/SP</p>
            <div className="visit-actions">
              <a className="button button-primary" href={mapsUrl} target="_blank" rel="noreferrer">Como chegar <span>↗</span></a>
              <a className="text-link" href="tel:+5517997736414">(17) 99773-6414</a>
            </div>
          </div>
          <img src="/spin-ballet.webp" alt="Aula de ballet na Spin Academia" />
        </div>
      </section>

      <section className="section faq-section shell">
        <div>
          <span className="kicker">DÚVIDAS FREQUENTES</span>
          <h2>Antes de começar.</h2>
          <p>Ainda ficou com alguma dúvida? Chame a equipe no WhatsApp.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="shell">
          <span className="kicker light">SEU PRIMEIRO PASSO COMEÇA AQUI</span>
          <h2>Vamos encontrar a aula<br />certa para você?</h2>
          <p>Fale com a equipe e agende sua experiência na Spin Academia.</p>
          <a className="button button-lime" href={whatsappUrl} target="_blank" rel="noreferrer"><img className="button-icon dark-icon" src="/whatsapp.svg" alt="" /> Agendar pelo WhatsApp <span>↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <a className="brand footer-brand" href="#inicio">
            <span className="spin-logo"><strong>SPIN</strong><small>ACADEMIA</small></span>
          </a>
          <div><b>Visite</b><p>Rua Ribeirão Preto, 350<br />Vila Rodrigues · Catanduva/SP</p></div>
          <div><b>Fale com a gente</b><p><a href="tel:+5517997736414">(17) 99773-6414</a></p><a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer"><img src="/instagram.svg" alt="" /> @spin_academia</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Spin Academia</span><span>Movimento transforma.</span></div>
      </footer>

      <a className="floating-instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Spin Academia">
        <img src="/instagram.svg" alt="" />
      </a>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar aula experimental pelo WhatsApp">
        <img src="/whatsapp.svg" alt="" /> <span>Agendar aula experimental</span> <b>↗</b>
      </a>
    </main>
  );
}
