import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  // useState Hook to store the pokemon data
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API url
  const fetchAPI = "https://pokeapi.co/api/v2/pokemon?limit=24";

  // fetching data from API using async/await
  const fetchPokemons = async () => {
    try {
      const response = await fetch(fetchAPI);
      const data = await response.json();
      console.log(data);

      // here API inside API so calling again inner API
      const pokemonData = data.results.map(async (pokemon) => {
        //afetr this line we are inside the inner API (in results)
        // console.log(pokemon.url);
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
        // on return data is shows all the fulfilled return promisees in console
      });
      // console.log(pokemonData);

      const pokemondetailedData = await Promise.all(pokemonData);
      console.log(pokemondetailedData);
      // this will give all the data of pokemons

      setPokemon(pokemondetailedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);

      setLoading(false);
      setError(error);
    }
  };

  // getting data by using useEffect
  useEffect(() => {
    fetchPokemons();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <h1>Error found {error.message}.</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Catch Pokemon </h1>
        </header>
        <div>
          <ul className="cards">
            {pokemon.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
