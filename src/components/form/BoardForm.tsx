import Card from "../ui/Card";

interface BoardFormProps {
  mode?: string;
}

const BoardForm = ({ mode }: BoardFormProps) => {
  return (
    <Card>
      {mode === "edit" ? <h2>Edit Board</h2> : <h2>Add New Board</h2>}
    </Card>
  );
};

export default BoardForm;
