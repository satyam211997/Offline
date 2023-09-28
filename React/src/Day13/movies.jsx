import { useEffect, useState } from "react";
import axios from "axios";
import { GridLoader } from "react-spinners";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [electronic, setElectronics] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        console.log(data.data);
        setIsLoading(false);
        setMovies(data.data);
        setFilteredData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const results = movies.filter((item) => {
      const { title, description, category } = item;

      if (
        !electronic &&
        search &&
        (description.toLowerCase().match(search.toLowerCase()) ||
          title.toLowerCase().match(search.toLowerCase()))
      ) {
        console.log("HasSearch", search);
        return true;
      }

      if (
        electronic &&
        search &&
        category === "electronics" &&
        (description.toLowerCase().match(search.toLowerCase()) ||
          title.toLowerCase().match(search.toLowerCase()))
      ) {
        console.log("HasSearch & Electronics");

        return true;
      }

      if (electronic && !search && category === "electronics") {
        console.log("HasElectronics but not search");

        return true;
      }

      if (!electronic && !search) {
        console.log("No electronic & search");

        return true;
      }
    });

    console.log("result: ", results);
    setFilteredData(results);
  }, [search, movies, electronic]);

  /*   useEffect(() => {
    const results = movies.filter((item) => {
      const { category } = item;

      if (electronic && category === "electronics") {
        return true;
      } else if (!electronic) {
        return true;
      }
    });

    console.log("result: ", results);
    setFilteredData(results);
  }, [electronic, movies]); */

  return (
    <>
      <h1>Movies</h1>
      <input
        type="search"
        placeholder="search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="checkbox"
        value={electronic}
        name="electronic"
        onChange={(e) => setElectronics(e.target.checked)}
      />
      <label htmlFor="electronic">Electronic</label>

      <div>
        {isLoading ? (
          <GridLoader color="#36d7b7" />
        ) : (
          filteredData.map((current) => {
            return (
              <div style={{ border: "1px solid black" }} key={current.id}>
                <p>Title: {current.title}</p>
                <p>ID:{current.id}</p>
                <p>Discription:{current.description}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default Movies;
