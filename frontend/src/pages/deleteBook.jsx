import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";

const deleteBook = () => {
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const HandleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occured.");
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounder-xl w-[600px] p-8 mx-auto">
        <h3 className="text 2xl">Are you sure you want to delete this Book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={HandleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default deleteBook;
