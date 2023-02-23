import useHubblePicture from "../../../hooks/useHubblePicture";

export default function HubbleSelection() {
  const { picture } = useHubblePicture("January 1 2019");
  //   console.log(picture);

  return (
    <section>
      {picture ? (
        <div>
          <p>{picture.Name}</p>
          <img
            src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
            alt="Hubble pic"
          />
        </div>
      ) : null}
    </section>
  );
}
