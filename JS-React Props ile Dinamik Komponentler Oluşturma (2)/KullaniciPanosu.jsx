import React from "react";
import KullaniciKart from "./KullaniciKart";

const KullaniciPanosu = () => {
  const kullanicilar = [
    {
      id: 1,
      ad: "Yusuf Can Turhan",
      yas: 20,
      çevrimiçi: true,
      hobiler: ["Bilgisayara Bakmak", "Yüzmek", "Kodlama"],
    },
    {
      id: 2,
      ad: "Elif Günal",
      yas: 21,
      çevrimiçi: false,
      hobiler: ["Resim Yapmak", "Doğa Yürüyüşü", "Pasta Yapmak"],
    },
    {
      id: 3,
      ad: "Polat Can",
      yas: 22,
      çevrimiçi: true,
      hobiler: ["Basketbol", "Oyun Oynamak", "Müzik Dinlemek"],
    },
  ];

  return (
    <div className="App">
      <h1>Kullanıcı Panosu</h1>
      {kullanicilar.map((kullanici) => (
        <KullaniciKart key={kullanici.id} {...kullanici} />
      ))}
    </div>
  );
};

export default KullaniciPanosu;
