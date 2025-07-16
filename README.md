# Corporate Website Template

เทมเพลตเว็บไซต์บริษัทที่สร้างด้วย Next.js 15 พร้อมกับ AI-powered SEO optimization และ modern UI components

## 🚀 เกี่ยวกับเทมเพลต

เทมเพลตเว็บไซต์บริษัทแบบครบวงจรที่ออกแบบมาเพื่อแสดงผลิตภัณฑ์และบริการของบริษัทด้วย UI ที่ทันสมัยและระบบจัดการเนื้อหาที่มีประสิทธิภาพ เหมาะสำหรับใช้เป็นต้นแบบในการสร้างเว็บไซต์บริษัทสมัยใหม่

### ✨ ฟีเจอร์หลัก

- **🏠 หน้าแรก**: Landing page แบบมืออาชีพพร้อม company highlights
- **👥 เกี่ยวกับเรา**: หน้าข้อมูลบริษัท, ประวัติ, วิสัยทัศน์ และทีมงาน
- **📞 ติดต่อเรา**: ฟอร์มติดต่อพร้อม Google Maps integration
- **🛍️ แคตตาล็อกสินค้า**: แสดงสินค้าแบบไดนามิคพร้อมระบบค้นหา
- **🔧 บริการ**: แสดงบริการต่างๆ พร้อมรายละเอียดและฟอร์มสอบถาม
- **💼 ผลงาน (Portfolio)**: แสดงโปรเจกต์และ case studies
- **🤖 AI SEO Optimizer**: เครื่องมือ AI สำหรับสร้าง SEO meta tags

## 🛠️ เทคโนโลยีที่ใช้

- **Framework**: Next.js 15 (App Router)
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **AI Integration**: Google Genkit AI
- **Deployment**: Firebase Hosting
- **TypeScript**: Type-safe development

## 🎨 Design System

