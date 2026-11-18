import { Icon } from "./Icon";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href}>{children} <Icon name="arrow" size={17} /></a>;
}

export function Heading({ label, title, children }: { label?: string; title: React.ReactNode; children?: React.ReactNode }) {
  return <div className="section-heading">{label && <p className="eyebrow">{label}</p>}<h2>{title}</h2>{children}</div>;
}

export function PageIntro({ label, title, description, children }: {
  label: string; title: string; description: string; children?: React.ReactNode;
}) {
  return <section className="page-intro"><div className="shell">
    <p className="eyebrow">{label}</p><h1>{title}</h1><p>{description}</p>{children}
  </div></section>;
}
