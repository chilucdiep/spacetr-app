import useHubblePicture from "../../../hooks/useHubblePicture";

export default function HubbleSelection() {
  const { picture } = useHubblePicture("January 1 2019");
  console.log(picture);

  return (
    <section>
      <p>{picture.Name}</p>
    </section>
  );
}
