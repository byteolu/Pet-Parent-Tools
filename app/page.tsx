import Features from '@/component/Features/FeaturesComp'
import HomeHeroSectionWithImg from '@/component/HeroSection/HomeHeroComp'
import Footer from '@/component/ui/FooterComp';
import { getAllPosts } from "../lib/postcall";
import PostPreview from '@/component/Blog/PostPreview';
import Link from 'next/link';


export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);
  return (
  <main>
   <div>
    <HomeHeroSectionWithImg />
     
    <Features />
   </div>
   
   <p className="text-3xl mb-6">Recent Posts</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
      {recentPosts.map((post, index) => (
        <div key={post.id || post.slug || index}> {/* Replace with a unique identifier */}
          <PostPreview post={post} />
        </div>
      ))}
    </div>

        
        <Link
          href="/blog"
          className="text-3xl hover:text-gray-300 hover:underline"
        >
          Read More{" -> "}
        </Link>

        <Footer />
  </main>
  )
}
