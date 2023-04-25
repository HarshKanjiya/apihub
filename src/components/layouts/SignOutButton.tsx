"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import Button from "../elements/Button";
import { toast } from "../elements/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error while Signing in!",
        message: "Please try Again",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return <Button onClick={signInWithGoogle}>SignOutButton</Button>;
};

SignOutButton.displayName = "SignOutButton";
export default SignOutButton;
