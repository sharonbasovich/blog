import { Button } from "../ui/button";
import { useState } from "react";
import { VariantProps } from "class-variance-authority";
import { Bot } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
type SummarizeProps = {
  onResult: (result: string) => void;
  prompt: string;
};

type ButtonVariant = VariantProps<typeof Button>["variant"];

export default function Summarize({ onResult, prompt }: SummarizeProps) {
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>("outline");

  async function handleClick() {
    setButtonVariant("destructive");
    const sysPrompt =
      'summarize the following blog post in a brief tl;dr style from the perspective of the person writing it and don\'t  add an unecessary message at the end or start like "Is there anything else I can help you with" or "Here is a summary in under 1000 characters":';

    const res = await fetch("https://ai.hackclub.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: sysPrompt + prompt }],
      }),
    });

    const data = await res.json();

    const response = prompt + "\n\nTL;DR: " + data.choices[0].message.content;

    if (onResult) onResult(response);

    console.log("ran");
    setButtonVariant("outline");
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
          variant={buttonVariant}
          onClick={handleClick}
          disabled={prompt === ""}
        >
          <Bot className="size-l" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>AI Summary</TooltipContent>
    </Tooltip>
  );
}

//  function handleOnAI() {
//    // UNSOLVED, THIS IS EXECUTING TWICE
//    setAIButtonVariant("destructive");
//    const prompt =
//      'summarize the following blog post from the perspective of the person writing it and don\'t  add an unecessary message at the end or start like "Is there anything else I can help you with" or "Here is a summary in under 1000 characters":';
//    let result = "this is a summary";
//    result += "\nTL;DR: ";
//    result += text;
//    // accessing text is making it happen twice
//    setText(result);
//    setAIButtonVariant("outline");
//    console.log("clicked");
//  }

//  function AIButton() {
//    return (
//      <Button type="button" variant={aiButtonVariant} onClick={handleOnAI}>
//        <Bot className="size-l" />
//      </Button>
//    );
//  }
