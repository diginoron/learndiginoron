import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, User, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const isKids = course.category === "kids";
  const isCorporate = course.category === "corporate";

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      
      {/* Course Image Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md ${
              isKids
                ? "bg-cyan-500/90 text-slate-950"
                : isCorporate
                ? "bg-purple-500/90 text-slate-950"
                : "bg-amber-500/90 text-slate-950"
            }`}
          >
            {course.categoryName}
          </span>
        </div>

        {/* Badge */}
        {course.badge && (
          <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700 text-cyan-300 text-[11px] px-2.5 py-0.5 rounded-lg flex items-center gap-1 font-semibold">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>{course.badge}</span>
          </div>
        )}
      </div>

      {/* Course Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs text-gray-400 flex items-center gap-2 mb-2">
            <span className="text-cyan-400 font-medium">مخاطبین:</span>
            <span>{course.targetAudience}</span>
          </div>

          <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
            {course.title}
          </h3>

          <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
            {course.shortDesc}
          </p>

          {/* Quick Topics Preview */}
          <div className="mt-4 space-y-1">
            {course.topics.slice(0, 2).map((topic, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meta Footer */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>{course.instructor.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-sm font-bold text-cyan-300">
              {course.price}
            </div>

            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-[-2px] transition-all"
            >
              <span>مشاهده و ثبت‌نام</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
