import { useEffect, useState } from "react";
import Card from "components/Card";
import { useSelector } from "react-redux";
import Loading from "components/Loading/index";

const SideBar = () => {
  const cardList = useSelector((state: any) => state.card?.cardItems);
  const [cardAll, SetCardAll] = useState([]);

  useEffect(() => {
    if (cardList) {
      SetCardAll(cardList);
    }
  }, [cardList]);

  return (
    <div className="sidebar">
      {!cardAll.length ? (
        <Loading />
      ) : (
        cardAll?.map((cardItem: any) => (
          <Card key={cardItem.etag} dataCard={cardItem} />
        ))
      )}
    </div>
  );
};

export default SideBar;
