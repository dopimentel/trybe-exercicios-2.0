const fetchCoins = async () => {
    const URL = 'https://api.coincap.io/v2/assets';
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.data);
};

fetchCoins();