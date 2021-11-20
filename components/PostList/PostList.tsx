import { Post } from "@prisma/client";
import { useQuery } from "react-query";
import { ComponentPropsWithRef, forwardRef, useState } from "react";

interface Props extends ComponentPropsWithRef<"ul"> {
  readonly initialPosts: readonly Post[];
}

async function fetchPosts() {
  const response = await fetch("/api/blog");
  return response.json();
}

const PostList = forwardRef<HTMLUListElement, Props>(
  ({ initialPosts, ...props }, ref) => {
    const {
      data: posts,
      isLoading,
      isError,
      error,
    } = useQuery<readonly Post[], Error>("posts", fetchPosts, {
      initialData: initialPosts,
    });

    if (isLoading) {
      return <progress className="animate-spin" aria-valuetext="loading..." />;
    }

    if (isError) {
      return (
        <div className="flex" role="alert" aria-live="assertive">
          <h2>Something went wrong</h2>
          <p className="leading-snug">{error}</p>
        </div>
      );
    }

    if (!posts.length) {
      return (
        <div role="alert" aria-live="polite" className="dark:text-white">
          No results
        </div>
      );
    }

    return (
      <ul {...props} ref={ref} className="flex flex-col gap-2">
        {posts.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    );
  },
);

PostList.displayName = "PostList";

PostList.defaultProps = {
  initialPosts: [],
};

export default PostList;
