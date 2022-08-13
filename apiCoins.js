const fetchCoins = async () => {
    const URL = 'https://api.coincap.io/v2/assets';
    const response = await fetch(URL);
    const data = await response.json();
    const result = data.data;
    result
    .filter((asset, index) => index < 10)
    .map((asset) => {
        const {name, symbol, priceUsd} = asset;
        const elementUl = document.getElementById("coins-list");
        const elementLi = document.createElement("li");
        elementUl.appendChild(elementLi);
        elementLi.innerText = `${asset.name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
    })

};
fetchCoins();
