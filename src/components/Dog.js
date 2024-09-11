"use client"
import { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BallTriangle } from 'react-loader-spinner';

const FetchDogs = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  return response.json();
};

const Dog = () => {
  const [dog, setDog] = useState({ message: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setInterval(async () => {
      const fetchedDog = await FetchDogs()
      setDog(fetchedDog)
    }, 10000);
    setLoading(false)
  }, []);

  return (
    <div className="bg-slate-950 rounded-md text-white flex flex-col gap-2 p-2 h-full">
      <div className="flex flex-row justify-center laptop:justify-between items-center px-2">
        <div className="flex flex-col items-center laptop:items-start mb-5 laptop:mb-0">
          <h2>Dog Api</h2>
          <p className="text-sm text-blue-500">Dog lover like me?</p>
        </div>
        <BsArrowUpRightCircleFill size={20} color="blue" className="hidden laptop:block" />
      </div>

      <div className="m-auto flex justify-center items-center">
        {loading ? (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#3b82f6"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <img alt="dog image" className="w-52 h-52 object-cover rounded-xl" src={dog.message} width={100} height={100} />
        )}
      </div>
    </div>
  );
};

export default Dog;
