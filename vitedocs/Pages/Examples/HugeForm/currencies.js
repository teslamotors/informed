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

export default currencyOptions;
