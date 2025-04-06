import seriesData from "../../api/SeriesData.json";
import styles from "./Module_Css.module.css";

// key prop
const Module_Css = () => {
  return (
    <ul>
      {seriesData.map((series) => {
        return (
          <li
            className={styles.timepass}
            key={series.id}
            style={{ margin: "20px", listStyle: "none" }}
          >
            <div>
              <img
                src={series.img_url}
                alt="qot.jpg"
                width="40%"
                height="40%"
              />
            </div>
            <h2 className={styles.timepass}>name : {series.name}</h2>
            {/* <h3
              className={
                series.rating >= 8 ? "styles.super_hit" : "styles.average"
              }
            >
              rating : {series.rating}
            </h3> */}
            <h3
              className={`${styles.rating} ${styles.timepass} ${
                series.rating >= 8 ? "styles.super_hit" : "styles.average"
              }`}
            >
              rating : {series.rating}
            </h3>
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

export default Module_Css;
