import { StarField } from './star-field';
import { useLanguage } from './language-provider';
import logoImage from '@assets/image_1754857732200.png';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen hero-bg relative overflow-hidden" data-testid="hero-section">
      {/* Animated Star Field */}
      <StarField />
      
      {/* Retro Grid Overlay */}
      <div className="absolute bottom-0 w-full h-32 retro-grid opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="text-center">
          {/* Logo Area */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full glass-card mb-6 animate-scale-in hover:animate-bounce-gentle transition-all duration-300" data-testid="logo-circle">
              <img 
                src={logoImage} 
                alt="ONE TEAM Logo" 
                className="w-24 h-24 object-contain rounded-full animate-pulse-slow"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up" data-testid="hero-title">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}} data-testid="hero-subtitle">
              {t('heroSubtitle')}
            </p>
          </div>
          
          {/* CTA Button */}
          <a 
            href="https://forms.gle/hZqWiy8GRXdG1jMy8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-full hover:scale-110 transform transition-all duration-300 animate-glow animate-slide-up shadow-2xl hover:shadow-secondary/25"
            style={{animationDelay: '0.4s'}}
            data-testid="cta-button"
          >
            {t('ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
}
