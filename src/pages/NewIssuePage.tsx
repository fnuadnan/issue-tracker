import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { IssueForm } from "../entities/entities";
import useIssues from "../hooks/useIssues";

const NewIssuePage = () => {
  const { register, control, handleSubmit, reset } = useForm<IssueForm>();
  const { handleSend, error } = useIssues();

  const onSubmit = (data: IssueForm) => {
    handleSend(data);
    reset();
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root
          {...register("title")}
          placeholder="Title"
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
