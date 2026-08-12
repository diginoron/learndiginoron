import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import CourseGrid from "@/components/CourseGrid";
import LearningRoadmap from "@/components/LearningRoadmap";
import ContactTeaser from "@/components/ContactTeaser";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowLeft, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";

export default function Home() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview: Kids/Teens vs Corporate */}
      <ServicesOverview />

      {/* Course Catalog Grid */}
      <CourseGrid />

      {/* 4-Step Learning Roadmap */}
      <LearningRoadmap />

      {/* Latest Articles Teaser */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مجله علمی و مقالات تخصصی</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                آخرین تحلیل‌ها و <span className="text-gradient-cyan">اخبار هوش مصنوعی</span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>مشاهده تمامی مقالات در چندین صفحه</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-cyan-300 text-xs px-3 py-1 rounded-full font-bold">
                    {post.categoryName}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      نویسنده: {post.author.name}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>مطالعه مقاله</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation & Phone Teaser */}
      <ContactTeaser />
    </div>
  );
}
