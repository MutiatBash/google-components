import { useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  width: 30rem;
  position: relative;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 1rem;
  box-shadow: 0 1px 10px 0 rgba(221, 221, 221, 0.8);
  //   background-color: lightcream;
  padding: 1rem 2rem;
  margin: 1.5rem 1rem;
`;
const P = styled.p`
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  padding: 1rem 1.2rem;
  margin: 1rem 3rem;
  font-weight: 500;
  //   background-color: rgb(249, 241, 232);
  background-color: rgb(246, 246, 246);
  //   padding: 1rem 1.5rem rgb(250, 235, 215) ;
`;
const Input = styled.input`
  border-radius: 50px;
  border: none;
  outline: 0;
  width: 100%;
  //   box-shadow: 0 1px 10px 0 rgb(221, 221, 221);
  //   //   background-color: lightcream;
  //   padding: 1rem 25rem 1rem 2.8rem;
  //   margin: 1.5rem 1rem;
  padding: 0 1rem;
`;
const Button = styled.button`
  background-color: #1599ae;
  border: none;
  display: flex;
  margin: 1rem auto;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  padding: 1rem 4rem;
  color: white;
`;
export default function SearchBar() {
  const [searchInput, setsearchInput] = useState("");
  const [searchResult, setsearchResult] = useState("");

  //   useEffect(() => {
  //     setSearchData(searchData);
  //     console.log("component just created");
  //   }, [searchData, setSearchData]);

  const handleKeySearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setsearchInput(event.target.value);
      setsearchResult(searchInput);
      console.log("items searched");
    }
  };
  //   function handleSubmit() {
  //     e.preventDefault();
  //     setsearchInput({ searchInput });
  //     return <p>{searchInput}</p>;
  //   }

  const handleInput = (event) => {
    setsearchInput(event.target.value);
    console.log("searching");
  };

  return (
    <div>
      <Form>
        <img
          src={"./images/search.png"}
          alt="google search"
          className=" search"
        />
        <Input
          type="search"
          id="search"
          name="searchInput"
          placeholder="Search Google or type a URL"
          value={searchInput}
          onChange={handleInput}
          onKeyDown={handleKeySearch}
        />
        <img src={"./images/mic.png"} alt="google mic" className=" mic" />
      </Form>
      <P>{searchResult}</P>
    </div>
  );
}
