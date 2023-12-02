import { useState } from 'react';

const Comments = () => {
  const [rating, setRating] = useState(0); // State untuk menyimpan rating

  const handleRating = (value) => {
    // Fungsi untuk menetapkan rating
    setRating(value);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">Pendapat Anda</h3>
      <textarea
        className="w-full h-24 border border-gray-300 p-2 rounded-md mb-2 resize-none"
        placeholder="Tambahkan pendapat Anda..."
      ></textarea>
      {/* Rating Bintang */}
      <div className="flex items-center">
        <p className="mr-2">Beri Rating: </p>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className={`text-2xl focus:outline-none ${
              value <= rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
          >
            ★
          </button>
        ))}
        <button className="bg-[#F9D86C] hover:bg-[#E9615A] text-white font-bold py-2 px-4 ml-2 rounded">
          Submit
        </button>
      </div>
      
    </div>
  );
};

export default Comments;
