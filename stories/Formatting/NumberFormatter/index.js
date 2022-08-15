import React, { useMemo } from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Select, Input, utils, useFieldState, Debug } from '../../../src';

const localeOptions = [
  { value: 'af-NA', label: 'Afrikaans (Namibia)' },
  { value: 'af-ZA', label: 'Afrikaans (South Africa)' },
  { value: 'af', label: 'Afrikaans' },
  { value: 'ak-GH', label: 'Akan (Ghana)' },
  { value: 'ak', label: 'Akan' },
  { value: 'sq-AL', label: 'Albanian (Albania)' },
  { value: 'sq', label: 'Albanian' },
  { value: 'am-ET', label: 'Amharic (Ethiopia)' },
  { value: 'am', label: 'Amharic' },
  { value: 'ar-DZ', label: 'Arabic (Algeria)' },
  { value: 'ar-BH', label: 'Arabic (Bahrain)' },
  { value: 'ar-EG', label: 'Arabic (Egypt)' },
  { value: 'ar-IQ', label: 'Arabic (Iraq)' },
  { value: 'ar-JO', label: 'Arabic (Jordan)' },
  { value: 'ar-KW', label: 'Arabic (Kuwait)' },
  { value: 'ar-LB', label: 'Arabic (Lebanon)' },
  { value: 'ar-LY', label: 'Arabic (Libya)' },
  { value: 'ar-MA', label: 'Arabic (Morocco)' },
  { value: 'ar-OM', label: 'Arabic (Oman)' },
  { value: 'ar-QA', label: 'Arabic (Qatar)' },
  { value: 'ar-SA', label: 'Arabic (Saudi Arabia)' },
  { value: 'ar-SD', label: 'Arabic (Sudan)' },
  { value: 'ar-SY', label: 'Arabic (Syria)' },
  { value: 'ar-TN', label: 'Arabic (Tunisia)' },
  { value: 'ar-AE', label: 'Arabic (United Arab Emirates)' },
  { value: 'ar-YE', label: 'Arabic (Yemen)' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hy-AM', label: 'Armenian (Armenia)' },
  { value: 'hy', label: 'Armenian' },
  { value: 'as-IN', label: 'Assamese (India)' },
  { value: 'as', label: 'Assamese' },
  { value: 'asa-TZ', label: 'Asu (Tanzania)' },
  { value: 'asa', label: 'Asu' },
  { value: 'az-Cyrl', label: 'Azerbaijani (Cyrillic)' },
  { value: 'az-Cyrl-AZ', label: 'Azerbaijani (Cyrillic, Azerbaijan)' },
  { value: 'az-Latn', label: 'Azerbaijani (Latin)' },
  { value: 'az-Latn-AZ', label: 'Azerbaijani (Latin, Azerbaijan)' },
  { value: 'az', label: 'Azerbaijani' },
  { value: 'bm-ML', label: 'Bambara (Mali)' },
  { value: 'bm', label: 'Bambara' },
  { value: 'eu-ES', label: 'Basque (Spain)' },
  { value: 'eu', label: 'Basque' },
  { value: 'be-BY', label: 'Belarusian (Belarus)' },
  { value: 'be', label: 'Belarusian' },
  { value: 'bem-ZM', label: 'Bemba (Zambia)' },
  { value: 'bem', label: 'Bemba' },
  { value: 'bez-TZ', label: 'Bena (Tanzania)' },
  { value: 'bez', label: 'Bena' },
  { value: 'bn-BD', label: 'Bengali (Bangladesh)' },
  { value: 'bn-IN', label: 'Bengali (India)' },
  { value: 'bn', label: 'Bengali' },
  { value: 'bs-BA', label: 'Bosnian (Bosnia and Herzegovina)' },
  { value: 'bs', label: 'Bosnian' },
  { value: 'bg-BG', label: 'Bulgarian (Bulgaria)' },
  { value: 'bg', label: 'Bulgarian' },
  { value: 'my-MM', label: 'Burmese (Myanmar [Burma])' },
  { value: 'my', label: 'Burmese' },
  {
    value: 'yue-Hant-HK',
    label: 'Cantonese (Traditional, Hong Kong SAR China)'
  },
  { value: 'ca-ES', label: 'Catalan (Spain)' },
  { value: 'ca', label: 'Catalan' },
  { value: 'tzm-Latn', label: 'Central Morocco Tamazight (Latin)' },
  { value: 'tzm-Latn-MA', label: 'Central Morocco Tamazight (Latin, Morocco)' },
  { value: 'tzm', label: 'Central Morocco Tamazight' },
  { value: 'chr-US', label: 'Cherokee (United States)' },
  { value: 'chr', label: 'Cherokee' },
  { value: 'cgg-UG', label: 'Chiga (Uganda)' },
  { value: 'cgg', label: 'Chiga' },
  { value: 'zh-Hans', label: 'Chinese (Simplified Han)' },
  { value: 'zh-Hans-CN', label: 'Chinese (Simplified Han, China)' },
  {
    value: 'zh-Hans-HK',
    label: 'Chinese (Simplified Han, Hong Kong SAR China)'
  },
  { value: 'zh-Hans-MO', label: 'Chinese (Simplified Han, Macau SAR China)' },
  { value: 'zh-Hans-SG', label: 'Chinese (Simplified Han, Singapore)' },
  { value: 'zh-Hant', label: 'Chinese (Traditional Han)' },
  {
    value: 'zh-Hant-HK',
    label: 'Chinese (Traditional Han, Hong Kong SAR China)'
  },
  { value: 'zh-Hant-MO', label: 'Chinese (Traditional Han, Macau SAR China)' },
  { value: 'zh-Hant-TW', label: 'Chinese (Traditional Han, Taiwan)' },
  { value: 'zh', label: 'Chinese' },
  { value: 'kw-GB', label: 'Cornish (United Kingdom)' },
  { value: 'kw', label: 'Cornish' },
  { value: 'hr-HR', label: 'Croatian (Croatia)' },
  { value: 'hr', label: 'Croatian' },
  { value: 'cs-CZ', label: 'Czech (Czech Republic)' },
  { value: 'cs', label: 'Czech' },
  { value: 'da-DK', label: 'Danish (Denmark)' },
  { value: 'da', label: 'Danish' },
  { value: 'nl-BE', label: 'Dutch (Belgium)' },
  { value: 'nl-NL', label: 'Dutch (Netherlands)' },
  { value: 'nl', label: 'Dutch' },
  { value: 'ebu-KE', label: 'Embu (Kenya)' },
  { value: 'ebu', label: 'Embu' },
  { value: 'en-AS', label: 'English (American Samoa)' },
  { value: 'en-AU', label: 'English (Australia)' },
  { value: 'en-BE', label: 'English (Belgium)' },
  { value: 'en-BZ', label: 'English (Belize)' },
  { value: 'en-BW', label: 'English (Botswana)' },
  { value: 'en-CA', label: 'English (Canada)' },
  { value: 'en-GU', label: 'English (Guam)' },
  { value: 'en-HK', label: 'English (Hong Kong SAR China)' },
  { value: 'en-IN', label: 'English (India)' },
  { value: 'en-IE', label: 'English (Ireland)' },
  { value: 'en-IL', label: 'English (Israel)' },
  { value: 'en-JM', label: 'English (Jamaica)' },
  { value: 'en-MT', label: 'English (Malta)' },
  { value: 'en-MH', label: 'English (Marshall Islands)' },
  { value: 'en-MU', label: 'English (Mauritius)' },
  { value: 'en-NA', label: 'English (Namibia)' },
  { value: 'en-NZ', label: 'English (New Zealand)' },
  { value: 'en-MP', label: 'English (Northern Mariana Islands)' },
  { value: 'en-PK', label: 'English (Pakistan)' },
  { value: 'en-PH', label: 'English (Philippines)' },
  { value: 'en-SG', label: 'English (Singapore)' },
  { value: 'en-ZA', label: 'English (South Africa)' },
  { value: 'en-TT', label: 'English (Trinidad and Tobago)' },
  { value: 'en-UM', label: 'English (U.S. Minor Outlying Islands)' },
  { value: 'en-VI', label: 'English (U.S. Virgin Islands)' },
  { value: 'en-GB', label: 'English (United Kingdom)' },
  { value: 'en-US', label: 'English (United States)' },
  { value: 'en-ZW', label: 'English (Zimbabwe)' },
  { value: 'en', label: 'English' },
  { value: 'eo', label: 'Esperanto' },
  { value: 'et-EE', label: 'Estonian (Estonia)' },
  { value: 'et', label: 'Estonian' },
  { value: 'ee-GH', label: 'Ewe (Ghana)' },
  { value: 'ee-TG', label: 'Ewe (Togo)' },
  { value: 'ee', label: 'Ewe' },
  { value: 'fo-FO', label: 'Faroese (Faroe Islands)' },
  { value: 'fo', label: 'Faroese' },
  { value: 'fil-PH', label: 'Filipino (Philippines)' },
  { value: 'fil', label: 'Filipino' },
  { value: 'fi-FI', label: 'Finnish (Finland)' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr-BE', label: 'French (Belgium)' },
  { value: 'fr-BJ', label: 'French (Benin)' },
  { value: 'fr-BF', label: 'French (Burkina Faso)' },
  { value: 'fr-BI', label: 'French (Burundi)' },
  { value: 'fr-CM', label: 'French (Cameroon)' },
  { value: 'fr-CA', label: 'French (Canada)' },
  { value: 'fr-CF', label: 'French (Central African Republic)' },
  { value: 'fr-TD', label: 'French (Chad)' },
  { value: 'fr-KM', label: 'French (Comoros)' },
  { value: 'fr-CG', label: 'French (Congo - Brazzaville)' },
  { value: 'fr-CD', label: 'French (Congo - Kinshasa)' },
  { value: 'fr-CI', label: 'French (Côte d’Ivoire)' },
  { value: 'fr-DJ', label: 'French (Djibouti)' },
  { value: 'fr-GQ', label: 'French (Equatorial Guinea)' },
  { value: 'fr-FR', label: 'French (France)' },
  { value: 'fr-GA', label: 'French (Gabon)' },
  { value: 'fr-GP', label: 'French (Guadeloupe)' },
  { value: 'fr-GN', label: 'French (Guinea)' },
  { value: 'fr-LU', label: 'French (Luxembourg)' },
  { value: 'fr-MG', label: 'French (Madagascar)' },
  { value: 'fr-ML', label: 'French (Mali)' },
  { value: 'fr-MQ', label: 'French (Martinique)' },
  { value: 'fr-MC', label: 'French (Monaco)' },
  { value: 'fr-NE', label: 'French (Niger)' },
  { value: 'fr-RW', label: 'French (Rwanda)' },
  { value: 'fr-RE', label: 'French (Réunion)' },
  { value: 'fr-BL', label: 'French (Saint Barthélemy)' },
  { value: 'fr-MF', label: 'French (Saint Martin)' },
  { value: 'fr-SN', label: 'French (Senegal)' },
  { value: 'fr-CH', label: 'French (Switzerland)' },
  { value: 'fr-TG', label: 'French (Togo)' },
  { value: 'fr', label: 'French' },
  { value: 'ff-SN', label: 'Fulah (Senegal)' },
  { value: 'ff', label: 'Fulah' },
  { value: 'gl-ES', label: 'Galician (Spain)' },
  { value: 'gl', label: 'Galician' },
  { value: 'lg-UG', label: 'Ganda (Uganda)' },
  { value: 'lg', label: 'Ganda' },
  { value: 'ka-GE', label: 'Georgian (Georgia)' },
  { value: 'ka', label: 'Georgian' },
  { value: 'de-AT', label: 'German (Austria)' },
  { value: 'de-BE', label: 'German (Belgium)' },
  { value: 'de-DE', label: 'German (Germany)' },
  { value: 'de-LI', label: 'German (Liechtenstein)' },
  { value: 'de-LU', label: 'German (Luxembourg)' },
  { value: 'de-CH', label: 'German (Switzerland)' },
  { value: 'de', label: 'German' },
  { value: 'el-CY', label: 'Greek (Cyprus)' },
  { value: 'el-GR', label: 'Greek (Greece)' },
  { value: 'el', label: 'Greek' },
  { value: 'gu-IN', label: 'Gujarati (India)' },
  { value: 'gu', label: 'Gujarati' },
  { value: 'guz-KE', label: 'Gusii (Kenya)' },
  { value: 'guz', label: 'Gusii' },
  { value: 'ha-Latn', label: 'Hausa (Latin)' },
  { value: 'ha-Latn-GH', label: 'Hausa (Latin, Ghana)' },
  { value: 'ha-Latn-NE', label: 'Hausa (Latin, Niger)' },
  { value: 'ha-Latn-NG', label: 'Hausa (Latin, Nigeria)' },
  { value: 'ha', label: 'Hausa' },
  { value: 'haw-US', label: 'Hawaiian (United States)' },
  { value: 'haw', label: 'Hawaiian' },
  { value: 'he-IL', label: 'Hebrew (Israel)' },
  { value: 'he', label: 'Hebrew' },
  { value: 'hi-IN', label: 'Hindi (India)' },
  { value: 'hi', label: 'Hindi' },
  { value: 'hu-HU', label: 'Hungarian (Hungary)' },
  { value: 'hu', label: 'Hungarian' },
  { value: 'is-IS', label: 'Icelandic (Iceland)' },
  { value: 'is', label: 'Icelandic' },
  { value: 'ig-NG', label: 'Igbo (Nigeria)' },
  { value: 'ig', label: 'Igbo' },
  { value: 'id-ID', label: 'Indonesian (Indonesia)' },
  { value: 'id', label: 'Indonesian' },
  { value: 'ga-IE', label: 'Irish (Ireland)' },
  { value: 'ga', label: 'Irish' },
  { value: 'it-IT', label: 'Italian (Italy)' },
  { value: 'it-CH', label: 'Italian (Switzerland)' },
  { value: 'it', label: 'Italian' },
  { value: 'ja-JP', label: 'Japanese (Japan)' },
  { value: 'ja', label: 'Japanese' },
  { value: 'kea-CV', label: 'Kabuverdianu (Cape Verde)' },
  { value: 'kea', label: 'Kabuverdianu' },
  { value: 'kab-DZ', label: 'Kabyle (Algeria)' },
  { value: 'kab', label: 'Kabyle' },
  { value: 'kl-GL', label: 'Kalaallisut (Greenland)' },
  { value: 'kl', label: 'Kalaallisut' },
  { value: 'kln-KE', label: 'Kalenjin (Kenya)' },
  { value: 'kln', label: 'Kalenjin' },
  { value: 'kam-KE', label: 'Kamba (Kenya)' },
  { value: 'kam', label: 'Kamba' },
  { value: 'kn-IN', label: 'Kannada (India)' },
  { value: 'kn', label: 'Kannada' },
  { value: 'kk-Cyrl', label: 'Kazakh (Cyrillic)' },
  { value: 'kk-Cyrl-KZ', label: 'Kazakh (Cyrillic, Kazakhstan)' },
  { value: 'kk', label: 'Kazakh' },
  { value: 'km-KH', label: 'Khmer (Cambodia)' },
  { value: 'km', label: 'Khmer' },
  { value: 'ki-KE', label: 'Kikuyu (Kenya)' },
  { value: 'ki', label: 'Kikuyu' },
  { value: 'rw-RW', label: 'Kinyarwanda (Rwanda)' },
  { value: 'rw', label: 'Kinyarwanda' },
  { value: 'kok-IN', label: 'Konkani (India)' },
  { value: 'kok', label: 'Konkani' },
  { value: 'ko-KR', label: 'Korean (South Korea)' },
  { value: 'ko', label: 'Korean' },
  { value: 'khq-ML', label: 'Koyra Chiini (Mali)' },
  { value: 'khq', label: 'Koyra Chiini' },
  { value: 'ses-ML', label: 'Koyraboro Senni (Mali)' },
  { value: 'ses', label: 'Koyraboro Senni' },
  { value: 'lag-TZ', label: 'Langi (Tanzania)' },
  { value: 'lag', label: 'Langi' },
  { value: 'lv-LV', label: 'Latvian (Latvia)' },
  { value: 'lv', label: 'Latvian' },
  { value: 'lt-LT', label: 'Lithuanian (Lithuania)' },
  { value: 'lt', label: 'Lithuanian' },
  { value: 'luo-KE', label: 'Luo (Kenya)' },
  { value: 'luo', label: 'Luo' },
  { value: 'luy-KE', label: 'Luyia (Kenya)' },
  { value: 'luy', label: 'Luyia' },
  { value: 'mk-MK', label: 'Macedonian (Macedonia)' },
  { value: 'mk', label: 'Macedonian' },
  { value: 'jmc-TZ', label: 'Machame (Tanzania)' },
  { value: 'jmc', label: 'Machame' },
  { value: 'kde-TZ', label: 'Makonde (Tanzania)' },
  { value: 'kde', label: 'Makonde' },
  { value: 'mg-MG', label: 'Malagasy (Madagascar)' },
  { value: 'mg', label: 'Malagasy' },
  { value: 'ms-BN', label: 'Malay (Brunei)' },
  { value: 'ms-MY', label: 'Malay (Malaysia)' },
  { value: 'ms', label: 'Malay' },
  { value: 'ml-IN', label: 'Malayalam (India)' },
  { value: 'ml', label: 'Malayalam' },
  { value: 'mt-MT', label: 'Maltese (Malta)' },
  { value: 'mt', label: 'Maltese' },
  { value: 'gv-GB', label: 'Manx (United Kingdom)' },
  { value: 'gv', label: 'Manx' },
  { value: 'mr-IN', label: 'Marathi (India)' },
  { value: 'mr', label: 'Marathi' },
  { value: 'mas-KE', label: 'Masai (Kenya)' },
  { value: 'mas-TZ', label: 'Masai (Tanzania)' },
  { value: 'mas', label: 'Masai' },
  { value: 'mer-KE', label: 'Meru (Kenya)' },
  { value: 'mer', label: 'Meru' },
  { value: 'mfe-MU', label: 'Morisyen (Mauritius)' },
  { value: 'mfe', label: 'Morisyen' },
  { value: 'naq-NA', label: 'Nama (Namibia)' },
  { value: 'naq', label: 'Nama' },
  { value: 'ne-IN', label: 'Nepali (India)' },
  { value: 'ne-NP', label: 'Nepali (Nepal)' },
  { value: 'ne', label: 'Nepali' },
  { value: 'nd-ZW', label: 'North Ndebele (Zimbabwe)' },
  { value: 'nd', label: 'North Ndebele' },
  { value: 'nb-NO', label: 'Norwegian Bokmål (Norway)' },
  { value: 'nb', label: 'Norwegian Bokmål' },
  { value: 'nn-NO', label: 'Norwegian Nynorsk (Norway)' },
  { value: 'nn', label: 'Norwegian Nynorsk' },
  { value: 'nyn-UG', label: 'Nyankole (Uganda)' },
  { value: 'nyn', label: 'Nyankole' },
  { value: 'or-IN', label: 'Oriya (India)' },
  { value: 'or', label: 'Oriya' },
  { value: 'om-ET', label: 'Oromo (Ethiopia)' },
  { value: 'om-KE', label: 'Oromo (Kenya)' },
  { value: 'om', label: 'Oromo' },
  { value: 'ps-AF', label: 'Pashto (Afghanistan)' },
  { value: 'ps', label: 'Pashto' },
  { value: 'fa-AF', label: 'Persian (Afghanistan)' },
  { value: 'fa-IR', label: 'Persian (Iran)' },
  { value: 'fa', label: 'Persian' },
  { value: 'pl-PL', label: 'Polish (Poland)' },
  { value: 'pl', label: 'Polish' },
  { value: 'pt-BR', label: 'Portuguese (Brazil)' },
  { value: 'pt-GW', label: 'Portuguese (Guinea-Bissau)' },
  { value: 'pt-MZ', label: 'Portuguese (Mozambique)' },
  { value: 'pt-PT', label: 'Portuguese (Portugal)' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'pa-Arab', label: 'Punjabi (Arabic)' },
  { value: 'pa-Arab-PK', label: 'Punjabi (Arabic, Pakistan)' },
  { value: 'pa-Guru', label: 'Punjabi (Gurmukhi)' },
  { value: 'pa-Guru-IN', label: 'Punjabi (Gurmukhi, India)' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'ro-MD', label: 'Romanian (Moldova)' },
  { value: 'ro-RO', label: 'Romanian (Romania)' },
  { value: 'ro', label: 'Romanian' },
  { value: 'rm-CH', label: 'Romansh (Switzerland)' },
  { value: 'rm', label: 'Romansh' },
  { value: 'rof-TZ', label: 'Rombo (Tanzania)' },
  { value: 'rof', label: 'Rombo' },
  { value: 'ru-MD', label: 'Russian (Moldova)' },
  { value: 'ru-RU', label: 'Russian (Russia)' },
  { value: 'ru-UA', label: 'Russian (Ukraine)' },
  { value: 'ru', label: 'Russian' },
  { value: 'rwk-TZ', label: 'Rwa (Tanzania)' },
  { value: 'rwk', label: 'Rwa' },
  { value: 'saq-KE', label: 'Samburu (Kenya)' },
  { value: 'saq', label: 'Samburu' },
  { value: 'sg-CF', label: 'Sango (Central African Republic)' },
  { value: 'sg', label: 'Sango' },
  { value: 'seh-MZ', label: 'Sena (Mozambique)' },
  { value: 'seh', label: 'Sena' },
  { value: 'sr-Cyrl', label: 'Serbian (Cyrillic)' },
  { value: 'sr-Cyrl-BA', label: 'Serbian (Cyrillic, Bosnia and Herzegovina)' },
  { value: 'sr-Cyrl-ME', label: 'Serbian (Cyrillic, Montenegro)' },
  { value: 'sr-Cyrl-RS', label: 'Serbian (Cyrillic, Serbia)' },
  { value: 'sr-Latn', label: 'Serbian (Latin)' },
  { value: 'sr-Latn-BA', label: 'Serbian (Latin, Bosnia and Herzegovina)' },
  { value: 'sr-Latn-ME', label: 'Serbian (Latin, Montenegro)' },
  { value: 'sr-Latn-RS', label: 'Serbian (Latin, Serbia)' },
  { value: 'sr', label: 'Serbian' },
  { value: 'sn-ZW', label: 'Shona (Zimbabwe)' },
  { value: 'sn', label: 'Shona' },
  { value: 'ii-CN', label: 'Sichuan Yi (China)' },
  { value: 'ii', label: 'Sichuan Yi' },
  { value: 'si-LK', label: 'Sinhala (Sri Lanka)' },
  { value: 'si', label: 'Sinhala' },
  { value: 'sk-SK', label: 'Slovak (Slovakia)' },
  { value: 'sk', label: 'Slovak' },
  { value: 'sl-SI', label: 'Slovenian (Slovenia)' },
  { value: 'sl', label: 'Slovenian' },
  { value: 'xog-UG', label: 'Soga (Uganda)' },
  { value: 'xog', label: 'Soga' },
  { value: 'so-DJ', label: 'Somali (Djibouti)' },
  { value: 'so-ET', label: 'Somali (Ethiopia)' },
  { value: 'so-KE', label: 'Somali (Kenya)' },
  { value: 'so-SO', label: 'Somali (Somalia)' },
  { value: 'so', label: 'Somali' },
  { value: 'es-AR', label: 'Spanish (Argentina)' },
  { value: 'es-BO', label: 'Spanish (Bolivia)' },
  { value: 'es-CL', label: 'Spanish (Chile)' },
  { value: 'es-CO', label: 'Spanish (Colombia)' },
  { value: 'es-CR', label: 'Spanish (Costa Rica)' },
  { value: 'es-DO', label: 'Spanish (Dominican Republic)' },
  { value: 'es-EC', label: 'Spanish (Ecuador)' },
  { value: 'es-SV', label: 'Spanish (El Salvador)' },
  { value: 'es-GQ', label: 'Spanish (Equatorial Guinea)' },
  { value: 'es-GT', label: 'Spanish (Guatemala)' },
  { value: 'es-HN', label: 'Spanish (Honduras)' },
  { value: 'es-419', label: 'Spanish (Latin America)' },
  { value: 'es-MX', label: 'Spanish (Mexico)' },
  { value: 'es-NI', label: 'Spanish (Nicaragua)' },
  { value: 'es-PA', label: 'Spanish (Panama)' },
  { value: 'es-PY', label: 'Spanish (Paraguay)' },
  { value: 'es-PE', label: 'Spanish (Peru)' },
  { value: 'es-PR', label: 'Spanish (Puerto Rico)' },
  { value: 'es-ES', label: 'Spanish (Spain)' },
  { value: 'es-US', label: 'Spanish (United States)' },
  { value: 'es-UY', label: 'Spanish (Uruguay)' },
  { value: 'es-VE', label: 'Spanish (Venezuela)' },
  { value: 'es', label: 'Spanish' },
  { value: 'sw-KE', label: 'Swahili (Kenya)' },
  { value: 'sw-TZ', label: 'Swahili (Tanzania)' },
  { value: 'sw', label: 'Swahili' },
  { value: 'sv-FI', label: 'Swedish (Finland)' },
  { value: 'sv-SE', label: 'Swedish (Sweden)' },
  { value: 'sv', label: 'Swedish' },
  { value: 'gsw-CH', label: 'Swiss German (Switzerland)' },
  { value: 'gsw', label: 'Swiss German' },
  { value: 'shi-Latn', label: 'Tachelhit (Latin)' },
  { value: 'shi-Latn-MA', label: 'Tachelhit (Latin, Morocco)' },
  { value: 'shi-Tfng', label: 'Tachelhit (Tifinagh)' },
  { value: 'shi-Tfng-MA', label: 'Tachelhit (Tifinagh, Morocco)' },
  { value: 'shi', label: 'Tachelhit' },
  { value: 'dav-KE', label: 'Taita (Kenya)' },
  { value: 'dav', label: 'Taita' },
  { value: 'ta-IN', label: 'Tamil (India)' },
  { value: 'ta-LK', label: 'Tamil (Sri Lanka)' },
  { value: 'ta', label: 'Tamil' },
  { value: 'te-IN', label: 'Telugu (India)' },
  { value: 'te', label: 'Telugu' },
  { value: 'teo-KE', label: 'Teso (Kenya)' },
  { value: 'teo-UG', label: 'Teso (Uganda)' },
  { value: 'teo', label: 'Teso' },
  { value: 'th-TH', label: 'Thai (Thailand)' },
  { value: 'th', label: 'Thai' },
  { value: 'bo-CN', label: 'Tibetan (China)' },
  { value: 'bo-IN', label: 'Tibetan (India)' },
  { value: 'bo', label: 'Tibetan' },
  { value: 'ti-ER', label: 'Tigrinya (Eritrea)' },
  { value: 'ti-ET', label: 'Tigrinya (Ethiopia)' },
  { value: 'ti', label: 'Tigrinya' },
  { value: 'to-TO', label: 'Tonga (Tonga)' },
  { value: 'to', label: 'Tonga' },
  { value: 'tr-TR', label: 'Turkish (Turkey)' },
  { value: 'tr', label: 'Turkish' },
  { value: 'uk-UA', label: 'Ukrainian (Ukraine)' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'ur-IN', label: 'Urdu (India)' },
  { value: 'ur-PK', label: 'Urdu (Pakistan)' },
  { value: 'ur', label: 'Urdu' },
  { value: 'uz-Arab', label: 'Uzbek (Arabic)' },
  { value: 'uz-Arab-AF', label: 'Uzbek (Arabic, Afghanistan)' },
  { value: 'uz-Cyrl', label: 'Uzbek (Cyrillic)' },
  { value: 'uz-Cyrl-UZ', label: 'Uzbek (Cyrillic, Uzbekistan)' },
  { value: 'uz-Latn', label: 'Uzbek (Latin)' },
  { value: 'uz-Latn-UZ', label: 'Uzbek (Latin, Uzbekistan)' },
  { value: 'uz', label: 'Uzbek' },
  { value: 'vi-VN', label: 'Vietnamese (Vietnam)' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'vun-TZ', label: 'Vunjo (Tanzania)' },
  { value: 'vun', label: 'Vunjo' },
  { value: 'cy-GB', label: 'Welsh (United Kingdom)' },
  { value: 'cy', label: 'Welsh' },
  { value: 'yo-NG', label: 'Yoruba (Nigeria)' },
  { value: 'yo', label: 'Yoruba' },
  { value: 'zu-ZA', label: 'Zulu (South Africa)' },
  { value: 'zu', label: 'Zulu' }
];

const currencyOptions = [
  {
    value: 'EUR',
    label: 'EUR'
  },
  {
    value: 'AED',
    label: 'AED'
  },
  {
    value: 'AFN',
    label: 'AFN'
  },
  {
    value: 'XCD',
    label: 'XCD'
  },
  {
    value: 'ALL',
    label: 'ALL'
  },
  {
    value: 'AMD',
    label: 'AMD'
  },
  {
    value: 'AOA',
    label: 'AOA'
  },
  {
    value: 'USD',
    label: 'USD'
  },
  {
    value: 'ARS',
    label: 'ARS'
  },
  {
    value: 'AUD',
    label: 'AUD'
  },
  {
    value: 'AWG',
    label: 'AWG'
  },
  {
    value: 'AZN',
    label: 'AZN'
  },
  {
    value: 'BAM',
    label: 'BAM'
  },
  {
    value: 'BBD',
    label: 'BBD'
  },
  {
    value: 'BDT',
    label: 'BDT'
  },
  {
    value: 'XOF',
    label: 'XOF'
  },
  {
    value: 'BGN',
    label: 'BGN'
  },
  {
    value: 'BHD',
    label: 'BHD'
  },
  {
    value: 'BIF',
    label: 'BIF'
  },
  {
    value: 'BMD',
    label: 'BMD'
  },
  {
    value: 'BND',
    label: 'BND'
  },
  {
    value: 'BOB',
    label: 'BOB'
  },
  {
    value: 'BRL',
    label: 'BRL'
  },
  {
    value: 'BSD',
    label: 'BSD'
  },
  {
    value: 'BTN',
    label: 'BTN'
  },
  {
    value: 'NOK',
    label: 'NOK'
  },
  {
    value: 'BWP',
    label: 'BWP'
  },
  {
    value: 'BYN',
    label: 'BYN'
  },
  {
    value: 'BZD',
    label: 'BZD'
  },
  {
    value: 'CAD',
    label: 'CAD'
  },
  {
    value: 'CDF',
    label: 'CDF'
  },
  {
    value: 'XAF',
    label: 'XAF'
  },
  {
    value: 'CHF',
    label: 'CHF'
  },
  {
    value: 'NZD',
    label: 'NZD'
  },
  {
    value: 'CLF',
    label: 'CLF'
  },
  {
    value: 'CNY',
    label: 'CNY'
  },
  {
    value: 'COP',
    label: 'COP'
  },
  {
    value: 'CRC',
    label: 'CRC'
  },
  {
    value: 'CUC',
    label: 'CUC'
  },
  {
    value: 'CVE',
    label: 'CVE'
  },
  {
    value: 'ANG',
    label: 'ANG'
  },
  {
    value: 'CZK',
    label: 'CZK'
  },
  {
    value: 'DJF',
    label: 'DJF'
  },
  {
    value: 'DKK',
    label: 'DKK'
  },
  {
    value: 'DOP',
    label: 'DOP'
  },
  {
    value: 'DZD',
    label: 'DZD'
  },
  {
    value: 'EGP',
    label: 'EGP'
  },
  {
    value: 'MAD',
    label: 'MAD'
  },
  {
    value: 'ERN',
    label: 'ERN'
  },
  {
    value: 'ETB',
    label: 'ETB'
  },
  {
    value: 'FJD',
    label: 'FJD'
  },
  {
    value: 'FKP',
    label: 'FKP'
  },
  {
    value: 'GBP',
    label: 'GBP'
  },
  {
    value: 'GEL',
    label: 'GEL'
  },
  {
    value: 'GHS',
    label: 'GHS'
  },
  {
    value: 'GIP',
    label: 'GIP'
  },
  {
    value: 'GMD',
    label: 'GMD'
  },
  {
    value: 'GNF',
    label: 'GNF'
  },
  {
    value: 'GTQ',
    label: 'GTQ'
  },
  {
    value: 'GYD',
    label: 'GYD'
  },
  {
    value: 'HKD',
    label: 'HKD'
  },
  {
    value: 'HNL',
    label: 'HNL'
  },
  {
    value: 'HRK',
    label: 'HRK'
  },
  {
    value: 'HTG',
    label: 'HTG'
  },
  {
    value: 'HUF',
    label: 'HUF'
  },
  {
    value: 'IDR',
    label: 'IDR'
  },
  {
    value: 'ILS',
    label: 'ILS'
  },
  {
    value: 'INR',
    label: 'INR'
  },
  {
    value: 'IQD',
    label: 'IQD'
  },
  {
    value: 'IRR',
    label: 'IRR'
  },
  {
    value: 'ISK',
    label: 'ISK'
  },
  {
    value: 'JMD',
    label: 'JMD'
  },
  {
    value: 'JOD',
    label: 'JOD'
  },
  {
    value: 'JPY',
    label: 'JPY'
  },
  {
    value: 'KES',
    label: 'KES'
  },
  {
    value: 'KGS',
    label: 'KGS'
  },
  {
    value: 'KHR',
    label: 'KHR'
  },
  {
    value: 'KMF',
    label: 'KMF'
  },
  {
    value: 'KPW',
    label: 'KPW'
  },
  {
    value: 'KRW',
    label: 'KRW'
  },
  {
    value: 'KWD',
    label: 'KWD'
  },
  {
    value: 'KYD',
    label: 'KYD'
  },
  {
    value: 'KZT',
    label: 'KZT'
  },
  {
    value: 'LAK',
    label: 'LAK'
  },
  {
    value: 'LBP',
    label: 'LBP'
  },
  {
    value: 'LKR',
    label: 'LKR'
  },
  {
    value: 'LRD',
    label: 'LRD'
  },
  {
    value: 'LSL',
    label: 'LSL'
  },
  {
    value: 'LYD',
    label: 'LYD'
  },
  {
    value: 'MDL',
    label: 'MDL'
  },
  {
    value: 'MGA',
    label: 'MGA'
  },
  {
    value: 'MKD',
    label: 'MKD'
  },
  {
    value: 'MMK',
    label: 'MMK'
  },
  {
    value: 'MNT',
    label: 'MNT'
  },
  {
    value: 'MRU',
    label: 'MRU'
  },
  {
    value: 'MUR',
    label: 'MUR'
  },
  {
    value: 'MVR',
    label: 'MVR'
  },
  {
    value: 'MWK',
    label: 'MWK'
  },
  {
    value: 'MXN',
    label: 'MXN'
  },
  {
    value: 'MYR',
    label: 'MYR'
  },
  {
    value: 'MZN',
    label: 'MZN'
  },
  {
    value: 'NAD',
    label: 'NAD'
  },
  {
    value: 'XPF',
    label: 'XPF'
  },
  {
    value: 'NGN',
    label: 'NGN'
  },
  {
    value: 'NIO',
    label: 'NIO'
  },
  {
    value: 'NPR',
    label: 'NPR'
  },
  {
    value: 'OMR',
    label: 'OMR'
  },
  {
    value: 'PAB',
    label: 'PAB'
  },
  {
    value: 'PEN',
    label: 'PEN'
  },
  {
    value: 'PGK',
    label: 'PGK'
  },
  {
    value: 'PHP',
    label: 'PHP'
  },
  {
    value: 'PKR',
    label: 'PKR'
  },
  {
    value: 'PLN',
    label: 'PLN'
  },
  {
    value: 'PYG',
    label: 'PYG'
  },
  {
    value: 'QAR',
    label: 'QAR'
  },
  {
    value: 'RON',
    label: 'RON'
  },
  {
    value: 'RSD',
    label: 'RSD'
  },
  {
    value: 'RUB',
    label: 'RUB'
  },
  {
    value: 'RWF',
    label: 'RWF'
  },
  {
    value: 'SAR',
    label: 'SAR'
  },
  {
    value: 'SBD',
    label: 'SBD'
  },
  {
    value: 'SCR',
    label: 'SCR'
  },
  {
    value: 'SDG',
    label: 'SDG'
  },
  {
    value: 'SEK',
    label: 'SEK'
  },
  {
    value: 'SGD',
    label: 'SGD'
  },
  {
    value: 'SHP',
    label: 'SHP'
  },
  {
    value: 'SLL',
    label: 'SLL'
  },
  {
    value: 'SOS',
    label: 'SOS'
  },
  {
    value: 'SRD',
    label: 'SRD'
  },
  {
    value: 'SSP',
    label: 'SSP'
  },
  {
    value: 'STN',
    label: 'STN'
  },
  {
    value: 'SVC',
    label: 'SVC'
  },
  {
    value: 'SYP',
    label: 'SYP'
  },
  {
    value: 'SZL',
    label: 'SZL'
  },
  {
    value: 'THB',
    label: 'THB'
  },
  {
    value: 'TJS',
    label: 'TJS'
  },
  {
    value: 'TMT',
    label: 'TMT'
  },
  {
    value: 'TND',
    label: 'TND'
  },
  {
    value: 'TOP',
    label: 'TOP'
  },
  {
    value: 'TRY',
    label: 'TRY'
  },
  {
    value: 'TTD',
    label: 'TTD'
  },
  {
    value: 'TWD',
    label: 'TWD'
  },
  {
    value: 'TZS',
    label: 'TZS'
  },
  {
    value: 'UAH',
    label: 'UAH'
  },
  {
    value: 'UGX',
    label: 'UGX'
  },
  {
    value: 'UYI',
    label: 'UYI'
  },
  {
    value: 'UZS',
    label: 'UZS'
  },
  {
    value: 'VES',
    label: 'VES'
  },
  {
    value: 'VND',
    label: 'VND'
  },
  {
    value: 'VUV',
    label: 'VUV'
  },
  {
    value: 'YER',
    label: 'YER'
  },
  {
    value: 'ZAR',
    label: 'ZAR'
  },
  {
    value: 'ZMW',
    label: 'ZMW'
  },
  {
    value: 'ZWL',
    label: 'ZWL'
  }
];

const FormattedField = () => {
  const { value: locale } = useFieldState('locale');
  const { value: currency } = useFieldState('currency');

  // Generate mask from locale and currency
  const { formatter, parser } = useMemo(
    () => {
      if (locale && currency) {
        return utils.createIntlNumberFormatter(locale, {
          style: 'currency',
          currency
        });
      }
      return {};
    },
    [currency, locale]
  );

  // const { formatter, parser } = useMemo(() => {
  //   // return utils.createIntlNumberFormatter('en-US', {});

  //   return utils.createIntlNumberFormatter('en-US', {
  //     style: 'decimal',
  //     signDisplay: 'never',
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 0
  //   });
  // }, []);

  // const { formatter, parser } = useMemo(() => {
  //   // return utils.createIntlNumberFormatter('de-DE', {
  //   //   style: 'decimal',
  //   //   currency: 'USD',
  //   //   minimumFractionDigits: 2
  //   // });

  //   return utils.createIntlNumberFormatter(locale, {
  //     style: 'decimal',
  //     currency: 'USD',
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2
  //   });
  // }, []);

  return (
    <Input
      field="localeMask"
      label={`Locale Masked Field (${currency} currency)`}
      formatter={formatter}
      parser={parser}
      formatterDependencies={[locale, currency]}
      initialValue={3000.25}
    />
  );
};

const FormatParse = () => (
  <Form>
    <div>
      <Select
        label="Locale"
        field="locale"
        options={localeOptions}
        initialValue="en-US"
      />
      <Select
        label="Currency"
        field="currency"
        options={currencyOptions}
        initialValue="USD"
      />
      <FormattedField />
      <button type="submit">Submit</button>
      <Debug />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
