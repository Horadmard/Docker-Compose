"use client";
import Link from "next/link";


import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticationHooks } from "@/lib/auth-endpoints";

export default function LoginComponent() {
  const form = useForm<{username:string; password:string }>({
    // resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });


  const loginMutations = authenticationHooks.useLoginMutation();

  const router = useRouter();

  function onSubmit({ username, password }: {username:string; password:string }) {
    loginMutations.mutate(
      {
        username,
        password,
      },
      {
        onSuccess(data:any) {
          // router.push("/");
          toast.success("You are loged in now")
          console.log(data)

        },
        onError(error:any) {
          toast.error("there is an error")
        },
      },
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-neutral-100 px-4 py-12 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="flex items-center justify-center">
          <Link className="flex items-center" href="#">
            <img
              src="/icons/logotype.png"
              className="h-auto w-44 invert dark:invert-0"
              alt=""
            />
          </Link>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="shadow-none">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">{("Welcome back")}</CardTitle>
                <CardDescription>
                  
                    Enter your email and password to sign in to your account.
                  
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>{("Username")}</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
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
                      <FormLabel>{("Password")}</FormLabel>
                      <FormControl>
                        <Input placeholder="" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button asChild variant="link" className="m-0 p-0">

                </Button>

              </CardContent>
              <CardFooter>
                <Button
                  disabled={loginMutations.isLoading}
                  variant="default"
                  className="w-full"
                  type="submit"
                >
                  {("Login")}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          {("Don't have an account?")}{" "}
          <Link
            className="font-medium underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-50"
            href={"/register"}
          >
            {("Sign up")}
          </Link>
        </p>
      </div>
    </div>
  );
}
