import "./List.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../Coin/Coin";
import { FcSearch } from "react-icons/fc";

function List() {
  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filteredCoins =
    coins &&
    coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">
          <FcSearch /> Search a currency
        </h1>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="SEARCH"
            onChange={handleChange}
          />
        </form>
      </div>
      {!filteredCoins ? (
        <h1>Cargando...</h1>
      ) : (
        filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              image={coin.image}
              marketCap={coin.market_cap}
              symbol={coin.symbol}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })
      )}

<div>
  <footer>
        <p>All rights reserved</p>
        <a href="https://mi-portafolio-facu.netlify.app/" target="_blank">
          By Facundo García
        </a>
      </footer>
</div>


      
    </div>
  );
}

export default List;
