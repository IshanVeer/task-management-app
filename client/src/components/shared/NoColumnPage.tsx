import React from "react";
import Button from "../ui/Button";
import { ModalTypes } from "@/types";

interface NoColumnPageProps {
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

const NoColumnPage = ({ setModalType }: NoColumnPageProps) => {
  return (
    <div className="text-center pt-52 flex flex-col items-center">
      <p className="text-light-600 base-bold my-7">
        This board is empty. Create a new column to get started.
      </p>
      <Button
        onClick={() => setModalType("edit-board")}
        type="button"
        label="+ Add New Column"
      />
    </div>
  );
};

export default NoColumnPage;
