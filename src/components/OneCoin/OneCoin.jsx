import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OneCoin.css";
import Swal from "sweetalert2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
} from "react-icons/fa";
import {
  FcBarChart,
  FcCalculator,
  FcCollapse,
  FcUnlock,
  FcAlphabeticalSortingAz,
} from "react-icons/fc";

const OneCoin = () => {
  const { id } = useParams();
  const api = `https://api.coingecko.com/api/v3/coins/${id}`;
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [tickers, setTickers] = useState([]);
  const [toConvert, setToConvert] = useState();
  const [currentConvert, setCurrentConvert] = useState(null);
  const [img, setImg] = useState(null);
  const [marketData, setMarketData] = useState();
  const [ath, setAth] = useState();
  const [priceBase, setPriceBase] = useState();
  const [lastPrice, setLastPrice] = useState();
  const [symbol, setSymbol] = useState();

  useEffect(() => {
    httpRequest();
  }, []);

  useEffect(() => {
    saveLastPrice();
    setPriceBase(1);
  }, [currentConvert]);

  useEffect(() => {
    saveFinalValue();
  }, [priceBase]);

  useEffect(() => {
    currencyToConvert();
  }, [toConvert]);

  useEffect(() => {
    saveAth();
  }, [marketData]);

  useEffect(() => {
    saveMarketData();
  }, [currentCurrency]);

  const saveLastPrice = () => {
    if (currentConvert) {
      setLastPrice(currentConvert.last);
    }
  };

  useEffect(() => {
    filterTickers();
  }, [symbol]);

  const filterTickers = () => {
    if (currentCurrency) {
      const tickers = currentCurrency.tickers;

      if (tickers) {
        const filteredTickers = tickers.filter((ticker) => {
          if (ticker.base == symbol) {
            return ticker;
          }
        });
        setTickers(filteredTickers);
      }
    }
  };

  const httpRequest = async () => {
    await axios
      .get(api)
      .then((res) => {
        setCurrentCurrency(res.data);
        const img = res.data.image;
        setImg(img.large);
        setSymbol(res.data.symbol.toUpperCase());
      })
      .catch((error) => console.log(error));
  };

  const currencyToConvert = () => {
    const cToConvert = tickers.filter((ticker) => {
      if (ticker.target == toConvert) {
        return ticker;
      }
    });
    setCurrentConvert(cToConvert[0]);
  };

  const alert = () => {
    Swal.fire({
      icon: "warning",
      title: "¿What is the algorithm?",
      text: "Cryptocurrency algorithms are a set of specific cryptographic mechanisms and rules that encrypt a digital currency. Miners using special equipment crack the algorithm of a particular cryptocurrency.",
    });
  };

  const alertTwo = () => {
    Swal.fire({
      icon: "warning",
      title: "¿What is ATH?",
      text: "ATH is an abbreviation of the English term all time high or all-time high, meaning exactly the highest value of all time. This term refers to the price of an asset.",
    });
  };

  const alertThree = () => {
    Swal.fire({
      icon: "warning",
      title: "¿What is the rank?",
      text: "The rank is bassed on the market cap. Crypto market capitalization is the total value of a cryptocurrency. Where stock market capitalization is calculated by multiplying share price times shares outstanding, crypto market capitalization is calculated by multiplying the price of the cryptocurrency with the number of coins in circulation.",
    });
  };

  const handleChangeCurrency = (e) => {
    setToConvert(e.target.value);
  };

  const saveMarketData = () => {
    const { market_data } = currentCurrency;
    setMarketData(market_data);
  };

  const saveAth = () => {
    if (marketData) {
      const { ath } = marketData;
      setAth(ath);
    }
  };

  const saveFinalValue = () => {
    if (currentConvert != null && isNaN(priceBase) == false) {
      const finalValue = priceBase * currentConvert.last;
      setLastPrice(finalValue.toLocaleString("en-US"));
    }
  };

  const handleChangeEntry = (e) => {
    if (isNaN(e.target.value) == false) {
      setPriceBase(Number(e.target.value));
    }
  };

  return (
    <div className="container">
      <img src={img} />
      <div>
        <p>
          <FcBarChart />
          <span> </span>
          Rank: <b>{currentCurrency.market_cap_rank}</b>
          <span> </span>
          <span>
            <b>
              <AiOutlineQuestionCircle
                onClick={alertThree}
                className="button-alert"
              >
                <button></button>
              </AiOutlineQuestionCircle>
            </b>
          </span>
        </p>
        {ath ? (
          <p>
            <FcCollapse /> <span> </span> ATH (USD) : <b>{ath.usd}</b>{" "}
            <span> </span>
            <span>
              <b>
                <AiOutlineQuestionCircle
                  onClick={alertTwo}
                  className="button-alert"
                >
                  <button></button>
                </AiOutlineQuestionCircle>
              </b>
            </span>
          </p>
        ) : (
          <p>Loading</p>
        )}
        <p>
          <FcAlphabeticalSortingAz /> <span> </span>Name:{" "}
          <span>
            <b>{currentCurrency.name}</b>
          </span>
        </p>

        {currentCurrency.hashing_algorithm ? (
          <p>
            <FcUnlock /> <span> </span> Algorithm:{" "}
            <span>
              <b>
                {currentCurrency.hashing_algorithm} <span> </span>
                <AiOutlineQuestionCircle
                  onClick={alert}
                  className="button-alert"
                >
                  <button></button>
                </AiOutlineQuestionCircle>
              </b>
            </span>
          </p>
        ) : (
          <p>
            Algorithm:{" "}
            <span>
              
              <b>No available</b>
            </span>
          </p>
        )}

        <p>
          <FcCalculator /> Convert to : <span> </span>
          <select
            name=""
            id=""
            onChange={handleChangeCurrency}
            value={toConvert}
          >
            <option value=""> -- Seleccionar -- </option>
            <option value="USD"> USD </option>
            <option value="GBP"> GBP </option>
            <option value="EUR"> EUR </option>
            <option value="JPY"> JPY </option>
            <option value="ETH"> ETH </option>
            <option value="BTC"> BTC </option>
            <option value="BNB"> BNB </option>
          </select>
        </p>

        {currentConvert ? (
          <div className="results">
            <p>
              <input
                maxLength="14"
                onChange={handleChangeEntry}
                value={priceBase == undefined ? 1 : priceBase}
              />
              <b> {currentConvert.base}</b> = {lastPrice}{" "}
              <b style={{ color: "Green" }}>
                {currentConvert.target === "USD" ? (
                  <FaDollarSign />
                ) : currentConvert.target === "EUR" ? (
                  <FaEuroSign />
                ) : currentConvert.target === "GBP" ? (
                  <FaPoundSign />
                ) : currentConvert.target === "JPY" ? (
                  <FaYenSign />
                ) : null}
                {currentConvert.target}
              </b>
            </p>
          </div>
        ) : (
          <p>
            <b>No available</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default OneCoin;
