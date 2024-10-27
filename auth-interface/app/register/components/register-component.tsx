"use client";

import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import { authenticationHooks } from "@/lib/auth-endpoints";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
  email?: string;
}
export default function RegisterComponent() {
  const form = useForm<IRegisterForm>({
    // resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  const registerMutation = authenticationHooks.useRegisterMutation();

  function onSubmit({
    email,
    password,
    confirmPassword,
    username,
  }: IRegisterForm) {
    registerMutation.mutate(
      {
        email,
        password,
        confirmPassword,
        username,
      },
      {
        onSuccess(data) {
          // router.push("/");
          toast.success("Success");
          console.log(data);
        },
        onError(error) {
          toast.error("there is an error");
          console.log(error);
        },
      }
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-neutral-100 px-4 py-12 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex items-center justify-center">
          <Link className="flex items-center" href={"/"}>
            <img
              src="/icons/logotype.png"
              className="h-auto w-44 invert dark:invert-0"
              alt=""
            />
          </Link>
        </div>

        <div className="space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="shadow-none">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl">
                    {"Create an account"}
                  </CardTitle>
                  <CardDescription>
                    {"Enter your details to get started."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{"Email"}</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{"Username"}</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{"Password"}</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{"Password Confirmation"}</FormLabel>
                        <FormControl>
                          <Input placeholder="" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    disabled={registerMutation.isLoading}
                    variant="default"
                    className="w-full"
                    type="submit"
                  >
                    {"Sign up"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          {"Do you have an account?"}{" "}
          <Link
            className="font-medium underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-50"
            href={"/login"}
          >
            {"Login"}
          </Link>
        </p>
      </div>
    </div>
  );
}
