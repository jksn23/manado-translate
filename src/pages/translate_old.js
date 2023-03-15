import { useState } from "react";
import Head from "next/head";
import styles from "../app/globals.css";

export default function Translate() {
  const [manadoInput, setManadoInput] = useState("");
  const [indonesianTranslation, setIndonesianTranslation] = useState("");

  const manadoToIndonesia = {
    kita: "saya",
    ngana: "anda",
    ngoni: "kalian",
    dia: "dia",
    dimana: "dimana",
    so: "sudah",
    makang: "makan",
    manjo: "ayo",
    ba: "sedang",
    di: "di",
    jalang: "jalan",
    torang: "kita",
    ngana: "kamu",
    makasi: "terima kasih",
    "sama-sama": "sama-sama",
    // Tambahkan kata atau frasa Manado dan terjemahannya di sini
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const words = manadoInput.split(" ");
    const translatedWords = words.map(
      (word) => manadoToIndonesia[word] || word
    );
    const translation = translatedWords.join(" ");
    setIndonesianTranslation(translation);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Translate Bahasa Manado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Translate Bahasa Manado</h1>


        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="input-1" htmlFor="manado-input">
                        Masukkan Kalimat Bahasa Manado
                    </label>
                        <input id="manado-input"
                        type="text"
                        value={manadoInput}
                        onChange={(e) => setManadoInput(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Masukkan nama Anda">
                </div>
            </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Terjemahkan
                        </button>
                    </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>

{indonesianTranslation && (
          <div>
            <h2>Terjemahan dalam bahasa Indonesia:</h2>
            <p>{indonesianTranslation}</p>
          </div>
        )}

      </main>

      <footer className={styles.footer}>Powered by Next.js</footer>
    </div>
  );
}
