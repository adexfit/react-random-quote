import React, { useState, useEffect } from "react";
import twitterLogo from "../assets/twitter.png";
const Quote = () => {
  const [quoteData, setQuoteData] = useState("");
  const [fetchNew, setFetchNew] = useState(false);
  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/photos")
    fetch("https://quotes-api-self.vercel.app/quote")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuoteData(data);
      });
  }, [fetchNew]);

  const handleClick = () => {
    setFetchNew((prevState) => {
      return !prevState;
    });
  };

  return (
    <section className="card" id="quote-box">
      {/* <pre> {JSON.stringify(quoteData)} </pre> */}
      <p id="text">{quoteData.quote}</p>
      <p id="author">{quoteData.author}</p>
      <div className="control_section">
        <img src={twitterLogo} alt="Twitter Logo" height={30} width={30} />
        <button id="new-quote" onClick={handleClick}>
          Next Quote
        </button>
      </div>
    </section>
  );
};

export default Quote;
