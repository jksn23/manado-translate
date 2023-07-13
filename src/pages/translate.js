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
            "https://surgaiptek.blogspot.com/2023/07/cara-menghitung-koefisien-permeabilitas.html",
            "https://surgaiptek.blogspot.com/2023/07/analisis-ukuran-butiran.html",
            "https://surgaiptek.blogspot.com/2023/07/pada-kondisi-dilapangan-tanah-mempunyai.html",
            "https://surgaiptek.blogspot.com/2023/07/pada-kondisi-di-lapangan-tanah.html",
            "https://surgaiptek.blogspot.com",
            "https://surgaiptek.blogspot.com/2023/07/revolusi-teknologi-5g-kecepatan-dan.html",
            "https://surgaiptek.blogspot.com/2023/07/quantum-computing-revolusi-komputasi-di.html",
            "https://surgaiptek.blogspot.com/2023/07/transformasi-teknologi-zaman.html",
            "https://surgaiptek.blogspot.com/2023/07/cara-membuat-program-segitiga.html",
            "https://surgaiptek.blogspot.com/2023/07/cara-mengakses-printer-dari-luar.html",
            "https://surgaiptek.blogspot.com/2023/07/cara-membuat-program-untuk-menghitung.html",
            "https://surgaiptek.blogspot.com/2023/07/soal-dan-jawaban-hubungan-database.html",
            "https://surgaiptek.blogspot.com/2023/07/soal-beserta-jawaban-tentang-pancasila.html",
            "https://surgaiptek.blogspot.com/2023/07/5-contoh-perusahaan-di-luar-negeri-yang.html",
            "https://surgaiptek.blogspot.com/2023/07/cara-mengganti-extension-file-secara.html",
            "https://surgaiptek.blogspot.com/2023/07/balok-sederhana-ab-dibebani-oleh-beban.html",
            "https://surgaiptek.blogspot.com/2023/07/balok-sederhana-ab-dibebani-oleh-beban.html",
            "https://tipsntrik-kehidupan.blogspot.com/",
            "https://crazyfun-fool.blogspot.com/",
            "https://tentang-esports.blogspot.com/",
            "https://infopemilu-2024.blogspot.com/"
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
