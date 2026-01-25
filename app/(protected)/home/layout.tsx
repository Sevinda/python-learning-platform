"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "@/components/home/Header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    if (!savedUsername) {
      toast.error("Please login first");
      router.push("/");
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-background via-background to-accent/5">
        <div className="text-lg text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!username) {
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-background via-background to-accent/5 flex flex-col">
      <Header username={username} handleLogout={handleLogout} />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </div>
      </main>

      <footer className="mt-auto border-t border-accent/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Python Learning Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
