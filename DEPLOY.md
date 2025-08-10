# دليل النشر السريع على Vercel

## الطريقة الأولى: النشر المباشر من Replit

1. **اذهب إلى [Vercel.com](https://vercel.com)**
2. **أنشئ حساب جديد أو سجل دخولك**
3. **اضغط على "New Project"**
4. **اختر "Import Git Repository"**
5. **أدخل رابط هذا المشروع من Replit**

## الطريقة الثانية: رفع الملفات مباشرة

1. **قم ببناء المشروع:**
   ```bash
   npm run build
   ```

2. **اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)**

3. **اضغط على "Add New Project"**

4. **اختر "Browse All Templates" ثم "Other"**

5. **ارفع مجلد `dist/public` كاملاً**

## الطريقة الثالثة: Vercel CLI (الأسرع)

1. **ثبت Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **في مجلد المشروع، نفذ:**
   ```bash
   vercel
   ```

3. **اتبع التعليمات:**
   - اضغط Enter للموافقة على الإعدادات
   - اختر اسم المشروع
   - اختر نطاق vercel.app أو نطاقك الخاص

## إعدادات مهمة

- ✅ **Build Command:** `npm run build`
- ✅ **Output Directory:** `dist/public`  
- ✅ **Node.js Version:** 18.x أو أحدث

## ما يحدث تلقائياً

- 🚀 Vercel سيبني المشروع تلقائياً
- 🌐 سيعطيك رابط `.vercel.app`
- 📱 سيعمل على الجوال والكمبيوتر
- 🔄 سيحدث الموقع تلقائياً عند كل تعديل

## روابط مفيدة

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentation:** https://vercel.com/docs
- **Support:** https://vercel.com/support

---

**المشروع جاهز للنشر بدون أي مشاكل! 🎉**