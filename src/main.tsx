import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  Car,
  ChevronDown,
  DoorOpen,
  KeyRound,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrainFront,
  TreePine,
} from 'lucide-react';
import './styles.css';

const asset = (file: string) => `/assets/residencial/${file}`;

const mapUrl = 'https://maps.app.goo.gl/e5KRjsAgb1qcZo3A8';
const fallbackWhatsAppNumber = '5511947047830';
const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || fallbackWhatsAppNumber;
const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const whatsappUrl = createWhatsAppUrl(
  'Olá, tenho interesse no Residencial das Luzes - Franco.',
);
const address =
  'Estr. da Biquinha, 35 - Chácara São Luiz, Franco da Rocha - SP, 07865-080';

const heroImage = asset('visao-frontal-condominio.jpeg');
const heroVideo = asset('hero-franco-da-rocha.mp4');
const constructionVideo = asset('obra-em-construcao.mp4');
const builderLogo = asset('logo-construtora.png');

const videoOptions = [
  {
    id: 'tour',
    label: 'Tour virtual',
    eyebrow: 'Perspectiva final',
    src: heroVideo,
  },
  {
    id: 'obra',
    label: 'Obra em andamento',
    eyebrow: 'Construção real',
    src: constructionVideo,
  },
] as const;

const highlights = [
  {
    icon: Landmark,
    kicker: 'Minha Casa Minha Vida',
    title: 'Use seu FGTS para destravar a compra',
    text: 'Um caminho mais simples para sair do aluguel e começar a pagar pelo que é seu.',
  },
  {
    icon: TrainFront,
    kicker: 'Mobilidade',
    title: 'A 3 minutos da Estação Baltazar Fidelis',
    text: 'Localização prática para quem precisa circular pela região todos os dias.',
  },
  {
    icon: ShieldCheck,
    kicker: 'Condomínio fechado',
    title: 'Mais privacidade para a rotina da família',
    text: 'Casas em conjunto fechado, com sensação de vizinhança e controle de acesso.',
  },
  {
    icon: KeyRound,
    kicker: 'Entrada facilitada',
    title: 'Entrada parcelada em até 36x',
    text: 'Planeje a entrada sem apertar tudo de uma vez e antecipe o sonho da casa própria.',
  },
  {
    icon: TreePine,
    kicker: 'Área externa',
    title: 'Garden ou terraço com grill',
    text: 'Escolha uma opção com espaço para respirar, receber e aproveitar melhor a casa.',
  },
  {
    icon: Car,
    kicker: 'Mais praticidade',
    title: 'Vaga disponível',
    text: 'Tenha a comodidade de chegar em casa com um lugar reservado para o carro.',
  },
  {
    icon: BedDouble,
    kicker: 'Plantas inteligentes',
    title: '2 dormitórios de 45 a 62 m²',
    text: 'Ambientes bem distribuídos para rotina, descanso e planos de crescimento.',
  },
  {
    icon: DoorOpen,
    kicker: 'Acesso automatizado',
    title: 'Portões com abertura automatizada',
    text: 'Mais agilidade no acesso ao condomínio e uma rotina de chegada mais confortável.',
  },
];

const plans = [
  {
    title: 'Planta térrea',
    description: 'Casa térrea com layout objetivo para quem quer praticidade no dia a dia.',
    image: asset('planta-terrea.jpeg'),
    tag: '45 a 62 m²',
  },
  {
    title: 'Planta superior com terraço',
    description: 'Opção com terraço e grill para receber bem, respirar melhor e usar a área externa.',
    image: asset('planta-superior-terraco.jpeg'),
    tag: 'Terraço + grill',
  },
  {
    title: 'Implantação do condomínio',
    description: 'Visão geral para entender a distribuição das casas dentro do condomínio fechado.',
    image: asset('planta-nao-tencia-do-condominio.jpeg'),
    tag: 'Condomínio fechado',
  },
];

const gallery = [
  {
    title: 'Fachada do condomínio',
    image: asset('visao-frontal-condominio.jpeg'),
  },
  {
    title: 'Perspectiva frontal',
    image: asset('visao-frontal-da-percitiva-mais-a-direita.jpeg'),
  },
  {
    title: 'Vão central entre as casas',
    image: asset('visao-do-vao-central-entre-as-casas.jpeg'),
  },
  {
    title: 'Sala integrada à lavanderia',
    image: asset('sala-lavanderia.jpeg'),
  },
  {
    title: 'Quarto de casal',
    image: asset('quarto-casal.jpeg'),
  },
  {
    title: 'Dormitório',
    image: asset('quarto.jpeg'),
  },
];

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function RootLayout() {
  return <Outlet />;
}

