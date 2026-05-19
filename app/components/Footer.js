"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f5] text-[#111111] py-8 sm:py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-500">
            &copy; {new Date().getFullYear()} Kanishk
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#home" className="text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