- **Primary Color**: Deep Blue (#293B5F) - ความน่าเชื่อถือและเสถียรภาพ
- **Background**: Light Gray (#F0F4F8) - ความสะอาดและมืออาชีพ
- **Accent**: Teal (#3D84A8) - Call-to-action และไฮไลท์
- **Typography**:
  - Body: Inter (sans-serif)
  - Headlines: Space Grotesk (sans-serif)

## 📦 การติดตั้งและการใช้งาน

### ข้อกำหนดระบบ

- Node.js 18.17 หรือใหม่กว่า
- npm หรือ yarn หรือ pnpm

### Quick Start

```bash
# Clone repository
git clone https://github.com/RattanachaiMeekhun/Corporate-Website.git
cd Corporate-Website

# ติดตั้ง dependencies
npm install

# รันโปรเจกต์ในโหมด development
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:9002](http://localhost:9002)

### สคริปต์ที่สำคัญ

```bash
# รันเซิร์ฟเวอร์ development (port 9002)
npm run dev

# สร้าง build สำหรับ production
npm run build

# รันเซิร์ฟเวอร์ production
npm run start

# ตรวจสอบ linting
npm run lint

# ตรวจสอบ TypeScript
npm run typecheck

# รัน Genkit AI development server
npm run genkit:dev

# รัน Genkit AI ในโหมด watch
npm run genkit:watch
```

## 📁 โครงสร้างโปรเจกต์

```
src/
├── ai/                     # AI และ Genkit configurations
│   ├── flows/             # AI flows สำหรับ SEO optimization
│   ├── dev.ts             # Development configuration
│   └── genkit.ts          # Genkit setup
├── app/                   # Next.js App Router
│   ├── (pages)/          # Route groups
│   │   ├── about/        # หน้าเกี่ยวกับเรา
│   │   ├── contact/      # หน้าติดต่อ
│   │   ├── offerings/    # หน้าข้อเสนอ
│   │   ├── portfolio/    # หน้าผลงาน
│   │   ├── products/     # หน้าสินค้า
│   │   ├── services/     # หน้าบริการ
│   │   └── seo-optimizer/ # เครื่องมือ SEO AI
│   ├── favicon.ico       # Site favicon
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # หน้าแรก
│   ├── robots.ts         # SEO robots.txt
│   └── sitemap.ts        # SEO sitemap
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Navigation header
│   ├── Logo.tsx         # Company logo
│   └── PageHeader.tsx   # Page header component
├── data/                # Static data files
│   ├── portfolio.json   # ข้อมูลผลงาน
│   ├── products.json    # ข้อมูลสินค้า
│   └── services.json    # ข้อมูลบริการ
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   ├── data.ts          # Data fetching functions
│   └── utils.ts         # Utility helpers
└── types/               # TypeScript type definitions
```

## 🎯 การปรับแต่งเทมเพลต

### 1. ข้อมูลบริษัท

แก้ไขข้อมูลสำคัญใน:

- `src/components/Header.tsx` - ชื่อบริษัทและเมนู
- `src/components/Footer.tsx` - ข้อมูลติดต่อและลิงก์
- `src/components/Logo.tsx` - โลโก้บริษัท

### 2. เนื้อหาและข้อมูล

- `src/data/products.json` - ข้อมูลสินค้า
- `src/data/services.json` - ข้อมูลบริการ
- `src/data/portfolio.json` - ข้อมูลผลงาน

### 3. สีและธีม

แก้ไขใน `tailwind.config.ts`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#293B5F",
      background: "#F0F4F8",
      accent: "#3D84A8"
    }
  }
}
```

### 4. รูปภาพและไอคอน

- เพิ่มรูปภาพใน `public/` folder
- แก้ไข favicon ที่ `src/app/favicon.ico`

## 🌟 ฟีเจอร์พิเศษ

### AI SEO Optimizer

ไปที่ `/seo-optimizer` เพื่อใช้เครื่องมือ AI สำหรับ:

- สร้าง meta title และ description
- แนะนำ keywords
- วิเคราะห์ SEO content

### Responsive Design

- Mobile-first approach
- Tablet และ desktop optimized
- Modern CSS Grid และ Flexbox

### Performance

- Next.js 15 App Router
- Image optimization
- Code splitting
- SEO optimized

## 🚀 การ Deploy

### Firebase Hosting

```bash
# ติดตั้ง Firebase CLI
npm install -g firebase-tools

# Login และ init
firebase login
firebase init hosting

# Build และ deploy
npm run build
firebase deploy
```

### Vercel (แนะนำ)

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📄 เอกสารเพิ่มเติม

- [Blueprint Document](./docs/blueprint.md) - รายละเอียดการออกแบบ
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Google Genkit Documentation](https://firebase.google.com/docs/genkit)

## 🤝 การพัฒนาและการมีส่วนร่วม

1. Fork repository
2. สร้าง feature branch: `git checkout -b feature/amazing-feature`
3. Commit การเปลี่ยนแปลง: `git commit -m 'Add amazing feature'`
4. Push ไปยัง branch: `git push origin feature/amazing-feature`
5. สร้าง Pull Request

## 📝 License

โปรเจกต์นี้อยู่ภายใต้ MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

## 📞 ติดต่อและสนับสนุน

หากมีคำถามหรือต้องการความช่วยเหลือ:

- **Repository**: [Corporate-Website](https://github.com/RattanachaiMeekhun/Corporate-Website)
- **Issues**: [GitHub Issues](https://github.com/RattanachaiMeekhun/Corporate-Website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/RattanachaiMeekhun/Corporate-Website/discussions)

---

<div align="center">

**เทมเพลตเว็บไซต์บริษัทที่พัฒนาด้วย ❤️**

_Built with Next.js 15 • Tailwind CSS • TypeScript • Firebase_

[🚀 Demo](https://your-demo-url.com) • [📚 Docs](./docs/) • [🐛 Report Bug](https://github.com/RattanachaiMeekhun/Corporate-Website/issues)

</div>
