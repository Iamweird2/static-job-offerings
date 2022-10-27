import Head from "next/head";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Card from "../components/Card";
import Filter from "../components/Filter";
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  const [originalData, setOriginalData] = useState(data);
  const [cardData, setCardData] = useState(data);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  console.log(openFilter);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  // useEffect(() => {
  //   fetch("http://localhost:8000/resource")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => (setCardData(data), setOriginalData(data)));
  // }, []);

  return (
    <div className="w-full h-auto bg-bodyColor pb-10">
      <Head>
        <title>static-job-listings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full h-[156px] bg-headerColor  bg-mobile-header sm:bg-desktop-header bg-no-repeat relative">
        {openFilter && (
          <Filter
            setOpenFilter={setOpenFilter}
            openFilter={openFilter}
            setFilterArray={setFilterArray}
            cardData={cardData}
            setCardData={setCardData}
            originalData={originalData}
            filterArray={filterArray}
          />
        )}
      </header>

      <main
        className={
          openFilter
            ? "mt-32 flex flex-col gap-12 sm:gap-6"
            : "mt-16 flex flex-col gap-12 sm:gap-6"
        }
      >
        {cardData &&
          cardData.map((eachData) => {
            return (
              <Card
                key={v4()}
                eachData={eachData}
                filterArray={filterArray}
                setFilterArray={setFilterArray}
                setOpenFilter={setOpenFilter}
                cardData={cardData}
                setCardData={setCardData}
                originalData={originalData}
              />
            );
          })}
      </main>
    </div>
  );
}
