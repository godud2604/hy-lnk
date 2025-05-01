import React from "react";
import { Button } from "@/components/ui/button";

export function LoginButton() {
  return (
    <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
      시작하기
    </Button>
  );
}