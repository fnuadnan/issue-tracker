import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { IssueFormData, NewIssueForm } from "../entities/entities";
import useIssue from "../hooks/useIssue";
import { validateIssue } from "../utils/validationSchema";

const IssueForm = ({ issue }: { issue?: IssueFormData }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewIssueForm>({
    resolver: zodResolver(validateIssue),
  });

  const { handleSend, updateIssue, loading, error } = useIssue(); // Unified hook for handling issues

  const onSubmit = async (data: NewIssueForm) => {
    if (issue) {
      const success = await updateIssue(data);
      if (success) {
        navigate("/issues"); // Navigate to the dashboard page
      }
    } else {
      const success = await handleSend(data);
      if (success) {
        reset();
        navigate("/issues"); // Navigate to the dashboard page
      }
    }
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
          defaultValue={issue?.title}
          placeholder="Title"
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={loading}>
          {issue ? "Update Issue" : "Submit New Issue"}
          {loading && <Spinner />}{" "}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
