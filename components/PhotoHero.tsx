export default function PhotoHero({ className = "", label, title, description }: { className?: string; label: string; title: React.ReactNode; description: string }) {
  return <section className={`photo-hero ${className}`}><div className="shell photo-hero-content">
    <p className="eyebrow">{label}</p><h1>{title}</h1><p>{description}</p>
  </div></section>;
}
