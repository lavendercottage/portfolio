import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const highlights = [
  {
    title: 'Documentation - samples',
    text: 'I shape thoughtful interfaces that balance aesthetics, usability, and performance.',
  },
  {
    title: 'Information Design',
    text: 'From front-end implementation to polished documentation, I enjoy bringing ideas to life.',
  },
  {
    title: 'Docs-as-code',
    text: 'Every project is framed with context, strategy, and a strong visual narrative.',
  },
];

const galleryImages = [
  {
    src: '/img/docu2.jpg',
    alt: 'Workspace with notes and a laptop',
  },
  {
    src: '/img/docu3.jpg',
    alt: 'Abstract portfolio illustration',
  },
  {
    src: '/img/docu4.jpg',
    alt: 'Document planning workspace',
  },
];

export default function Home() {
  const heroFallback = useBaseUrl('/img/hero.svg');
  const heroBackground = useBaseUrl('/img/docu1.jpg');
  const introPath = useBaseUrl('/docs/intro');
  const aboutPath = useBaseUrl('/docs/about');
  const galleryImagesWithBaseUrl = galleryImages.map((image) => ({
    ...image,
    src: useBaseUrl(image.src),
  }));

  return (
    <Layout title="Home" description="Lavender Cottage portfolio built with Docusaurus.">
      <main className="portfolio-home">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Documentation . Information design . Docs-as-code</p>
            <h1>Min portfolio</h1>
            <p>
              This portfolio is showcasing my latest work and demo samples.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to={introPath}>
                Check out the portfolio
              </Link>
              <Link className="button button--secondary" to={aboutPath}>
                About me
              </Link>
            </div>
          </div>
          <div className="hero-side">
            <div
              className="hero-media"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(38, 183, 183, 0.16), rgba(184, 160, 39, 0.1)), url('${heroBackground}')`,
              }}
            />
            <div className="hero-card">
              <h3>Strengths</h3>
              <ul>
                <li>Experience in ITSM, web design and information design. </li>
                <li>HTML, CSS, Wordpress</li>
                <li>Enjoy being in the intersection of users and technology </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="feature-grid">
          {highlights.map((item) => (
            <Link key={item.title} to={introPath} className="feature-card-link">
              <article className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Link>
          ))}
        </section>

        <section className="image-row" aria-label="Portfolio highlights">
          {galleryImagesWithBaseUrl.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.src = heroFallback;
                event.currentTarget.onerror = null;
              }}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}
