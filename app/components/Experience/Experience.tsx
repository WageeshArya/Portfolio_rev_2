import React from "react";
import Title from "./Title";
import { experience } from "@/app/helpers/experience";
import Card from "./Card/Card";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div>
      <Title />
      <div>
        {experience.map((item: any, index: number) => {
          return <Card key={item.company} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
