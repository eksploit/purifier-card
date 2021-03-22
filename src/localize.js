// Borrowed from:
// https://github.com/custom-cards/boilerplate-card/blob/master/src/localize/localize.ts

import * as en from './translations/en.json';
import * as uk from './translations/uk.json';
import * as tr from './translations/tr.json';
import * as fr from './translations/fr.json';
import * as nb from './translations/nb.json';
import * as pl from './translations/pl.json';
import * as bg from './translations/bg.json';
import * as zh from './translations/zh.json';
import * as de from './translations/de.json';
import * as ca from './translations/ca.json';
import * as ca from './translations/ru.json';

var languages = {
  en,
  uk,
  fr,
  tr,
  nb,
  pl,
  bg,
  zh,
  de,
  ca,
  ru,
};

const DEFAULT_LANG = 'en';

export default function localize(string, search, replace) {
  const [section, key] = string.split('.');

  let langStored;

  try {
    langStored = JSON.parse(localStorage.getItem('selectedLanguage'));
  } catch (e) {
    langStored = localStorage.getItem('selectedLanguage');
  }

  const lang = (langStored || navigator.language.split('-')[0] || DEFAULT_LANG)
    .replace(/['"]+/g, '')
    .replace('-', '_');

  let tranlated;

  try {
    tranlated = languages[lang][section][key];
  } catch (e) {
    tranlated = languages[DEFAULT_LANG][section][key];
  }

  if (tranlated === undefined) {
    tranlated = languages[DEFAULT_LANG][section][key];
  }

  if (tranlated === undefined) {
    return;
  }

  if (search !== '' && replace !== '') {
    tranlated = tranlated.replace(search, replace);
  }

  return tranlated;
}
