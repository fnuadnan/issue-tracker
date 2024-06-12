import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import { NewIssueForm } from "../entities/entities";
import useIssues from "../hooks/useIssues";
import { validateIssue } from "../utils/validationSchema";

const NewIssuePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const { register, control, handleSubmit, reset, formState: { errors }} = useForm<NewIssueForm>({
    resolver: zodResolver(validateIssue),
  });
  const { handleSend, error, loading } = useIssues();

  const onSubmit = async (data: NewIssueForm) => {
    const success = await handleSend(data);
    if (success) {
      reset();
      navigate("/"); // Navigate to the dashboard page
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
        <TextField.Root {...register("title")}  placeholder="Title"></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
          name="description" 
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={loading}> Submit New Issue {loading && <Spinner />} </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
