import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";
import { Suspense } from "react";
import { BlogPostsGrid } from "@/components/general/BlogPostsGrid";
import { redirect } from "next/navigation";
import Filter from "@/components/general/Filter";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return data;
}

export default function dashboardRoute() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        {/* <Filter></Filter> */}
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Tooltip>
          <TooltipTrigger>
            <Link className={buttonVariants()} href="/dashboard/create">
              Create Post
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Create a post!
          </TooltipContent>
        </Tooltip>
      </div>

      <Suspense fallback={<BlogPostsGrid />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user == null) {
    redirect("/");
  }
  const data = await getData(user.id);

  if (data.length == 0) {
    return (
        <h3>You Don&apos;t Have Any Posts Yet!</h3>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
