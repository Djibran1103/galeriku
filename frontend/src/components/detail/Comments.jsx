import { useState } from "react";

const Comments = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleHoverRating = (value) => {
    setHoverRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      comment,
      rating,
      date: new Date().toLocaleDateString(),
      userName,
    };
    setCommentsList([newComment, ...commentsList]);
    setRating(0);
    setComment("");
    setUserName("");
  };

  const renderStars = (numStars) => {
    const yellowStarStyle = {
      color: "#FFD700",
    };
    if (numStars > 0) {
      return <span style={yellowStarStyle}>{"★".repeat(numStars)}</span>;
    }
    return "";
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4 mx-5">
      <h3 className="text-lg font-semibold mb-2">Pendapat Anda</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          className="w-full h-10 border border-gray-300 p-2 rounded-md mb-2"
          placeholder="Nama Anda"
        />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full h-24 border border-gray-300 p-2 rounded-md mb-2 resize-none"
          placeholder="Tambahkan pendapat Anda..."
        ></textarea>
        <div className="flex items-center mb-4">
          <p className="mr-2">Beri Rating: </p>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRating(value)}
              onMouseEnter={() => handleHoverRating(value)}
              onMouseLeave={() => handleHoverRating(0)}
              className={`text-2xl focus:outline-none ${
                value <= hoverRating ? "text-[#FFD700]" : "text-gray-400"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {commentsList.map((item, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg">
            <p>Rating: {renderStars(item.rating)}</p>
            <p>User: {item.userName}</p>
            <p>Comment: {item.comment}</p>
            <p>Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
