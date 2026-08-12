"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/data/blog";
import { Search, Calendar, Clock, ArrowLeft, ChevronRight, ChevronLeft, Sparkles, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4; // Multi-page pagination simulation

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.includes(searchTerm) ||
      post.excerpt.includes(searchTerm) ||
      post.tags.some((t) => t.includes(searchTerm));

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>مجله تخصصی هوش مصنوعی دیجی نورون</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white">
          مقالات و تحلیلی‌های <span className="text-gradient-cyan">هوش مصنوعی</span>
        </h1>

        <p className="text-sm text-gray-300">
          جدیدترین راهنماها، مقالات آموزشی کودکان و نوجوانان و راهکارهای هوش مصنوعی سازمانی
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
          <input
            type="text"
            placeholder="جستجو در مقالات و عنوان‌ها..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pr-10 pl-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            همه مقالات
          </button>

          <button
            onClick={() => {
              setSelectedCategory("kids-ai");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "kids-ai"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            هوش مصنوعی کودکان
          </button>

          <button
            onClick={() => {
              setSelectedCategory("corporate-ai");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "corporate-ai"
                ? "bg-purple-500 text-black shadow-lg shadow-purple-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            هوش مصنوعی سازمانی
          </button>

          <button
            onClick={() => {
              setSelectedCategory("tutorials");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "tutorials"
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                : "bg-slate-900 text-gray-300 hover:bg-slate-800"
            }`}
          >
            آموزش و ابزارها
          </button>
        </div>

      </div>

      {/* Posts List */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 text-cyan-300 text-xs px-3 py-1 rounded-full font-bold">
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

                  <h2 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-gray-300 mt-2 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                      unoptimized
                    />
                    <span className="text-xs text-gray-300 font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>مطالعه کامل مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
          <p className="text-gray-400 text-sm">مقاله‌ای در این دسته‌بندی یافت نشد.</p>
        </div>
      )}

      {/* Multi-Page Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-gray-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="صفحه قبل"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                currentPage === pageNum
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-800 text-gray-300 hover:bg-slate-800"
              }`}
            >
              صفحه {pageNum}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-gray-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="صفحه بعد"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
