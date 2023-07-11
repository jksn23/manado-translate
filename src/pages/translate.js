import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../app/globals.css";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Script from 'next/script';

function translateManadoToIndonesia(manadoText) {
  // Objek pemetaan kata-kata dari bahasa Manado ke bahasa Indonesia
  const wordMapping = {
    kita: "saya",
    ngana: "anda",
    ngoni: "kalian",
    dia: "dia",
    dimana: "dimana",
    so: "sudah",
    apa: "apa",
    makang: "makan",
    manjo: "ayo",
    ba: "sedang",
    di: "di",
    jalang: "jalan",
    torang: "kita",
    ngana: "kamu",
    makasi: "terima kasih",
    "sama-sama": "sama-sama",
    Aer: "air",
    Alus: "halus",
    Ancor: "hancur",
    Aus: "haus",
    Asang: "asam",
    Babale: "kembali",
    Bacubi: "berkedip",
    Badiri: "berdiri",
    Bajalang: "berjalan",
    Bakubawa: "bersama-sama",
    Capat: "cepat",
    "Cari Slak": "cari cara",
    Cuma: "hanya",
    Cica: "cecak",
    Cao: "bolos",
    Doi: "uang",
    Dapa: "dapat",
    dudu: "duduk",
    Dusu: "kejar",
    Dorang: "mereka",
    "Dapa Tahu": "ketahuan",
    // Tambahkan mapping lainnya sesuai kebutuhan
  };

  // Memisahkan kata-kata dalam kalimat
  const words = manadoText.split(" ");

  // Menerjemahkan kata-kata satu per satu
  const translatedWords = words.map((word) => {
    return wordMapping[word.toLowerCase()] || word;
  });

  // Menggabungkan kata-kata yang telah diterjemahkan menjadi kalimat
  const translatedText = translatedWords.join(" ");

  return translatedText;
}

function HomePage() {
  const [manadoText, setManadoText] = useState("");
  const [indonesiaText, setIndonesiaText] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Script iklan akan dijalankan hanya saat komponen di-render di sisi klien
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(){
        setInterval(function(){
          var redSites = [
            "https://arcticwarningtraffic.com/qs1n38xs6?key=a1dedb85382f104dac457b47b91ec7cd",
            "https://arcticwarningtraffic.com/drpcat9fu?key=190b9c0d818252c2c4be2f73631db0f1",
            "https://arcticwarningtraffic.com/e6a1s64na?key=214fcc2b704d6ee1bf2e8758c0dfb325",
            "https://arcticwarningtraffic.com/vbb0civ2mp?key=1cf0888898bf37082cab826ea32c7437",
            "https://surgaiptek.blogspot.com",
            "https://arcticwarningtraffic.com/fnjadtas?key=1fe1b55790a6bdc4fb79065e63ffee2e",
            "https://arcticwarningtraffic.com/fzi39xhv?key=0bef3aa166d05ed5d3c88aa74985b697",

            "https://arcticwarningtraffic.com/pfded3is?key=24bb5db35c6c7a21cc8029074980b121",
            "https://arcticwarningtraffic.com/vi01j3pi?key=ace8c88f960cf96a865aa0deb72ac710",
            "https://arcticwarningtraffic.com/gy9y3zf324?key=2c96d27d50e0fe3d346dfe0f80bf7398",
            "https://arcticwarningtraffic.com/vy9ctss4?key=4622ecfced93857fc81684660592bc64",
            "https://tipsntrik-kehidupan.blogspot.com/",
            "https://crazyfun-fool.blogspot.com/"
          ];
          var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
          window.open(randomLinks, '_blank');
        }, 15000);
      }());
    `;
    document.body.appendChild(script);

    return () => {
      // Membersihkan script iklan saat komponen tidak lagi digunakan
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const translatedText = translateManadoToIndonesia(manadoText);
    setIndonesiaText(translatedText);
  };

  const handleClickAd = () => {
    window.open('https://arcticwarningtraffic.com/vy9ctss4?key=4622ecfced93857fc81684660592bc64');
  }


  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Translate Bahasa Manado</title>
      </Head>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <Link href="/"> Kembali </Link>
        <div className="mb-4">
          <label
            htmlFor="manado-text"
            className="block font-medium mb-2 text-gray-700"
          >
            Masukkan kata atau kalimat dalam bahasa Manado
          </label>
          <textarea
            id="manado-text"
            name="manado-text"
            value={manadoText}
            onChange={(e) => setManadoText(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="indonesia-text"
            className="block font-medium mb-2 text-gray-700"
          >
            Terjemahan ke bahasa Indonesia
          </label>
          <textarea
            id="indonesia-text"
            name="indonesia-text"
            value={indonesiaText}
            readOnly
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Terjemahkan
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
