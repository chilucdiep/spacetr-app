const FeedPage = ({ pictures }: any) => {
  return (
    <div>
      {pictures.map((picture: any) => (
        <img src={picture.url}></img>
      ))}
    </div>
  );
};

export default FeedPage;
