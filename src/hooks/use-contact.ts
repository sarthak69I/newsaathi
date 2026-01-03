import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { InsertContact } from "@/lib/schema";

async function submitContactForm(data: InsertContact): Promise<void> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real app, you'd send this to a server
  console.log("Form submitted:", data);

  // Simulate potential errors
  if (data.email.includes("error")) {
    throw new Error("Failed to submit form. Please try again.");
  }
}

export function useSubmitContact() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll be in touch soon.",
      });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    },
  });
}

    