import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  // Map of languages with their country codes for flags
  const languages = [
    { code: 'en', name: t('language.english'), country: 'GB' },
    { code: 'fr', name: t('language.french'), country: 'FR' },
    { code: 'es', name: t('language.spanish'), country: 'ES' }
  ];

  // Get current language
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Change language handler
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowDropdown(false);
    // Save to localStorage
    localStorage.setItem('i18nextLng', code);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => setShowDropdown(!showDropdown)} 
        className="language-button"
        aria-label="Select language"
      >
        <ReactCountryFlag 
          countryCode={currentLang.country} 
          svg 
          style={{ width: '1.5em', height: '1.5em' }} 
        />
        <span className="language-name">{currentLang.name}</span>
        <i className="fa fa-angle-down" />
      </button>
      
      {showDropdown && (
        <ul className="language-dropdown">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button 
                onClick={() => changeLanguage(lang.code)}
                className={lang.code === i18n.language ? 'active' : ''}
              >
                <ReactCountryFlag 
                  countryCode={lang.country} 
                  svg 
                  style={{ width: '1.2em', height: '1.2em', marginRight: '8px' }} 
                />
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector; 