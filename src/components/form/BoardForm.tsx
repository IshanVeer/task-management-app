import Button from "../ui/Button";
import Card from "../ui/Card";

interface BoardFormProps {
  mode?: string;
}

const BoardForm = ({ mode }: BoardFormProps) => {
  return (
    <Card>
      {mode === "edit" ? (
        <>
          <h2 className="h2-bold">Edit Board</h2>
        </>
      ) : (
        <h2 className="h2-bold">Add New Board</h2>
      )}
      <form className="py-4" action="submit">
        <div className="flex flex-col gap-3 mb-6">
          {" "}
          <label className="body-bold text-light-600" htmlFor="name">
            Name
          </label>
          <input
            className="px-4 py-2 placeholder:text-[13px] border rounded-[4px]"
            placeholder="e.g. Web Design"
            id="name"
            type="text"
          />
        </div>
        {/* Columns */}
        <div className="w-full mb-2">
          <p className="mb-3 body-bold text-light-600">Columns</p>
          <div className="w-full flex items-center gap-4">
            <input
              placeholder="e.g. Make coffee"
              className="px-4 placeholder:text-[13px] w-full py-2 border rounded-[4px]"
              id="subtask"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="delete-column" />
            </button>
          </div>
          <Button
            classname="w-full mt-4"
            type="secondary"
            label="+ Add New Column"
          />
        </div>
        <Button classname="w-full mt-4" label="Create New Board" />
      </form>
    </Card>
  );
};

export default BoardForm;
