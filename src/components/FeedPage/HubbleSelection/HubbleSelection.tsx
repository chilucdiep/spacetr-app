// import useHubblePicture from "../../../hooks/useHubblePicture";

import moment from "moment";
import { useState } from "react";
import { SelectOption } from "../../../types/Interfaces";
import { Select } from "../../Select/Select";

export default function HubbleSelection() {
  // const { picture } = useHubblePicture("January 1 2019");
  //   console.log(picture);

  // const testMarkup = picture ? (
  //   <div>
  //     <p>{picture.Name}</p>
  //     <img
  //       src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
  //       alt="Hubble pic"
  //     />
  //   </div>
  // ) : null;

  const monthsOptions = moment
    .months()
    .map((month, idx) => ({ label: month, value: idx + 1 }));

  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >(monthsOptions[0]);
  console.log(selectedOption);

  const singleSelectComponentMarkup = (
    <Select
      maxWidth="500px"
      onChange={(option: SelectOption | undefined) => setSelectedOption(option)}
      options={monthsOptions}
      selectedOption={selectedOption}
    />
  );

  return <section>{singleSelectComponentMarkup}</section>;
}
