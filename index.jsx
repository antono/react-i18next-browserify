import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next/src';
import { translate } from 'react-i18next/src';


i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18n.t('key'); // hw = 'hello world'
});

const App = function app(props) {
  const { t } = props;
  return (
    <h1> {t('translation.key')} </h1>
  );
};

ReactDOM.render(
  <I18nextProvider i18n={ i18n }><App /></I18nextProvider>,
  document.getElementById('app')
);
