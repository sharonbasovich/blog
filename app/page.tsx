import { BlogPostCard } from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";
import { BlogPostsGrid } from "@/components/general/BlogPostsGrid";
import Filter from "@/components/general/Filter";
export const revalidate = 60;

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createAt: true,
      authorId: true,
      updatedAt: true,
    },
    orderBy: { createAt: "desc" },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
      <Filter></Filter>
      <Suspense fallback={<BlogPostsGrid />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
