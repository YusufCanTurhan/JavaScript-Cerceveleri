import React, { useState } from "react";
import "../index.css";

const KullaniciKart = ({ ad, yas, çevrimiçi, hobiler }) => {
  const [detayGoster, setDetayGoster] = useState(false);

  return (
    <div className="kart">
      <h2>{ad} - {yas} yaşında</h2>
      <p className={çevrimiçi ? "çevrimiçi" : "çevrimdışı"}>
        {çevrimiçi ? "Çevrimiçi" : "Çevrimdışı"}
      </p>
      <button onClick={() => setDetayGoster(!detayGoster)}>
        {detayGoster ? "Detayı Gizle" : "Göster Detay"}
      </button>
      {detayGoster && (
        <ul>
          {hobiler.map((hobi, i) => (
            <li key={i}>• {hobi}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KullaniciKart;
