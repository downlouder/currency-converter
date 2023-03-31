import apiKey from './apiKey.js';

const selects = document.querySelectorAll('select');
const inputs = document.querySelectorAll('input');
const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;

const currencyObj = {
  ADA: {code: 'ADA', value: 2.619515},
  AED: {code: 'AED', value: 3.672606},
  AFN: {code: 'AFN', value: 85.500105},
  ALL: {code: 'ALL', value: 104.825123},
  AMD: {code: 'AMD', value: 388.210608},
  ANG: {code: 'ANG', value: 1.801828},
  AOA: {code: 'AOA', value: 509.000919},
  ARS: {code: 'ARS', value: 208.295485},
  AUD: {code: 'AUD', value: 1.496532},
  AVAX: {code: 'AVAX', value: 0.057743},
  AWG: {code: 'AWG', value: 1.800003},
  AZN: {code: 'AZN', value: 1.700002},
  BAM: {code: 'BAM', value: 1.800907},
  BBD: {code: 'BBD', value: 2.018631},
  BDT: {code: 'BDT', value: 106.83162},
  BGN: {code: 'BGN', value: 1.803342},
  BHD: {code: 'BHD', value: 0.377093},
  BIF: {code: 'BIF', value: 2078.004024},
  BMD: {code: 'BMD', value: 1.000001},
  BNB: {code: 'BNB', value: 0.003171},
  BND: {code: 'BND', value: 1.329075},
  BOB: {code: 'BOB', value: 6.90879},
  BRL: {code: 'BRL', value: 5.13571},
  BSD: {code: 'BSD', value: 0.999739},
  BTC: {code: 'BTC', value: 0.000035},
  BTN: {code: 'BTN', value: 82.239233},
  BWP: {code: 'BWP', value: 13.137403},
  BYN: {code: 'BYN', value: 2.523519},
  BYR: {code: 'BYR', value: 19600},
  BZD: {code: 'BZD', value: 2.01516},
  CAD: {code: 'CAD', value: 1.356462},
  CDF: {code: 'CDF', value: 2047.503063},
  CHF: {code: 'CHF', value: 0.918302},
  CLF: {code: 'CLF', value: 0.028707},
  CLP: {code: 'CLP', value: 792.12146},
  CNY: {code: 'CNY', value: 6.887109},
  COP: {code: 'COP', value: 4636.005825},
  CRC: {code: 'CRC', value: 540.050841},
  CUC: {code: 'CUC', value: 1.004954},
  CUP: {code: 'CUP', value: 23.994296},
  CVE: {code: 'CVE', value: 102.000204},
  CZK: {code: 'CZK', value: 21.740437},
  DJF: {code: 'DJF', value: 177.720264},
  DKK: {code: 'DKK', value: 6.87003},
  DOP: {code: 'DOP', value: 54.750104},
  DOT: {code: 'DOT', value: 0.16104},
  DZD: {code: 'DZD', value: 135.684259},
  EGP: {code: 'EGP', value: 30.80396},
  ERN: {code: 'ERN', value: 15.000017},
  ETB: {code: 'ETB', value: 53.900067},
  ETH: {code: 'ETH', value: 0.000557},
  EUR: {code: 'EUR', value: 0.922231},
  FJD: {code: 'FJD', value: 2.212954},
  FKP: {code: 'FKP', value: 0.812223},
  GBP: {code: 'GBP', value: 0.812251},
  GEL: {code: 'GEL', value: 2.560003},
  GGP: {code: 'GGP', value: 0.812223},
  GHS: {code: 'GHS', value: 11.85002},
  GIP: {code: 'GIP', value: 0.812223},
  GMD: {code: 'GMD', value: 62.150122},
  GNF: {code: 'GNF', value: 8670.011529},
  GTQ: {code: 'GTQ', value: 7.792758},
  GYD: {code: 'GYD', value: 210.946869},
  HKD: {code: 'HKD', value: 7.849966},
  HNL: {code: 'HNL', value: 24.650034},
  HRK: {code: 'HRK', value: 6.948549},
  HTG: {code: 'HTG', value: 155.459251},
  HUF: {code: 'HUF', value: 351.115636},
  IDR: {code: 'IDR', value: 15035.522881},
  ILS: {code: 'ILS', value: 3.579935},
  IMP: {code: 'IMP', value: 0.812223},
  INR: {code: 'INR', value: 82.25574},
  IQD: {code: 'IQD', value: 1460.002358},
  IRR: {code: 'IRR', value: 42262.578354},
  ISK: {code: 'ISK', value: 136.570215},
  JEP: {code: 'JEP', value: 0.812223},
  JMD: {code: 'JMD', value: 150.872259},
  JOD: {code: 'JOD', value: 0.709401},
  JPY: {code: 'JPY', value: 132.585704},
  KES: {code: 'KES', value: 132.15024},
  KGS: {code: 'KGS', value: 87.420173},
  KHR: {code: 'KHR', value: 4055.005065},
  KMF: {code: 'KMF', value: 454.500735},
  KPW: {code: 'KPW', value: 899.993588},
  KRW: {code: 'KRW', value: 1307.456795},
  KWD: {code: 'KWD', value: 0.30656},
  KYD: {code: 'KYD', value: 0.833162},
  KZT: {code: 'KZT', value: 447.474512},
  LAK: {code: 'LAK', value: 16982.529389},
  LBP: {code: 'LBP', value: 15250.026988},
  LKR: {code: 'LKR', value: 324.784054},
  LRD: {code: 'LRD', value: 162.100195},
  LSL: {code: 'LSL', value: 18.090025},
  LTC: {code: 'LTC', value: 0.010906},
  LTL: {code: 'LTL', value: 2.95274},
  LVL: {code: 'LVL', value: 0.60489},
  LYD: {code: 'LYD', value: 4.780009},
  MAD: {code: 'MAD', value: 10.232519},
  MATIC: {code: 'MATIC', value: 0.889859},
  MDL: {code: 'MDL', value: 18.420675},
  MGA: {code: 'MGA', value: 4330.004656},
  MKD: {code: 'MKD', value: 56.829229},
  MMK: {code: 'MMK', value: 2099.503926},
  MNT: {code: 'MNT', value: 3525.77491},
  MOP: {code: 'MOP', value: 8.083824},
  MRO: {code: 'MRO', value: 356.999828},
  MUR: {code: 'MUR', value: 46.000088},
  MVR: {code: 'MVR', value: 15.425026},
  MWK: {code: 'MWK', value: 1020.501162},
  MXN: {code: 'MXN', value: 18.096748},
  MYR: {code: 'MYR', value: 4.420007},
  MZN: {code: 'MZN', value: 63.100125},
  NAD: {code: 'NAD', value: 18.090027},
  NGN: {code: 'NGN', value: 460.000652},
  NIO: {code: 'NIO', value: 36.575051},
  NOK: {code: 'NOK', value: 10.419729},
  NPR: {code: 'NPR', value: 131.581541},
  NZD: {code: 'NZD', value: 1.607578},
  OMR: {code: 'OMR', value: 0.385009},
  PAB: {code: 'PAB', value: 0.999707},
  PEN: {code: 'PEN', value: 3.754007},
  PGK: {code: 'PGK', value: 3.520007},
  PHP: {code: 'PHP', value: 54.275101},
  PKR: {code: 'PKR', value: 283.420452},
  PLN: {code: 'PLN', value: 4.323356},
  PYG: {code: 'PYG', value: 7181.346364},
  QAR: {code: 'QAR', value: 3.640507},
  RON: {code: 'RON', value: 4.570209},
  RSD: {code: 'RSD', value: 108.190148},
  RUB: {code: 'RUB', value: 77.325092},
  RWF: {code: 'RWF', value: 1103.501623},
  SAR: {code: 'SAR', value: 3.755158},
  SBD: {code: 'SBD', value: 8.266733},
  SCR: {code: 'SCR', value: 13.087824},
  SDG: {code: 'SDG', value: 595.000685},
  SEK: {code: 'SEK', value: 10.399843},
  SGD: {code: 'SGD', value: 1.329322},
  SHP: {code: 'SHP', value: 1.216751},
  SLL: {code: 'SLL', value: 19750.034672},
  SOL: {code: 'SOL', value: 0.047358},
  SOS: {code: 'SOS', value: 568.500655},
  SRD: {code: 'SRD', value: 35.885544},
  STD: {code: 'STD', value: 20697.981008},
  SVC: {code: 'SVC', value: 8.747627},
  SYP: {code: 'SYP', value: 2512.536209},
  SZL: {code: 'SZL', value: 18.090033},
  THB: {code: 'THB', value: 34.180064},
  TJS: {code: 'TJS', value: 10.907278},
  TMT: {code: 'TMT', value: 3.505005},
  TND: {code: 'TND', value: 3.055006},
  TOP: {code: 'TOP', value: 2.351153},
  TRY: {code: 'TRY', value: 19.151811},
  TTD: {code: 'TTD', value: 6.786322},
  TWD: {code: 'TWD', value: 30.531054},
  TZS: {code: 'TZS', value: 2332.003994},
  UAH: {code: 'UAH', value: 36.922854},
  UGX: {code: 'UGX', value: 3789.19198},
  USD: {code: 'USD', value: 1},
  UYU: {code: 'UYU', value: 38.785129},
  UZS: {code: 'UZS', value: 11437.515173},
  VEF: {code: 'VEF', value: 2435944.140565},
  VND: {code: 'VND', value: 23490.028112},
  VUV: {code: 'VUV', value: 119.310675},
  WST: {code: 'WST', value: 2.726163},
  XAF: {code: 'XAF', value: 604.041506},
  XAG: {code: 'XAG', value: 0.0429},
  XAU: {code: 'XAU', value: 0.000509},
  XCD: {code: 'XCD', value: 2.702554},
  XDR: {code: 'XDR', value: 0.745223},
  XOF: {code: 'XOF', value: 605.500607},
  XPF: {code: 'XPF', value: 110.60014},
  XRP: {code: 'XRP', value: 1.834153},
  YER: {code: 'YER', value: 250.300293},
  ZAR: {code: 'ZAR', value: 18.099559},
  ZMK: {code: 'ZMK', value: 9001.2},
  ZMW: {code: 'ZMW', value: 21.269628},
  ZWL: {code: 'ZWL', value: 321.999592}
}

async function parsingFromFetch() {
  const res = await fetch(url);
  const data = await res.json();
  const currencies = await data.data;
  addOptions(currencies);
}

function parsingFromObj(data) {
  const currencies = data;
  addOptions(currencies);
}

function addOptions(currencies) {
  selects.forEach(select => {
    const arrKeys = Object.keys(currencies);
    arrKeys.map(item => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
  });
}

function convertValues(i, j) {
  if (selects[i].value !== 'currency' && selects[j].value !== 'currency') {
    const exp = inputs[i].value * currencyObj[selects[j].value].value / currencyObj[selects[i].value].value;
    inputs[j].value = exp.toFixed(4);
  }
}

selects[0].addEventListener('change', () => convertValues(0, 1));
selects[1].addEventListener('change', () => convertValues(1, 0));
inputs[0].addEventListener('change', () => convertValues(0, 1));
inputs[0].addEventListener('keyup', () => convertValues(0, 1));
inputs[1].addEventListener('change', () => convertValues(1, 0));
inputs[1].addEventListener('keyup', () => convertValues(1, 0));

parsingFromObj(currencyObj);