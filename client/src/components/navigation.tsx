import { useLanguage } from './language-provider';
import logoImage from '@assets/image_1754857732200.png';

export function Navigation() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border/20 transition-colors duration-500 animate-slide-in-left" data-testid="navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 animate-fade-in" data-testid="logo">
              <img 
                src={logoImage} 
                alt="ONE TEAM Logo" 
                className="w-10 h-10 object-contain rounded-full hover:rotate-12 transition-transform duration-300"
              />
              <div className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">ONE TEAM</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 animate-slide-in-right">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              data-testid="language-toggle"
            >
              {t('langToggle')}
            </button>
            
            {/* Social Icons */}
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/share/p/1B1J1akRUH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 hover:scale-125 hover:rotate-12 transition-all duration-300"
                data-testid="facebook-link"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/p/DNL1P63o6_R/?igsh=YW93OGtucGV3MWFi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 hover:scale-125 hover:-rotate-12 transition-all duration-300"
                data-testid="instagram-link"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
