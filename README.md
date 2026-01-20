Prerequisites

Node.js >= 16.x
npm atau pnpm

Installation
# Clone repository
git clone https://github.com/meilaa221/ndi-dashboard-test

# Masuk ke folder project
cd ndi-dashboard-test

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser
http://localhost:3000


Build Production

npm run build
npm start

Structure Kode

ndi-dashboard-test/
├── app/
│   ├── login/
│   │   └── page.tsx              # Login page
│   ├── dashboard/
│   │   └── page.tsx              # Dashboard page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── page.tsx                  # Home redirect
├── components/
│   ├── auth/
│   │   └── LoginForm.tsx         # Login form component
│   ├── dashboard/
│   │   └── ChartComponent.tsx    # Charts component
│   └── ui/
│       ├── Button.tsx            # Reusable button
│       └── Input.tsx             # Reusable input
├── services/
│   └── api.ts                    # API service layer
├── store/
│   └── authStore.ts              # Zustand store
├── types/
│   └── index.ts                  # TypeScript types
├── middleware.ts                 # Next.js middleware
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind config
└── README.md                     # Documentation

TESTING SCENARIOS
1. Login Flow

Valid credentials → Success redirect to dashboard
Invalid credentials → Error message display
Empty fields → Validation error
Network error → User-friendly error message
Loading state → Button disabled with spinner

2. Dashboard Access

Authenticated user → Show dashboard
Unauthenticated user → Redirect to login
Token expired → Redirect to login
Logout → Clear state and redirect

3. Chart Rendering

Data loads correctly
Charts are responsive
Tooltips work on hover
Legends are clickable
Colors are consistent

4. Responsive Design

Mobile (320px - 767px) → Single column layout
Tablet (768px - 1023px) → Adaptive grid
Desktop (1024px+) → Full grid layout
Charts resize properly
Navigation works on all screens
