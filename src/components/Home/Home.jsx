import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="article-container">
      <article>
        <div className="title-container">
          <h1 className="title">About this site</h1>
        </div>
        <div className="first-article">
          <p className="btc-description">
            Learn about cryptocurrencies and what is the price of each of the
            <Link to={"/crypto-list"} style={{ marginLeft: "10px" }}>
              Top 100
            </Link>
          </p>
        </div>
        <img src="/imgs/cryptocurrency.png" className="img-cryptos" />
      </article>
      <article>
        <h1>¿What is a cryptocurrency?</h1>
        <div className="first-article">
          <img src="/imgs/bitcoin.png" className="img-btc" />
          <p className="btc-description">
            A cryptocurrency is a digital or virtual currency that is secured by
            cryptography, which makes it nearly impossible to counterfeit or
            double-spend. Many cryptocurrencies are decentralized networks based
            on blockchain technology—a distributed ledger enforced by a
            disparate network of computers. A defining feature of
            cryptocurrencies is that they are generally not issued by any
            central authority, rendering them theoretically immune to government
            interference or manipulation. To buy cryptocurrency, first you need
            to pick a broker or a crypto exchange. While either lets you buy
            crypto, there are a few key differences between them to keep in
            mind.
          </p>
        </div>
      </article>
      <article>
        <h1>¿What is a crypto exchange...?</h1>
        <div className="first-article">
          <p className="btc-description">
            A cryptocurrency exchange is a platform where buyers and sellers
            meet to trade cryptocurrencies. Exchanges often have relatively low
            fees, but they tend to have more complex interfaces with multiple
            trade types and advanced performance charts, all of which can make
            them intimidating for new crypto investors.
          </p>
          <img src="/imgs/exchange.png" className="img-btc" />
        </div>
      </article>
      <article>
        <h1>¿...And a broker?</h1>
        <div className="first-article">
          <img src="/imgs/broker.png" className="img-btc" />
          <p className="btc-description">
            Cryptocurrency brokers take the complexity out of purchasing crypto,
            offering easy-to-use interfaces that interact with exchanges for
            you. Some charge higher fees than exchanges. Others claim to be
            “free” while making money by selling information about what you and
            other traders are buying and selling to large brokerages or funds or
            not executing your trade at the best possible market price.
          </p>
        </div>
      </article>
      <article>
        <div className="pros-contras">
          <div>
            <ul className="ventajas">
              <h1 className="ventajas-title">Advantages</h1>
              <li>
                A high risk and the possibility of obtaining great profits
              </li>
              <li>
                Blockchain, the technology on which cryptocurrencies are based,
                is very secure
              </li>
              <li>
                Goodbye traditional banks: let's say hello to a fairer and more
                transparent financial system
              </li>
              <li>The cryptocurrency market is always open</li>
            </ul>
          </div>
          <span className="stick"></span>
          <div>
            <ul className="desventajas">
              <h1 className="desventajas-title">Disadvantages</h1>
              <li>Understanding cryptocurrencies takes time and effort</li>
              <li>Cryptocurrencies can be an extremely volatile investment</li>
              <li>Beginners are vulnerable to security risks</li>
              <li>Not a universally accepted payment method</li>
            </ul>
          </div>
        </div>
      </article>
      <footer>
        <p>All rights reserved</p>
        <a href="https://mi-portafolio-facu.netlify.app/" target="_blank">
          By Facundo García
        </a>
      </footer>
      
    </div>
  );
};

export default Home;
