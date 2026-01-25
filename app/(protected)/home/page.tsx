/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const ProtectedHomePage = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    if (!savedUsername) {
      toast.error("Please login first");
      router.push("/");
    } else {
      setUsername(savedUsername);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    toast.success("Logged out successfully");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!username) {
    return null;
  }

  return (
    <div className="h-screen w-screen p-6">
      <h1 className="text-5xl font-bold text-center mt-6">
        Lets have fun by learning 🐍
      </h1>
    </div>
  );
};

export default ProtectedHomePage;
