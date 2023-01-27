import "./style.scss";

const Card = ({ dataCard }) => {
  return (
    <div className={`card ${dataCard?.id?.channelId ? "channal" : ""}`}>
      <div className="card_img">
        <a href="/#">
          <img
            src={dataCard?.snippet?.thumbnails?.medium?.url}
            alt=""
            loading="lazy"
          />
        </a>
      </div>
      <div className="card_info">
        <div className="card_title">
          <h2>
            <a href="/#">{dataCard?.snippet?.title}</a>
          </h2>
        </div>
        <div className="card_name">
          <h5>
            <a href="/#">{dataCard?.snippet?.channelTitle}</a>
          </h5>
        </div>
        <div className="card_description">
          <p>
            {dataCard?.snippet?.description.split(" ").slice(0, 6).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
