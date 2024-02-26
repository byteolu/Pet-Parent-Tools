import Image from 'next/image';
import HeroSection from '@/component/Blog/HeroSectionBlog';
import { getAllPosts } from "@/lib/postcall";
import PostPreview from "@/component/Blog/PostPreview";
import PostHero from "@/component/Blog/PostHero";
import Link from "next/link";





export default function BlogPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
   <div>
  
    <HeroSection />
    <div className="container mx-auto px-5">
    <main>
        <h1 className="text-center text-3xl">All Posts</h1>

        <div className="h-12"></div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8">
          {posts.map((post) => (
            <div key={post.slug}> {/* Replace post.id with the unique identifier of your post */}
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  
   </div>
  );
}

// app/posts/[slug]