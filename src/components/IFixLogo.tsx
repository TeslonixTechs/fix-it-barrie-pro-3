const IFixLogo = ({ light = false }: { light?: boolean }) => (
  <a href="/" className="flex flex-col leading-none">
    <span className={`font-heading text-2xl tracking-wider ${light ? "text-primary-foreground" : "text-foreground"}`}>
      i<span className="text-primary">FIX</span>
    </span>
    <span className={`text-[0.6rem] tracking-[0.25em] uppercase ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
      Auto Services
    </span>
  </a>
);

export default IFixLogo;
