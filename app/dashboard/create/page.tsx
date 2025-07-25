"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleSubmission } from "@/app/actions";
import { Submitbutton } from "@/components/general/Submitbutton";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import Summarize from "@/components/general/Summarize";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

type ButtonVariant = VariantProps<typeof Button>["variant"];

export default function CreateBlogRoute() {
  const [text, setText] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }, []);

  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("outline");
  useState<ButtonVariant>("outline");

  const [recording, setRecording] = useState("");

  function handleOnRecord() {
    console.log("clicked");
    setRecording("Recording!");
    setButtonVariant("destructive");
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.lang = "en-US";
    recognition.onresult = async function (event) {
      const transcript = event.results[0][0].transcript;
      setText(text + " " + transcript);
      setButtonVariant("outline");
      setRecording("");
    };
  }

  function RecordButton() {
    return (
      <Button variant={buttonVariant} type="button" onClick={handleOnRecord}>
        {recording}
        <Mic className="size-6" />
      </Button>
    );
  }

  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            // action={handleSubmission}
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);
              const url = formData.get("url") as string;

              // ✅ Client-side validation
              if (!url.includes("hc-cdn.hel1.your-objectstorage.com")) {
                toast(
                  "Image URL must be from hc-cdn.hel1.your-objectstorage.com"
                );
                return; // block submit
              }

              // ✅ If valid, call the server action
              await handleSubmission(formData);
              toast("Post created successfully!");
            }}
          >
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="justify-between">
                Content
                <div className="flex flex-row gap-3 items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Summarize onResult={setText} prompt={text} />
                    </TooltipTrigger>
                    <TooltipContent>AI TL;DR Summary</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <RecordButton />
                    </TooltipTrigger>
                    <TooltipContent>Voice to Text</TooltipContent>
                  </Tooltip>
                </div>
              </Label>
              <Textarea
                value={text}
                name="content"
                required
                placeholder="Content"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL: Must Be HackClub CDN Link</Label>
              <Input name="url" required type="url" placeholder="Image URL" />
            </div>
            <div className="inline-block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Submitbutton />
                </TooltipTrigger>
                <TooltipContent side="right">Post To The World!</TooltipContent>
              </Tooltip>
            </div>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
}
