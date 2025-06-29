"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button"; // 导入 buttonVariants
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const { user } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between container mx-auto py-4">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Headshots AI</h1>
        </Link>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.user_metadata.avatar_url}
                    alt="avatar"
                  />
                  <AvatarFallback>
                    <AvatarIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.user_metadata.full_name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/get-credits")}>
                Get Credits
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          // 这是唯一的、最终的修复：
          // 我们不再使用 <Button asChild>，而是直接给 <Link> 组件应用按钮的样式。
          <Link href="/login" className={buttonVariants()}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
