import React from "react";

interface SubtasksProps {
  title: string;
  isCompleted: boolean;
}

interface CardProps {
  title: string;
  subtasks: SubtasksProps[];
}

const Card = ({ title, subtasks }: CardProps) => {
  return (
    <div className="background-light900_dark400 shadow-md/6 flex flex-col gap-2 px-4 py-6 rounded-md w-full">
      <p className="base-bold text-dark100_light900">{title}</p>
      <p className="body-bold text-light-600">{`${subtasks.length} subtasks`}</p>
    </div>
  );
};

export default Card;
