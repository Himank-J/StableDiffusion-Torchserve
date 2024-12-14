"use client";

import { jobsAtom } from "@/lib/atoms";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useAtom } from "jotai";
import { useState } from "react";

export const PromptInput = () => {
  const [jobs, setJobs] = useAtom(jobsAtom);
  const [textInput, setTextInput] = useState(
    "An astronaut in space, oil pastel, aesthetic, bright colors, 8k"
  );
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async () => {
    setSubmitting(true);
    console.log("Submitting prompt:", textInput);
    console.log("API URL:", `${process.env.NEXT_PUBLIC_BACKEND_URL}/text-to-image?text=${textInput}`);

    try {
      console.log("Making API call...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/text-to-image?text=${textInput}`,
        {
          method: "POST",
        }
      );
      console.log("API response received:", response.status);

      const resJson = await response.json();
      console.log("Response JSON:", resJson);

      setJobs([
        ...jobs,
        {
          jobId: resJson["job-id"],
          prompt: textInput,
          status: "PENDING",
          url: "",
        },
      ]);
      console.log("Jobs updated successfully");
    } catch (e) {
      console.error("Error in API call:", e);
    } finally {
      setSubmitting(false);
      console.log("Submission completed");
    }
  };

  return (
    <div className="flex space-x-4 items-end w-full">
      <Input
        size="md"
        type="text"
        label="Prompt"
        value={textInput}
        labelPlacement="outside"
        onChange={(e) => {
          setTextInput(e.target.value ?? "");
        }}
      />
      <Button
        onClick={onSubmit}
        isDisabled={
          textInput.length < 10 ||
          jobs.filter((j) => j.status === "PENDING").length > 3
        }
        isLoading={submitting}
      >
        Submit
      </Button>
    </div>
  );
};
