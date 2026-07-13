"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Eye, EyeOff, Loader2, Sparkles} from "lucide-react";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import Image from "next/image";
import {basePath} from "@/lib/base-path";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58v-3.1H1.27a12 12 0 0 0 0 10.78l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.61l4 3.1C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.92.12 3.23.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an auth request. Replace with a real API call.
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success("Signed in successfully", {
      position: "top-right",
    });
    router.push("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {/* Decorative panel */}
      {/*<div className="bg-primary/0 text-primary-foreground relative hidden w-2/3 flex-col justify-between overflow-hidden p-12 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklch,var(--primary-foreground),transparent_85%),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,color-mix(in_oklch,var(--primary-foreground),transparent_88%),transparent_55%)]" />

        <Image
          src={`${basePath}background/bg_light.webp`}
          alt={""}
          height={400}
          width={400}
          className={
            "absolute inset-0 h-full w-full object-cover object-center"
          }
        />

        <div className="relative z-10 flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="size-5" />
          TCPW Dashboard
        </div>

        <div className="relative z-10 flex flex-col gap-3">
          <blockquote className="text-2xl leading-snug font-medium text-balance">
            &ldquo;Everything I need to track my work, in one clean
            place.&rdquo;
          </blockquote>
          <p className="text-primary-foreground/70 text-sm">
            Sofia Ratsuto &mdash; Operations Lead
          </p>
        </div>
      </div>*/}

      {/* Form panel */}
      <Card className="w-full max-w-2xl mx-auto p-6 bg-card/70 backdrop-blur-xl">
        <CardHeader>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to your account to continue
          </p>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline">
                  <GoogleIcon data-icon="inline-start" className="size-4"/>
                  Google
                </Button>
                <Button type="button" variant="outline">
                  <GithubIcon data-icon="inline-start" className="size-4"/>
                  GitHub
                </Button>
              </div>

              <FieldSeparator>or continue with email</FieldSeparator>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="you@example.com"
                  autoComplete="off"
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center px-3"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4"/>
                    ) : (
                      <Eye className="size-4"/>
                    )}
                  </button>
                </div>
              </Field>

              <Field orientation="horizontal">
                <Checkbox id="remember"/>
                <FieldLabel htmlFor="remember" className="font-normal">
                  Remember me for 30 days
                </FieldLabel>
              </Field>

              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="size-4 animate-spin"/>}
                  {isSubmitting ? "Signing in…" : "Sign in"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className={"justify-center"}>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
