const PictureDetail = ({ pictures }: any) => {
  return (
    <div>
      {pictures.map((picture: any) => {
        if (
          `http://localhost:3000/feed/${picture.title
            .split(" ")
            .join("%20")}` === String(window.location.href)
        ) {
          return (
            <>
              <img src={picture.url}></img>
              <h1>{picture.title}</h1>
              <p>{picture.date}</p>
              <p>{picture.explanation}</p>
            </>
          );
        } else return null;
      })}
    </div>
  );
};

export default PictureDetail;
