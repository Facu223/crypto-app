import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({
  id,
  marketCap,
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="Crypto" />
          <h1><Link to={`/crypto-list/${id}`}><button className="button-name">{name}</button></Link></h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price: ${price}</p>
          <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p>24h: <span className="coin-percent red">{priceChange.toFixed(2)}%</span></p>
          ) : (
            <p>24h: <span className="coin-percent green">{priceChange.toFixed(2)}%</span></p>
          )}
          <p className="coin-marketcap">
            Market cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
