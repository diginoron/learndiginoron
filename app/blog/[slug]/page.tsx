import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, Share2, Tag, BookOpen, Phone } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb & Meta */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/blog" className="text-xs text-cyan-700 hover:underline font-bold">
            ← بازگشت به مجله مقالات
          </Link>
          <span className="text-slate-300">•</span>
          <span className="text-xs text-slate-500 font-bold">{post.categoryName}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
              unoptimized
            />
            <div>
              <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
              <div className="text-[11px] text-slate-500">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative h-72 sm:h-[28rem] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Main Formatted Content */}
      <div
        className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:text-cyan-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-sm prose-li:text-slate-700 prose-li:text-sm space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="pt-6 border-t border-slate-200 flex items-center gap-2 flex-wrap">
        <Tag className="w-4 h-4 text-cyan-600" />
        <span className="text-xs text-slate-500 font-bold">برچسب‌ها:</span>
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white border border-slate-200 text-xs text-cyan-800 rounded-lg shadow-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Posts */}
      <div className="pt-12 border-t border-slate-200 space-y-6">
        <h3 className="text-xl font-bold text-slate-900">مقالات مرتبط پیشنهادی</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <div key={rel.id} className="glass-panel bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="text-[11px] text-cyan-700 font-bold">{rel.categoryName}</span>
              <h4 className="font-bold text-slate-900 text-base line-clamp-2">{rel.title}</h4>
              <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
              <Link
                href={`/blog/${rel.slug}`}
                className="inline-flex items-center gap-1 text-xs text-cyan-700 font-bold pt-2 hover:text-cyan-800"
              >
                <span>مطالعه مقاله</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}