function LandingPage() {
  return (
    <main className="page-shell">
      <Hero />
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar atendimento pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 4.42c-6.32 0-11.45 5.04-11.45 11.25 0 2.12.62 4.18 1.78 5.96L4.5 27.58l6.18-1.82a11.6 11.6 0 0 0 5.36 1.31c6.31 0 11.45-5.04 11.45-11.25S22.35 4.42 16.04 4.42Zm0 20.75c-1.74 0-3.43-.47-4.9-1.36l-.35-.21-3.66 1.08 1.1-3.52-.23-.36a9.3 9.3 0 0 1-1.5-5.13c0-5.16 4.28-9.36 9.54-9.36s9.54 4.2 9.54 9.36-4.28 9.5-9.54 9.5Zm5.23-7.01c-.29-.14-1.7-.82-1.96-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.63.07-.29-.14-1.21-.44-2.31-1.4-.85-.75-1.43-1.68-1.6-1.96-.17-.28-.02-.43.13-.57.13-.13.29-.33.43-.49.14-.16.19-.28.29-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.5-.88-2.06-.23-.54-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.17 3.02c.14.19 2.02 3.03 4.9 4.24.68.29 1.21.46 1.63.59.68.21 1.3.18 1.79.11.55-.08 1.7-.68 1.94-1.33.24-.66.24-1.22.17-1.33-.07-.12-.26-.19-.55-.33Z" />
        </svg>
      </a>
      <Highlights />
      <PlantsBridge />
      <Plans />
      <Gallery />
      <VideoTour />
      <Location />
      <Contact />
    </main>
  );
}

function DownCue({ href, label = 'Ir para a próxima seção' }: { href: string; label?: string }) {
  return (
    <a className="section-cue" href={href} aria-label={label}>
      <ChevronDown size={24} />
    </a>
  );
}

function Hero() {
  return (
    <section className="hero" style={{ '--hero-image': `url(${heroImage})` } as React.CSSProperties}>
      <div className="hero-vignette" aria-hidden="true" />

      <nav className="nav-bar" aria-label="Navegação principal">
        <a className="builder-logo" href="#top" aria-label="Construtora do empreendimento">
          <img src={builderLogo} alt="Logo da construtora" />
        </a>
        <div className="nav-links">
          <a href="#plantas">Plantas</a>
          <a href="#galeria">Fotos</a>
          <a href="#localizacao">Localização</a>
        </div>
      </nav>

      <div className="hero-copy" id="top">
        <div className="hero-text-cluster">
          <p className="eyebrow reveal">Condomínio fechado em Franco da Rocha</p>
          <h1 className="reveal delay-1">Residencial das Luzes - Franco</h1>
          <p className="hero-lead reveal delay-2">Pronto para morar com entrada facilitada.</p>
        </div>
        <div className="hero-bottom-row reveal delay-3">
          <div className="hero-actions">
            <a className="primary-action" href="#contato">
              Quero minha simulação <ArrowUpRight size={18} />
            </a>
            <a className="ghost-action" href="#localizacao">
              Ver localização <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>

      <DownCue href="#destaques" label="Ir para os destaques" />
    </section>
  );
}

function Highlights() {
  return (
    <section className="section highlight-section" id="destaques">
      <div className="section-heading">
        <p className="eyebrow">Oportunidade certa e diferenciais</p>
        <h2>Diferenciais.</h2>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article className="highlight-card" key={item.title}>
              <Icon className="highlight-icon" size={30} />
              <p>{item.kicker}</p>
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PlantsBridge() {
  return (
    <section className="plants-bridge" aria-label="Transição para plantas">
      <span>Próximo passo</span>
      <a href="#plantas">
        Escolha o seu jeito de morar <ChevronDown size={20} />
      </a>
    </section>
  );
}

function Plans() {
  return (
    <section className="section plans-section" id="plantas">
      <div className="section-heading">
        <p className="eyebrow">Escolha o seu jeito de morar</p>
        <h2>Plantas para diferentes fases da vida.</h2>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <article className="plan-card" key={plan.title}>
            <figure>
              <img src={plan.image} alt={plan.title} />
            </figure>
            <div className="plan-text">
              <span>{plan.tag}</span>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
          </article>
        ))}
      </div>
      <DownCue href="#galeria" />
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="galeria" aria-label="Galeria do empreendimento">
      <div className="gallery-intro">
        <p className="eyebrow">Veja antes de visitar</p>
        <h2>Perspectivas que mostram a rotina tomando forma.</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <figure className={index === 0 ? 'gallery-item gallery-item-large' : 'gallery-item'} key={item.title}>
            <img src={item.image} alt={item.title} loading={index < 2 ? 'eager' : 'lazy'} />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <DownCue href="#video" />
    </section>
  );
}

