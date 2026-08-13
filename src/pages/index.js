import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const highlights = [
  {
    title: 'Documentation - samples',
    text: ' Guides, knowledge articles, system docs etc.',
  },
  {
    title: 'Information Design',
    text: 'Structuring content and designing effective navigation systems.',
  },
  {
    title: 'Docs-as-code',
    text: 'Getting started with docs-as-code using Docusaurus, GitHub and Markdown.',
  },
];

export default function Home() {
  const heroFallback = useBaseUrl('/img/hero.svg');
  const heroBackground = useBaseUrl('/img/docu1.jpg');
  const introPath = useBaseUrl('/docs/intro');
  const aboutPath = useBaseUrl('/docs/about');


  return (
    <Layout title="Home" description="Lavender Cottage portfolio built with Docusaurus.">
      <main className="portfolio-home">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Documentation . Information design . Docs-as-code</p>
            <h1>A journey in technical writing</h1>
            <p>
              This page is showcasing a docs-as-code workflow with Docusaurus, GitHub and Markdown.
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
              <h4>"It is my ambition to say in ten sentences what others say in a whole book." F. Nietzsche"</h4>
    
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

        <div className="social-links">


  <a
    href="https://linkedin.com/in/annikaadams"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img
  src="img/linkedin.png"
  alt="LinkedIn"
  width="40"
  height="40"
/>
  </a>

  <a
    href="https://github.com/lavendercottage"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <img
  src="img/github.png"
  alt="GitHub"
  width="40"
  height="40"
/>
  </a>

  <a
    href="mailto:annika.m.adams@gmail.com"
    aria-label="Email"
  >
    <img
  src="img/mail.png"
  alt="Email"
  width="40"
  height="40"
/>
  </a>
</div>
      </main>
    </Layout>
  );

}

