import React from "react";
import "./index.css";
import Pokemon from "./Pokemon";

const PokemonCards = ({ key, pokemonData }) => {
  return (
    <>
      <li key={key} className="pokemon-card">
        {/* image  */}
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>

        {/* name of pokemon */}
        <h1 className="pokemon-name"> {pokemonData.name}</h1>

        {/* type of [pokemon] */}
        <div className="pokemon-highlight pokemon-info">
          <p>
            {pokemonData.types.map((curType) => curType.type.name).join(", ")}
          </p>
        </div>

        {/* property of [pokemon] */}
        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span>Height: </span>
            {pokemonData.height}
          </p>
          <p className="pokemon-info">
            <span>weight: </span>
            {pokemonData.weight}
          </p>
          <p className="pokemon-info">
            <span>Speed: </span>
            {pokemonData.stats[5].base_stat}
          </p>
        </div>

        {/* other properties of pokemon */}
        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>{pokemonData.base_experience}</p>
            <span>Experience :</span>
          </div>
          <div className="pokemon-info">
            <p>{pokemonData.stats[1].base_stat}</p>
            <span>Attack :</span>
          </div>
          <div className="pokemon-info">
            <p>
              {pokemonData.abilities
                .map((curAbility) => curAbility.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
            <span>Abilities :</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default PokemonCards;
