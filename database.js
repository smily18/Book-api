const books = [
  {
    ISBN: "12345Book",
    title: "Getting started with MERN",
    pubDate: "2021-11-25",
    language: "en",
    numPage: 250,
    author: [1,2],
    publications: [1],
    category: ["tech", "programming", "education"]
  }
];

const authors = [
  {
    id: 1,
    name: "Aradhana",
    books: ["12345Book"]
  },
  {
    id: 2,
    name: "Elon Musk",
    books: ["12345Book"]
  }
];

const publications = [
  {
    id: 1,
    name: "Writex",
    books: ["12345Book"]
  },
  {
    id: 2,
    name: "Pentex",
    books: []
  }
];

module.exports = {books, authors, publications};
