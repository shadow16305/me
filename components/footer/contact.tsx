"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 charcters." })
    .max(20, { message: "Name cannot be more than 20 characters long." }),
  email: z.string().email(),
  message: z.string(),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-5/12">
        <div className="flex gap-x-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    placeholder="John Smith"
                    className="transition-colors hover:bg-neutral-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    className="transition-colors hover:bg-neutral-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-8">
              <FormControl>
                <Textarea
                  placeholder="Write a message..."
                  className="transition-colors hover:bg-neutral-200"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="mt-8 rounded-3xl bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Submit
          </button>
        </div>
      </form>
    </Form>
  );
};
