import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Lakukan validasi atau simpan ke database/penyimpanan yang sesuai
      if (
        !name ||
        !email ||
        !password ||
        !gender ||
        !phoneNumber ||
        !birthdate
      ) {
        throw new Error("Semua kolom harus diisi");
      }

      // Simpan data ke local storage atau tempat penyimpanan yang sesuai
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("birthdate", birthdate);

      // Setelah registrasi berhasil, arahkan pengguna ke halaman lain
      navigate("/login");
      window.alert("Registrasi Berhasil, Silakan Login");
    } catch (error) {
      window.alert(
        "Terdapat kesalahan saat melakukan registrasi: " + error.message
      );
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="block max-w p-16 bg-gray-100 mx-32 border shadow-xl border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="font-bold text-center text-6xl text-[#E9615A] mb-8">
        Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Gender
        </label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
              className="form-radio text-[#E9615A] dark:text-blue-600"
            />
            <span className="ml-2 text-gray-700 dark:text-white">Male</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
              className="form-radio text-[#E9615A] dark:text-blue-600"
            />
            <span className="ml-2 text-gray-700 dark:text-white">Female</span>
          </label>
        </div>
        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Birth Date
        </label>
        <input
          type="date"
          id="birthdate"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-[#E9615A] w-[500px] text-center mt-10 place-content-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignForm;
