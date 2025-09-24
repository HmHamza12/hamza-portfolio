const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">© 2024 Hamza Mouttaki. Tous droits réservés.</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#accueil" className="hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#apropos" className="hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
