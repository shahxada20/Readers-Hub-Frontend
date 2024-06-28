import React from "react";
import Image from "next/image";
import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }) => {
  console.log("params", params);
  let bookData = null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    console.log("API Response Status:", response.status);
    if (!response.ok) {
      console.log("API Response Status:", response.status);
      throw new Error("Error fetching book");
    }
    bookData = await response.json();
    console.log("Fetched book data:", bookData);
  } catch (err) {
    console.error("Error occurred while fetching book:", err);
    throw new Error("Error fetching book");
  }
  const book = bookData.book;

  if (!book) {
    console.error("Book not found");
    throw new Error("Book not found");
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">
          by {book.author ? book.author.name : "Unknown Author"}
        </span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.cover}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
