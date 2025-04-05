import seriesData from "../api/SeriesData.json";
// key prop
const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => {
        return (
          <li key={series.id} style={{ margin: "20px", listStyle: "none" }}>
            <div>
              <img
                src={series.img_url}
                alt="qot.jpg"
                width="40%"
                height="40%"
              />
            </div>
            <h2>name : {series.name}</h2>
            <h3 className={series.rating >= 8 ? "super_hit" : "average"}>
              rating : {series.rating}
            </h3>
            {/* <h3
              className={`rating timepass ${
                series.rating >= 8 ? "super_hit" : "average"
              }`}
            >
              rating : {series.rating}
            </h3> */}
            <p>summary : {series.description}</p>
            <p>genre : {series.genre}</p>
            <p>cast : {series.cast}</p>
            <a href={series.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NetflixSeries;
