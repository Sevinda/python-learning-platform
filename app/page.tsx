"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="p-10">
        <h1 className="text-xl font-bold">Welcome Bro! Long Time No See 🔥</h1>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" placeholder="@username" />
        </Field>
        <div className="flex space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Button variant="outline" className="w-full">
              Back
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Button className="w-full">Submit</Button>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
