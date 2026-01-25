"use client";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useGetUserByUsername } from "@/hooks/useUsers";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const { mutate: getUserByUsername, isPending } = useGetUserByUsername();

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    if (savedUsername) {
      toast.success(`Welcome back @${savedUsername}! 🎉`);
      router.push("/home");
    }
  }, [router]);

  const handleSubmit = useCallback(() => {
    getUserByUsername(username, {
      onSuccess: () => {
        sessionStorage.setItem("username", username);
        toast.success(`Hello @${username}, welcome back! 🎉`);
        router.push("/home");
      },
      onError: () => toast.error("Oops! wrong @username"),
    });
  }, [getUserByUsername, username, router]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="p-10">
        <h1 className="text-xl font-bold">Welcome Bro! Long Time No See 🔥</h1>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            placeholder="@username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Field>
        <div className="flex space-x-2">
          <motion.div
            whileHover={{ scale: username ? 1.05 : 1 }}
            whileTap={{ scale: username ? 0.95 : 1 }}
            className="w-full"
          >
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={!username || isPending}
              type="submit"
            >
              {isPending ? "Logging in..." : "Submit"}
            </Button>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