function VideoTour() {
  const [activeVideoId, setActiveVideoId] = React.useState<(typeof videoOptions)[number]['id']>('tour');
  const activeVideo = videoOptions.find((option) => option.id === activeVideoId) ?? videoOptions[0];

  return (
    <section className="video-tour-section" id="video">
      <div className="video-tour-copy">
        <p className="eyebrow">Agora veja em movimento</p>
        <h2>Depois das fotos, sinta o ritmo do lugar.</h2>
        <p>
          As imagens mostram os ambientes. O vídeo ajuda a imaginar o caminho de chegada,
          a escala das casas e o que muda quando o sonho começa a parecer possível.
        </p>
        <div className="flow-cues" aria-label="Fluxo de decisão">
          <span>1. Fotos</span>
          <span>2. Vídeo</span>
          <span>3. Mapa</span>
          <span>4. Simulação</span>
        </div>
        <a className="video-map-link" href="#localizacao">
          Ver localização depois do vídeo <MapPin size={18} />
        </a>
      </div>
      <div className="video-media-column">
        <div className="video-frame">
          <video key={activeVideo.id} controls playsInline preload="metadata" poster={heroImage}>
            <source src={activeVideo.src} type="video/mp4" />
          </video>
        </div>
        <div className="video-switcher" aria-label="Escolha o tipo de vídeo">
          {videoOptions.map((option) => (
            <button
              className={option.id === activeVideoId ? 'is-active' : undefined}
              key={option.id}
              type="button"
              onClick={() => setActiveVideoId(option.id)}
              aria-pressed={option.id === activeVideoId}
            >
              <span>{option.eyebrow}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <DownCue href="#localizacao" />
    </section>
  );
}

function Location() {
  return (
    <section className="location-section" id="localizacao">
      <div className="location-copy">
        <p className="eyebrow">Localização</p>
        <h2>Perto da estação, perto do que move a sua rotina.</h2>
        <p>
          More em uma região prática de Franco da Rocha, com acesso rápido à Estação
          Baltazar Fidelis e endereço fácil de encontrar para visita.
        </p>
        <a className="address-link" href={mapUrl} target="_blank" rel="noreferrer">
          <MapPin size={20} />
          {address}
          <ArrowUpRight size={18} />
        </a>
        <div className="location-metrics">
          <span>
            <TrainFront size={20} />
            3 minutos da estação
          </span>
          <span>
            <Building2 size={20} />
            Chácara São Luiz
          </span>
        </div>
      </div>
      <div className="map-frame">
        <iframe
          title="Mapa da Estrada da Biquinha, 35"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Estr.%20da%20Biquinha%2C%2035%20-%20Ch%C3%A1cara%20S%C3%A3o%20Luiz%2C%20Franco%20da%20Rocha%20-%20SP%2C%2007865-080&z=15&output=embed"
        />
      </div>
      <DownCue href="#contato" />
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-copy">
        <Sparkles size={34} />
        <p className="eyebrow">Chegou a sua vez</p>
        <h2>Saia do aluguel com uma entrada que cabe no planejamento.</h2>
        <p>
          Peça a simulação, veja como usar o FGTS e compare as opções com garden ou
          terraço antes de escolher a sua casa.
        </p>
      </div>
      <form
        className="lead-form"
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const data = new FormData(form);
          const name = String(data.get('nome') ?? '').trim();
          const phone = String(data.get('whatsapp') ?? '').trim();
          const interestSelect = form.elements.namedItem('interesse') as HTMLSelectElement | null;
          const interest =
            interestSelect?.selectedOptions[0]?.text ??
            String(data.get('interesse') ?? '').trim();
          const message = [
            'Olá, tenho interesse no Residencial das Luzes - Franco.',
            `Nome: ${name}`,
            `WhatsApp: ${phone}`,
            `Interesse: ${interest}`,
          ].join('\n');

          form.classList.add('is-sent');
          window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
        }}
      >
        <label>
          Nome
          <input name="nome" placeholder="Seu nome" required />
        </label>
        <label>
          WhatsApp
          <input name="whatsapp" placeholder="(11) 99999-9999" required />
        </label>
        <label>
          Interesse
          <select name="interesse" defaultValue="fgts">
            <option value="fgts">Quero usar FGTS</option>
            <option value="garden">Quero opção garden</option>
            <option value="terraco">Quero terraço com grill</option>
            <option value="visita">Quero agendar visita</option>
          </select>
        </label>
        <button type="submit">
          Solicitar atendimento <ArrowUpRight size={18} />
        </button>
        <p className="form-success" role="status">
          Pronto. Abrindo o WhatsApp com seus dados para seguir com a simulação.
        </p>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
