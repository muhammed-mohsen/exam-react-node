import React from "react";

const FormName = ({ name, onChange, onSubmit }) => {
  return (
    <div className="w-full h-3/6 flex flex-col	 justify-center items-center">
      <p className="text-2xl text-indigo-800 ml-2 font-semibold my-5">
        {" "}
        Please enter your name{" "}
      </p>
      <input
        type="text"
        className="shadow appearance-none border border-indigo-800 rounded w-3/6 py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        value={name}
        onChange={onChange}
      />

      <button
        onClick={onSubmit}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default FormName;
