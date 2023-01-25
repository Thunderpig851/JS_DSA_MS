function getCountries(pageNumber) {
    return fetch(`https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`)
    .then(response => response.json())
    .then(data => data);
}

async function getNamePerCountryCode(pageNumber, countryCode) {
  const res = await getCountries(pageNumber);

  return {totalPages: res.total_pages, country: res.data.find(country => country.alpha2Code === countryCode)};
}

async function getCountryNameByAlpha2Code(code) {
  let currentPage = 1;
  let countryName;

  const getCountry = async () => {
      res = await getNamePerCountryCode(currentPage, code);

      if (!res.country && currentPage < res.totalPages) {
        currentPage++;
        await getCountry();
      } else {
        countryName = res.country ? res.country.name : 'N/A';
      }
  };

    await getCountry();


  return countryName;
}

// get countryName by Alpha 2 Code
getCountryNameByAlpha2Code('CH')