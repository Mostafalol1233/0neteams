import { useLanguage } from './language-provider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500 relative overflow-hidden" data-testid="footer">
      {/* Retro Grid Overlay */}
      <div className="absolute top-0 w-full h-20 retro-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-3xl font-bold gradient-text mb-4" data-testid="footer-logo">ONE TEAM</h3>
          <p className="text-gray-400 mb-6" data-testid="footer-description">
            {t('footerDesc')}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/share/p/1B1J1akRUH/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              data-testid="footer-facebook-link"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/p/DNL1P63o6_R/?igsh=YW93OGtucGV3MWFi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-colors"
              data-testid="footer-instagram-link"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400" data-testid="copyright">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
