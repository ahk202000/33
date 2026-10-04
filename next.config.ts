import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // مسیر قدیمی ذخیره فایل‌ها (/uploads/<name>) → همان روت سرو فایل
      // تا لینک‌های ثبت‌شده در دیتابیس‌های قبلی 404 ندهند.
      { source: "/uploads/:path*", destination: "/api/files/:path*" },
    ];
  },
};

export default nextConfig;
