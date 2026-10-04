/**
 * تشخیص نوع پیش‌فاکتور «نامه ستاد» (سامانه ستاد)
 *
 * پیش‌فاکتورهایی که نوعشان «ستاد» است قالب چاپ متفاوتی دارند:
 * - ستون «محل کالیبره» حذف می‌شود
 * - «متن سوم / صفحه آخر» (ته‌برگ شرایط عمومی) چاپ نمی‌شود
 * - فقط مهر و امضا و نام شرکت دقیقاً زیر آخرین مطلب می‌آید
 *
 * تشخیص بر اساس کد نوع (setad) یا وجود واژه «ستاد» در نام نوع است تا
 * با دیتابیس‌هایی که نام را «سامانه ستاد» یا «نامه ستاد» ثبت کرده‌اند کار کند.
 */
export function isSetadProforma(
  typeName?: string | null,
  typeCode?: string | null
): boolean {
  const code = (typeCode || "").trim().toLowerCase();
  if (code === "setad") return true;
  const name = (typeName || "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\u200c/g, " ")
    .trim();
  return name.includes("ستاد");
}
