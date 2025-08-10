import { useLanguage } from './language-provider';

export function ProgramBenefits() {
  const { t } = useLanguage();

  const benefits = [
    { key: 'benefit1', emoji: '1' },
    { key: 'benefit2', emoji: '2' },
    { key: 'benefit3', emoji: '3' },
    { key: 'benefit4', emoji: '4' },
    { key: 'benefit5', emoji: '5' },
    { key: 'benefit6', emoji: '6' },
  ];

  return (
    <section className="py-16 bg-background transition-colors duration-500" data-testid="program-benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12" data-testid="benefits-title">
          {t('benefitsTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.key}
              className="flex items-start space-x-4 p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300"
              data-testid={`benefit-card-${benefit.emoji}`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold">
                {benefit.emoji}
              </div>
              <div>
                <h3 className="font-semibold text-contrast mb-2" data-testid={`${benefit.key}-title`}>
                  {t(`${benefit.key}Title` as any)}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`${benefit.key}-description`}>
                  {t(`${benefit.key}Desc` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
