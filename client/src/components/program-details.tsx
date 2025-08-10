import { useLanguage } from './language-provider';

export function ProgramDetails() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-muted transition-colors duration-500" data-testid="program-details">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12" data-testid="details-title">
            {t('detailsTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Info */}
            <div className="glass-card rounded-2xl p-8" data-testid="program-info-card">
              <h3 className="text-2xl font-bold text-contrast mb-6" data-testid="info-title">
                {t('infoTitle')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="start-date-info">
                  <i className="fas fa-calendar text-secondary text-xl"></i>
                  <div>
                    <span className="font-semibold text-contrast" data-testid="start-label">
                      {t('startLabel')}
                    </span>
                    <span className="text-muted-foreground ml-2" data-testid="start-date">
                      {t('startDate')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3" data-testid="location-info">
                  <i className="fas fa-map-marker-alt text-accent text-xl"></i>
                  <div>
                    <span className="font-semibold text-contrast" data-testid="location-label">
                      {t('locationLabel')}
                    </span>
                    <span className="text-muted-foreground ml-2" data-testid="location">
                      {t('location')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3" data-testid="capacity-info">
                  <i className="fas fa-users text-primary text-xl"></i>
                  <div>
                    <span className="font-semibold text-contrast" data-testid="capacity-label">
                      {t('capacityLabel')}
                    </span>
                    <span className="text-muted-foreground ml-2" data-testid="capacity">
                      {t('capacity')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="glass-card rounded-2xl p-8 text-center" data-testid="cta-card">
              <h3 className="text-2xl font-bold gradient-text mb-4" data-testid="invest-title">
                {t('investTitle')}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="invest-description">
                {t('investDesc')}
              </p>
              <a 
                href="https://forms.gle/hZqWiy8GRXdG1jMy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 animate-glow"
                data-testid="register-button"
              >
                {t('registerNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
