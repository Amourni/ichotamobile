import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/all';

const getCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    const countries = response.data.map(country => ({
      name: country.name?.common || 'Unknown',
      code: country.cca3 || 'N/A',
      currencies: country.currencies ? Object.values(country.currencies).map(currency => ({
        name: currency.name,
        code: currency.code,
        symbol: currency.symbol
      })) : []
    }));
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export default getCountries;

