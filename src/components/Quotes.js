import { React, useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=success",
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'r2CBEN9bBC4tHiqsYKa6/g==Ymb9Ax7CT5bvAly0',
            },
          },
        );

        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="ml-2 font-bold text-white text-align: center; dark:text-gray-400 bg-green-500 p-6 rounded-lg shadow-lg justify-center  ">
        <ul>
          {data.map((item) => (
            <li key={item[0]}>
              {item.quote}
              --
              {item.author}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
}

export default Quotes;
