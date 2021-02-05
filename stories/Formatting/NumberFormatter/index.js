import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import FormState from '../../utils/FormState';

import { Form, Text } from '../../../src';

// TODO: get this from @tesla/number-format package?
const numberFormatConfig = {
  fr: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: ' '
  },

  AD: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  cs_CZ: {
    currency: 'CZK',
    decimal: ',',
    format: '%v %s',
    symbol: 'Kč',
    thousand: ' '
  },

  en_AE: {
    currency: 'AED',
    decimal: '.',
    format: '%s %v',
    symbol: 'AED',
    thousand: ','
  },

  en_AT: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  de_AT: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_AU: {
    currency: 'AUD',
    format: '%s%v',
    symbol: '$',
    symbol_foreign: 'AU$'
  },

  en_BE: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  fr_BE: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  nl_BE: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_CA: {
    currency: 'CAD',
    symbol: '$',
    symbol_foreign: 'CA$'
  },

  de_CH: {
    currency: 'CHF',
    decimal: ',',
    format: '%s %v',
    symbol: 'CHF',
    thousand: "'"
  },
  fr_CA: {
    currency: 'CAD',
    decimal: ',',
    format: '%v %s',
    symbol: '$',
    symbol_foreign: 'CA$',
    thousand: ' '
  },
  fr_CH: {
    currency: 'CHF',
    decimal: ',',
    format: '%s %v',
    symbol: 'CHF',
    thousand: "'"
  },
  it_CH: {
    currency: 'CHF',
    decimal: ',',
    format: '%s %v',
    symbol: 'CHF',
    thousand: "'"
  },

  zh_CN: {
    currency: 'CNY',
    decimal: '.',
    format: '%s %v',
    symbol: '\u00A5',
    thousand: ','
  },

  CY: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  de_DE: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_DK: {
    currency: 'DKK',
    decimal: ',',
    format: '%s %v',
    symbol: 'kr.',
    thousand: '.'
  },

  da_DK: {
    currency: 'DKK',
    decimal: ',',
    format: '%s %v',
    symbol: 'kr.',
    thousand: '.'
  },

  EE: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  es_ES: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_EU: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  fi_FI: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  fr_FR: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: ' '
  },

  en_GB: {
    currency: 'GBP',
    symbol: '\u00A3'
  },

  GR: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_HK: {
    currency: 'HKD',
    symbol: 'HK$'
  },

  zh_HK: {
    currency: 'HKD',
    symbol: 'HK$'
  },

  IE: {
    currency: 'EUR',
    symbol: '\u20aC'
  },

  he_IL: {
    currency: 'ILS',
    decimal: '.',
    format: '%v %s',
    symbol: '₪',
    thousand: ','
  },

  it_IT: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  ja_JP: {
    currency: 'JPY',
    symbol: '\u00A5'
  },

  fr_LU: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: ' '
  },

  de_LU: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: ' '
  },

  MC: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: ' '
  },

  MT: {
    currency: 'MX',
    decimal: ',',
    symbol: '\u20aC',
    thousand: '.'
  },

  es_MX: {
    currency: 'MX',
    decimal: '.',
    symbol: '$',
    symbol_foreign: 'MX$',
    thousand: ','
  },

  nl_NL: {
    currency: 'EUR',
    decimal: ',',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: '.'
  },

  no_NO: {
    currency: 'NOK',
    decimal: ',',
    format: '%s %v',
    symbol: 'kr.',
    thousand: '.'
  },

  en_NZ: {
    currency: 'NZD',
    decimal: '.',
    symbol: '$',
    symbol_foreign: 'NZ$',
    thousand: ','
  },

  sv_SE: {
    currency: 'SEK',
    decimal: ',',
    format: '%v %s',
    symbol: 'kr',
    thousand: ' '
  },

  pt_PT: {
    currency: 'EUR',
    decimal: ',',
    format: '%v %s',
    symbol: '\u20aC',
    thousand: '.'
  },

  en_US: {
    currency: 'USD',
    decimal: '.',
    format: '%s%v',
    symbol: '$',
    thousand: ','
  },

  en_ZA: {
    currency: 'ZAR',
    decimal: ',',
    symbol: 'R',
    thousand: '.'
  },

  en_IE: {
    currency: 'IRL',
    decimal: '.',
    format: '%s %v',
    symbol: '\u20aC',
    thousand: ','
  },

  zh_MO: {
    currency: 'MAC',
    decimal: '.',
    symbol: 'HK$',
    thousand: ','
  },

  en_MO: {
    currency: 'MAC',
    decimal: '.',
    position: 'prefix',
    symbol: 'HK$',
    thousand: ','
  },

  zh_TW: {
    currency: 'TWN',
    decimal: '.',
    symbol: 'NT$',
    thousand: ','
  },

  en_JO: {
    currency: 'JOD',
    decimal: '.',
    format: '%v %s',
    symbol: 'JOD',
    thousand: ','
  },

  ko_KR: {
    currency: 'KRW',
    decimal: '.',
    symbol: '\u20A9',
    thousand: ','
  },

  is_IS: {
    currency: 'ISK',
    decimal: ',',
    format: '%v %s',
    symbol: 'kr',
    thousand: '.'
  }
};

function memoize(fn) {
  const memoized = (...args) => {
    const cacheKey = JSON.stringify(...args);

    if (cacheKey in memoized.cache) {
      return memoized.cache[cacheKey];
    }

    memoized.cache[cacheKey] = fn.apply(this, args);

    return memoized.cache[cacheKey];
  };

  memoized.cache = Object.create(null);

  return memoized;
}

