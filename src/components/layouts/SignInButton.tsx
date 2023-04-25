"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import Button from "../elements/Button";
import { toast } from "../elements/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error while Signing in!",
        message: "Please try Again",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} className="dark:hover:bg-white">
      Sign in
    </Button>
  );
};

SignInButton.displayName = "SignInButton";
export default SignInButton;
