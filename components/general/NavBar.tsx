"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Github } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
export function NavBar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-5 flex items-center justify-between mb-3"
    >
      <div className="flex items-center gap-6">
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.925 }}
            className="text-3xl font-semibold"
          >
            Sharon<span className="text-blue-500">Basovich</span>
          </motion.h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
            <Link
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              href="/"
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
            <Link
              className="text-sm font-medium hover:text-blue-500 transition-colors"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
          <Tooltip>
            <TooltipTrigger>
              <a href="https://github.com/sharonbasovich/blog" target="_blank">
                <Github />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right"> This website is open source!</TooltipContent>
          </Tooltip>
        </motion.div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
            <LogoutLink className={buttonVariants({ variant: "secondary" })}>
              Logout
            </LogoutLink>
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
            {" "}
            <LoginLink className={buttonVariants()}>Login</LoginLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.925 }}>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign Up
            </RegisterLink>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
}