const CARET_TRAP = '[]';
const NUMBER_REGEXP = /\d/;
const MAX_SAFE_INTEGER = 9007199254740991;

// http://stackoverflow.com/a/10899795/604296
const addThousandsSeparator = (integer, thousandsSeparator) =>
  integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

const getConfig = ({ locale, ...defaults } = {}) => {
  const config = {};

  if (Object.keys(numberFormatConfig).includes(locale)) {
    const { decimal, format = '%s%v', symbol, thousand } = numberFormatConfig[
      locale
    ];

    const symbolStr = '%s';
    const valueStr = '%v';
    const indexOfValue = format.indexOf(valueStr);
    const prefix = format.substr(0, indexOfValue).replace(symbolStr, symbol);
    const suffix = format
      .substr(indexOfValue + valueStr.length)
      .replace(symbolStr, symbol);

    Object.assign(config, {
      decimalSymbol: decimal,
      prefix,
      suffix,
      thousandsSeparator: thousand
    });
  }

  Object.assign(config, defaults);

  return config;
};

const convertToMask = str =>
  [...str].map(char => {
    if (NUMBER_REGEXP.test(char)) {
      return NUMBER_REGEXP;
    }

    return char;
  });

const getNumberFormatter = memoize(defaults => {
  const {
    allowDecimal = true,
    allowLeadingZeroes = false,
    convertToNumber = true,
    decimalLimit = 2,
    decimalSymbol = '.',
    includeThousandsSeparator = true,
    integerLimit = null,
    prefix = '',
    suffix = '',
    thousandsSeparator = ','
  } = getConfig(defaults);

  const prefixLength = (prefix && prefix.length) || 0;
  const suffixLength = (suffix && suffix.length) || 0;

  const getNumberParts = (value, replaceDecimalSymbol = false) => {
    let strValue = typeof value === 'number' ? value.toString() : value;
    let integer;
    let fraction;

    if (strValue.slice(suffixLength * -1) === suffix) {
      strValue = strValue.slice(0, suffixLength * -1);
    }

    if (replaceDecimalSymbol === true) {
      strValue = strValue.replace('.', decimalSymbol);
    }

    const strValueLength = strValue.length;
    const indexOfDecimal = strValue.indexOf(decimalSymbol);
    const hasDecimal = allowDecimal && indexOfDecimal !== -1;
    const integerStart =
      strValue.slice(0, prefixLength) === prefix ? prefixLength : 0;

    if (hasDecimal) {
      integer = strValue.slice(integerStart, indexOfDecimal);
      fraction = strValue.slice(indexOfDecimal + 1, strValueLength);
      fraction = fraction.replace(/\D+/g, '');

      if (typeof decimalLimit === 'number') {
        fraction = fraction.slice(0, decimalLimit);
      }
    } else {
      integer = strValue.slice(integerStart);
    }

    integer = integer.replace(/\D+/g, '');

    if (!allowLeadingZeroes) {
      integer = integer.replace(/^0+(0$|[^0])/, '$1');
    }

    if (integerLimit && typeof integerLimit === 'number') {
      integer = integer
        .split(thousandsSeparator)
        .join('')
        .slice(0, integerLimit);
    }

    if (includeThousandsSeparator) {
      integer = addThousandsSeparator(integer, thousandsSeparator);
    }

    return { integer, fraction, hasDecimal };
  };

  function formatter(value) {
    if (value == null) {
      return [];
    }

    const { integer, fraction, hasDecimal } = getNumberParts(value);

    if (hasDecimal && !integer && !fraction) {
      return [...prefix, 0, decimalSymbol, CARET_TRAP, ...suffix];
    }

    const integerMask = integer && convertToMask(integer);
    const number = hasDecimal
      ? [
          ...integerMask,
          integer && CARET_TRAP, // no need for the caret trap if there's no integer value
          decimalSymbol,
          CARET_TRAP,
          ...convertToMask(fraction)
        ].filter(Boolean)
      : integerMask;

    return [...prefix, ...number, ...suffix];
  }

  const parser = value => {
    if (value == null) {
      return null;
    }

    if (convertToNumber === false) {
      return typeof value === 'number' ? value.toString() : value;
    }

    // remove prefix
    const strValue = typeof value === 'number' ? value.toString() : value;
    const numberStart =
      strValue.slice(0, prefixLength) === prefix ? prefixLength : 0;
    let numberStr = strValue.slice(numberStart);

    // remove suffix
    if (numberStr.slice(suffixLength * -1) === suffix) {
      numberStr = numberStr.slice(0, suffixLength * -1);
    }

    numberStr = numberStr
      .split(thousandsSeparator)
      .join('')
      .replace(decimalSymbol, '.');

    let number =
      allowDecimal && numberStr.indexOf('.') !== -1
        ? parseFloat(numberStr, 10)
        : parseInt(numberStr, 10);

    // we can no longer rely on Number in javascript, fall back to string
    if (number > MAX_SAFE_INTEGER) {
      number = numberStr.slice(-1) === '.' ? numberStr.slice(0, -1) : numberStr;
    }

    return isNaN(number) ? null : number;
  };

  return { formatter, parser };
});

const { formatter, parser } = getNumberFormatter({ locale: 'nl_NL' });

const FormatParse = () => (
  <Form>
    <div>
      <label>
        Phone Number:
        <Text
          field="phone"
          formatter={formatter}
          parser={parser}
          maintainCursor
          initialValue="1231231234"
        />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, FormatParse);
