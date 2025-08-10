import { useLanguage } from './language-provider';

export function ProgramOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-muted transition-colors duration-500" data-testid="program-overview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="overview-title">
            {t('overviewTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="overview-description">
            {t('overviewDesc')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sessions Card */}
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="sessions-card">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-contrast mb-4" data-testid="sessions-title">
              {t('sessionsTitle')}
            </h3>
            <p className="text-muted-foreground" data-testid="sessions-description">
              {t('sessionsDesc')}
            </p>
          </div>
          
          {/* Skills Card */}
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="skills-card">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-contrast mb-4" data-testid="skills-title">
              {t('skillsTitle')}
            </h3>
            <p className="text-muted-foreground" data-testid="skills-description">
              {t('skillsDesc')}
            </p>
          </div>
          
          {/* Practical Card */}
          <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="practical-card">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-contrast mb-4" data-testid="practical-title">
              {t('practicalTitle')}
            </h3>
            <p className="text-muted-foreground" data-testid="practical-description">
              {t('practicalDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
