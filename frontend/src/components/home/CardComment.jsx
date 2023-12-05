import { useState } from "react";

const CardComment = () => {
  const [offset, setOffset] = useState(0);

  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M13.707 15.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L8.414 9H18a1 1 0 1 1 0 2H8.414l5.293 5.293a1 1 0 0 1 0 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-600 "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L11.586 11H2a1 1 0 1 1 0-2h9.586L6.293 5.707a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const cards = [
    {
      title: "Rifqah Azzah Mu'tasimah",
      content:
        "Ternyata selama ini seni yang saya buat adalah sebuah hal yang perlu diresapi",
    },
    {
      title: "Ramadhan Djibran Sanjaya",
      content:
        "Oiiii kiyomasaaa nande nandeeee, Seniku harus kalian kasih rate 5",
    },
    {
      title: "Ariq Huwaidi",
      content:
        "Mengapa selama ini ternyata menyukai videoku cuman malu malu ngomongnya awokwokwok",
    },
    {
      title: "Devan A.D",
      content: "Kalian semua mendokse, just nikmati",
    },
    {
      title: "Erika B.C",
      content:
        "Saya sangat terkesan dengan keragaman gambar di situs koleksi ini. Setiap karya memberikan inspirasi yang luar biasa bagi saya.",
    },

    {
      title: "Rizki F.E",
      content:
        "Website ini adalah tempat yang luar biasa untuk mengeksplorasi seni visual. Saya menemukan banyak ide baru untuk proyek-proyek masa depan dari koleksi yang ada di sini.",
    },

    {
      title: "Alya G.H",
      content:
        "Koleksi gambar di situs ini begitu menginspirasi. Saya sering merujuk ke sini untuk mendapatkan dorongan kreatif dan melihat perspektif yang berbeda.",
    },

    {
      title: "Farhan I.J",
      content:
        "Situs ini adalah sumber tak ternilai untuk seni visual. Saya menemukan banyak ide dan nuansa yang membantu saya berkembang dalam gaya seni saya sendiri.",
    },
    {
      title: "Farhan I.J",
      content:
        "Situs ini adalah sumber tak ternilai untuk seni visual. Saya menemukan banyak ide dan nuansa yang membantu saya berkembang dalam gaya seni saya sendiri.",
    },
    {
      title: "Farhan I.J",
      content:
        "Situs ini adalah sumber tak ternilai untuk seni visual. Saya menemukan banyak ide dan nuansa yang membantu saya berkembang dalam gaya seni saya sendiri.",
    },
    {
      title: "Farhan I.J",
      content:
        "Situs ini adalah sumber tak ternilai untuk seni visual. Saya menemukan banyak ide dan nuansa yang membantu saya berkembang dalam gaya seni saya sendiri.",
    },
  ];

  const slideCards = (direction) => {
    const cardWidth = 340;
    const maxOffset = (cards.length - 1) * cardWidth;
    let newOffset = offset + direction * cardWidth;
    newOffset = Math.min(0, Math.max(-maxOffset, newOffset));
    setOffset(newOffset);
  };

  return (
    <div className="relative px-24 overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(${offset}px)` }}
      >
         {cards.map((card, index) => (
            <div key={index} className="mx-2 flex-shrink-0 w-72">
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="px-5 py-5">
                  <a href="#">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                    </h1>
                    <p className="dark:text-gray-400">{card.content}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-2 bg-gray-300 dark:bg-slate-900 dark:hover:bg-gray-300 rounded ${
          offset === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        onClick={() => slideCards(1)}
        disabled={offset === 0}
      >
        <LeftArrow />
      </button>
      <button
        className={`absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-2 bg-gray-300 dark:bg-slate-900 dark:hover:bg-gray-300 rounded ${
          offset === -(cards.length - 1) * 340
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100"
        }`}
        onClick={() => slideCards(-1)}
        disabled={offset === -(cards.length - 1) * 340}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default CardComment;
