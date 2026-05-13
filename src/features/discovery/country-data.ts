export interface CountryInfo {
  code: string;
  name: string;
  fullName: string;
  population: string;
  internet: string;
  mobile: string;
  aiOrgs: number;
  gdp: string;
  languages: string[];
}

const data: Record<string, CountryInfo> = {
  DZ: { code: "DZ", name: "Algeria", fullName: "People's Democratic Republic of Algeria", population: "45.6M", internet: "71%", mobile: "115%", aiOrgs: 28, gdp: "$195B", languages: ["Arabic", "Berber", "French"] },
  AO: { code: "AO", name: "Angola", fullName: "Republic of Angola", population: "36.7M", internet: "43%", mobile: "78%", aiOrgs: 12, gdp: "$107B", languages: ["Portuguese"] },
  BJ: { code: "BJ", name: "Benin", fullName: "Republic of Benin", population: "14.1M", internet: "36%", mobile: "82%", aiOrgs: 8, gdp: "$19B", languages: ["French"] },
  BW: { code: "BW", name: "Botswana", fullName: "Republic of Botswana", population: "2.7M", internet: "64%", mobile: "148%", aiOrgs: 15, gdp: "$20B", languages: ["English", "Tswana"] },
  BF: { code: "BF", name: "Burkina Faso", fullName: "Burkina Faso", population: "23.3M", internet: "22%", mobile: "68%", aiOrgs: 6, gdp: "$20B", languages: ["French"] },
  BI: { code: "BI", name: "Burundi", fullName: "Republic of Burundi", population: "13.6M", internet: "11%", mobile: "55%", aiOrgs: 3, gdp: "$3.5B", languages: ["Kirundi", "French", "English"] },
  CM: { code: "CM", name: "Cameroon", fullName: "Republic of Cameroon", population: "29.3M", internet: "38%", mobile: "85%", aiOrgs: 14, gdp: "$47B", languages: ["French", "English"] },
  CV: { code: "CV", name: "Cape Verde", fullName: "Republic of Cabo Verde", population: "0.6M", internet: "67%", mobile: "126%", aiOrgs: 4, gdp: "$2.3B", languages: ["Portuguese"] },
  CF: { code: "CF", name: "Central African Rep.", fullName: "Central African Republic", population: "5.8M", internet: "10%", mobile: "42%", aiOrgs: 2, gdp: "$2.9B", languages: ["French", "Sango"] },
  TD: { code: "TD", name: "Chad", fullName: "Republic of Chad", population: "18.8M", internet: "8%", mobile: "48%", aiOrgs: 3, gdp: "$13B", languages: ["French", "Arabic"] },
  KM: { code: "KM", name: "Comoros", fullName: "Union of the Comoros", population: "0.9M", internet: "25%", mobile: "72%", aiOrgs: 2, gdp: "$1.4B", languages: ["Comorian", "French", "Arabic"] },
  CG: { code: "CG", name: "Congo", fullName: "Republic of the Congo", population: "6.3M", internet: "28%", mobile: "96%", aiOrgs: 5, gdp: "$13.5B", languages: ["French"] },
  CD: { code: "CD", name: "Dem. Rep. Congo", fullName: "Democratic Republic of the Congo", population: "105.8M", internet: "23%", mobile: "54%", aiOrgs: 18, gdp: "$67B", languages: ["French", "Lingala", "Swahili"] },
  DJ: { code: "DJ", name: "Djibouti", fullName: "Republic of Djibouti", population: "1.2M", internet: "62%", mobile: "93%", aiOrgs: 5, gdp: "$3.9B", languages: ["French", "Arabic"] },
  EG: { code: "EG", name: "Egypt", fullName: "Arab Republic of Egypt", population: "112.7M", internet: "72%", mobile: "105%", aiOrgs: 80, gdp: "$398B", languages: ["Arabic"] },
  GQ: { code: "GQ", name: "Eq. Guinea", fullName: "Republic of Equatorial Guinea", population: "1.7M", internet: "36%", mobile: "83%", aiOrgs: 3, gdp: "$12B", languages: ["Spanish", "French", "Portuguese"] },
  ER: { code: "ER", name: "Eritrea", fullName: "State of Eritrea", population: "3.8M", internet: "9%", mobile: "35%", aiOrgs: 2, gdp: "$2.6B", languages: ["Tigrinya", "Arabic", "English"] },
  ET: { code: "ET", name: "Ethiopia", fullName: "Federal Democratic Republic of Ethiopia", population: "129.7M", internet: "19%", mobile: "57%", aiOrgs: 30, gdp: "$155B", languages: ["Amharic", "Oromo", "Somali"] },
  GA: { code: "GA", name: "Gabon", fullName: "Gabonese Republic", population: "2.5M", internet: "62%", mobile: "134%", aiOrgs: 7, gdp: "$22B", languages: ["French"] },
  GM: { code: "GM", name: "Gambia", fullName: "Republic of The Gambia", population: "2.8M", internet: "33%", mobile: "76%", aiOrgs: 4, gdp: "$2.5B", languages: ["English"] },
  GH: { code: "GH", name: "Ghana", fullName: "Republic of Ghana", population: "34.1M", internet: "58%", mobile: "135%", aiOrgs: 65, gdp: "$78B", languages: ["English", "Twi"] },
  GN: { code: "GN", name: "Guinea", fullName: "Republic of Guinea", population: "14.4M", internet: "26%", mobile: "82%", aiOrgs: 5, gdp: "$22B", languages: ["French"] },
  GW: { code: "GW", name: "Guinea-Bissau", fullName: "Republic of Guinea-Bissau", population: "2.2M", internet: "17%", mobile: "68%", aiOrgs: 2, gdp: "$1.9B", languages: ["Portuguese"] },
  CI: { code: "CI", name: "Côte d'Ivoire", fullName: "Republic of Côte d'Ivoire", population: "29.4M", internet: "46%", mobile: "152%", aiOrgs: 20, gdp: "$79B", languages: ["French"] },
  KE: { code: "KE", name: "Kenya", fullName: "Republic of Kenya", population: "55.3M", internet: "48%", mobile: "128%", aiOrgs: 120, gdp: "$113B", languages: ["Swahili", "English"] },
  LS: { code: "LS", name: "Lesotho", fullName: "Kingdom of Lesotho", population: "2.3M", internet: "34%", mobile: "79%", aiOrgs: 4, gdp: "$2.8B", languages: ["Sesotho", "English"] },
  LR: { code: "LR", name: "Liberia", fullName: "Republic of Liberia", population: "5.5M", internet: "18%", mobile: "61%", aiOrgs: 3, gdp: "$4.1B", languages: ["English"] },
  LY: { code: "LY", name: "Libya", fullName: "State of Libya", population: "7.1M", internet: "65%", mobile: "171%", aiOrgs: 9, gdp: "$45B", languages: ["Arabic"] },
  MG: { code: "MG", name: "Madagascar", fullName: "Republic of Madagascar", population: "31.0M", internet: "14%", mobile: "56%", aiOrgs: 8, gdp: "$15.8B", languages: ["Malagasy", "French"] },
  MW: { code: "MW", name: "Malawi", fullName: "Republic of Malawi", population: "21.3M", internet: "16%", mobile: "52%", aiOrgs: 6, gdp: "$13.2B", languages: ["Chichewa", "English"] },
  ML: { code: "ML", name: "Mali", fullName: "Republic of Mali", population: "24.5M", internet: "14%", mobile: "73%", aiOrgs: 7, gdp: "$21B", languages: ["French", "Bambara"] },
  MR: { code: "MR", name: "Mauritania", fullName: "Islamic Republic of Mauritania", population: "5.0M", internet: "34%", mobile: "97%", aiOrgs: 4, gdp: "$10.5B", languages: ["Arabic", "French"] },
  MU: { code: "MU", name: "Mauritius", fullName: "Republic of Mauritius", population: "1.3M", internet: "72%", mobile: "155%", aiOrgs: 50, gdp: "$14.9B", languages: ["English", "French", "Creole"] },
  MA: { code: "MA", name: "Morocco", fullName: "Kingdom of Morocco", population: "38.1M", internet: "74%", mobile: "133%", aiOrgs: 55, gdp: "$144B", languages: ["Arabic", "Berber", "French"] },
  MZ: { code: "MZ", name: "Mozambique", fullName: "Republic of Mozambique", population: "33.9M", internet: "21%", mobile: "70%", aiOrgs: 10, gdp: "$20B", languages: ["Portuguese"] },
  NA: { code: "NA", name: "Namibia", fullName: "Republic of Namibia", population: "2.7M", internet: "55%", mobile: "108%", aiOrgs: 11, gdp: "$13.5B", languages: ["English"] },
  NE: { code: "NE", name: "Niger", fullName: "Republic of Niger", population: "27.8M", internet: "12%", mobile: "58%", aiOrgs: 4, gdp: "$17B", languages: ["French", "Hausa"] },
  NG: { code: "NG", name: "Nigeria", fullName: "Federal Republic of Nigeria", population: "229.2M", internet: "55%", mobile: "103%", aiOrgs: 140, gdp: "$477B", languages: ["English", "Hausa", "Yoruba", "Igbo"] },
  RW: { code: "RW", name: "Rwanda", fullName: "Republic of Rwanda", population: "14.5M", internet: "38%", mobile: "92%", aiOrgs: 35, gdp: "$14B", languages: ["Kinyarwanda", "French", "English", "Swahili"] },
  ST: { code: "ST", name: "São Tomé", fullName: "Democratic Republic of São Tomé and Príncipe", population: "0.2M", internet: "48%", mobile: "89%", aiOrgs: 1, gdp: "$0.6B", languages: ["Portuguese"] },
  SN: { code: "SN", name: "Senegal", fullName: "Republic of Senegal", population: "18.3M", internet: "58%", mobile: "117%", aiOrgs: 25, gdp: "$30B", languages: ["French", "Wolof"] },
  SC: { code: "SC", name: "Seychelles", fullName: "Republic of Seychelles", population: "0.1M", internet: "85%", mobile: "188%", aiOrgs: 3, gdp: "$2.1B", languages: ["Seychellois Creole", "English", "French"] },
  SL: { code: "SL", name: "Sierra Leone", fullName: "Republic of Sierra Leone", population: "8.9M", internet: "18%", mobile: "75%", aiOrgs: 5, gdp: "$4.2B", languages: ["English"] },
  SO: { code: "SO", name: "Somalia", fullName: "Federal Republic of Somalia", population: "18.1M", internet: "11%", mobile: "52%", aiOrgs: 6, gdp: "$10.4B", languages: ["Somali", "Arabic"] },
  ZA: { code: "ZA", name: "South Africa", fullName: "Republic of South Africa", population: "61.0M", internet: "68%", mobile: "168%", aiOrgs: 95, gdp: "$380B", languages: ["Afrikaans", "English", "Zulu", "Xhosa"] },
  SS: { code: "SS", name: "S. Sudan", fullName: "Republic of South Sudan", population: "11.5M", internet: "8%", mobile: "32%", aiOrgs: 2, gdp: "$5B", languages: ["English"] },
  SD: { code: "SD", name: "Sudan", fullName: "Republic of the Sudan", population: "49.4M", internet: "31%", mobile: "76%", aiOrgs: 10, gdp: "$51B", languages: ["Arabic", "English"] },
  SZ: { code: "SZ", name: "Swaziland", fullName: "Kingdom of Eswatini", population: "1.2M", internet: "39%", mobile: "88%", aiOrgs: 3, gdp: "$5B", languages: ["Swati", "English"] },
  TZ: { code: "TZ", name: "Tanzania", fullName: "United Republic of Tanzania", population: "68.6M", internet: "35%", mobile: "92%", aiOrgs: 22, gdp: "$85B", languages: ["Swahili", "English"] },
  TG: { code: "TG", name: "Togo", fullName: "Togolese Republic", population: "9.3M", internet: "25%", mobile: "75%", aiOrgs: 7, gdp: "$9B", languages: ["French"] },
  TN: { code: "TN", name: "Tunisia", fullName: "Republic of Tunisia", population: "12.6M", internet: "73%", mobile: "129%", aiOrgs: 32, gdp: "$48B", languages: ["Arabic", "French"] },
  UG: { code: "UG", name: "Uganda", fullName: "Republic of Uganda", population: "50.0M", internet: "27%", mobile: "72%", aiOrgs: 20, gdp: "$52B", languages: ["English", "Swahili"] },
  EH: { code: "EH", name: "W. Sahara", fullName: "Western Sahara", population: "0.6M", internet: "20%", mobile: "45%", aiOrgs: 1, gdp: "—", languages: ["Arabic", "Spanish"] },
  ZM: { code: "ZM", name: "Zambia", fullName: "Republic of Zambia", population: "21.3M", internet: "36%", mobile: "108%", aiOrgs: 12, gdp: "$30B", languages: ["English", "Bemba", "Nyanja"] },
  ZW: { code: "ZW", name: "Zimbabwe", fullName: "Republic of Zimbabwe", population: "16.9M", internet: "45%", mobile: "92%", aiOrgs: 15, gdp: "$32B", languages: ["English", "Shona", "Ndebele"] },
};

export function getCountryInfo(code: string): CountryInfo | undefined {
  return data[code.toUpperCase()];
}

export function getFlag(code: string): string {
  return `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
}

export function getCountryInfoByName(name: string): CountryInfo | undefined {
  const lower = name.toLowerCase();
  return Object.values(data).find(
    (c) => c.name.toLowerCase() === lower || c.fullName.toLowerCase().includes(lower)
  );
}
