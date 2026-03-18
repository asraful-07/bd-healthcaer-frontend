# BD Healthcare Frontend

A modern, full-featured healthcare management system built with **Next.js 14**, **TypeScript**, and **React**. This application provides a comprehensive platform for patients, doctors, and administrators to manage healthcare services including appointments, consultations, diagnostics, prescriptions, and health plans.

## 🌟 Features

### For Patients

- **User Authentication**: Secure login, registration, email verification, and password reset
- **Appointment Booking**: Schedule consultations with doctors and view appointment history
- **Consultation Management**: Access consultation details and medical records
- **Health Plans**: Explore and manage different health plan options
- **Diagnostics**: View diagnostic test results and health reports
- **Medicine Information**: Browse available medicines and prescriptions
- **Dashboard**: Personalized patient dashboard with health overview

### For Doctors

- **Doctor Dashboard**: Manage consultations, appointments, and patient records
- **Schedule Management**: Create and manage doctor schedules
- **Patient Consultation**: Access patient history and provide consultation notes
- **Appointment Management**: Accept or reschedule appointments

### For Administrators

- **Admin Dashboard**: Complete system overview and management
- **User Management**: Manage doctors, patients, and NGOs
- **System Settings**: Configure health plans, medicines, diagnostics, and more

## 📋 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: Custom shadcn/ui components
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) - Server state management
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first validation library
- **Charts**: [Recharts](https://recharts.org/) - React charting library
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bd-healthcaer-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── (commonLayout)/           # Common layout for auth and public pages
│   │   ├── (authRouteGroup)/    # Auth pages (login, register, etc.)
│   │   ├── consultation/        # Consultation pages
│   │   ├── diagnostics/         # Diagnostics pages
│   │   ├── health-plans/        # Health plans pages
│   │   ├── medicine/            # Medicine information pages
│   │   └── ngos/               # NGO information pages
│   └── (dashboardLayout)/        # Protected dashboard layout
│       ├── admin/              # Admin section
│       ├── doctor/             # Doctor section
│       └── patient/            # Patient section
├── components/                   # React components
│   ├── modules/                # Feature-specific components
│   │   ├── Admin/              # Admin module components
│   │   ├── auth/               # Authentication components
│   │   ├── Consultation/       # Consultation components
│   │   ├── Dashboard/          # Dashboard components
│   │   ├── Doctor/             # Doctor module components
│   │   └── home/               # Home page components
│   ├── shared/                 # Reusable shared components
│   │   ├── AppointmentBarChart.tsx
│   │   ├── AppointmentPieChart.tsx
│   │   ├── StatsCard.tsx
│   │   ├── cell/               # Table cell components
│   │   ├── form/               # Form components
│   │   └── table/              # Table components
│   └── ui/                     # UI component library (shadcn/ui)
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   ├── useRowActionModalState.ts # Row action modal state
│   ├── useServerManagedDataTable.ts # Server-managed data table
│   ├── useServerManagedDataTableFilters.ts
│   └── useServerManagedDataTableSearch.ts
├── lib/                         # Utility functions and helpers
│   ├── axios/
│   │   └── httpClient.ts       # Axios HTTP client configuration
│   ├── authUtils.ts            # Authentication utilities
│   ├── cookieUtils.ts          # Cookie handling utilities
│   ├── iconMapper.ts           # Icon mapping utilities
│   ├── jwtUtils.ts             # JWT token utilities
│   ├── navItems.ts             # Navigation items configuration
│   ├── tokenUtils.ts           # Token management utilities
│   └── utils.ts                # General utilities
├── providers/                   # React Context Providers
│   └── QueryProvider.tsx       # TanStack Query provider
├── services/                    # API service functions
│   ├── appointment.services.ts
│   ├── auth.services.ts
│   ├── dashboard.services.ts
│   ├── doctor.services.ts
│   ├── doctorSchedule.services.ts
│   ├── schedule.services.ts
│   └── ...
├── types/                       # TypeScript type definitions
│   ├── api.types.ts
│   ├── appointment.types.ts
│   ├── auth.types.ts
│   ├── dashboard.types.ts
│   └── ...
└── zod/                        # Zod validation schemas
    ├── auth.validation.ts
    ├── doctor.validation.ts
    ├── doctorSchedule.validation.ts
    └── ...
```

## 🔐 Authentication

The application uses JWT (JSON Web Token) based authentication:

- **Login**: Users provide credentials and receive JWT tokens
- **Token Storage**: Tokens are securely stored in HTTP-only cookies
- **Protected Routes**: Dashboard routes require valid authentication
- **Token Refresh**: Automatic token refresh mechanism
- **Password Reset**: Secure email-based password reset flow
- **Email Verification**: Two-step email verification during registration

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Dark Mode**: Built-in support for light/dark theme switching
- **Component Library**: Custom UI components built with shadcn/ui

## 📊 Key Modules

### Authentication Module (`src/components/modules/auth/`)

- Login form with email/password validation
- User registration with email verification
- Password reset and recovery
- Role-based access control

### Dashboard Module (`src/components/modules/Dashboard/`)

- User-specific dashboards for patients, doctors, and admins
- Analytics and statistics visualization
- Quick action panels

### Consultation Module (`src/components/modules/Consultation/`)

- Consultation listing and filtering
- Consultation details view
- Appointment scheduling

### Admin Module (`src/components/modules/Admin/`)

- User management interface
- System configuration
- Data management and reports

## 🔌 API Integration

The application integrates with a backend API using Axios:

- **Base URL**: Configured via `NEXT_PUBLIC_API_BASE_URL` environment variable
- **HTTP Client**: Centralized Axios instance in `src/lib/axios/httpClient.ts`
- **Services**: Organized service functions in `src/services/`
- **Error Handling**: Centralized error handling and logging

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Format code
npm run format
```

## 📦 Dependencies

### Core

- `next`: 14.x - React framework
- `react`: 18.x - UI library
- `typescript`: Latest - Type safety

### UI & Styling

- `tailwindcss`: CSS framework
- `class-variance-authority`: Component styling
- `recharts`: Charting library
- `sonner`: Toast notifications

### Data Management

- `@tanstack/react-query`: Server state management
- `zod`: Schema validation
- `axios`: HTTP client

### Utilities

- `js-cookie`: Cookie management
- `jwt-decode`: JWT token decoding

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes with meaningful commits
3. Ensure code follows the project style guidelines
4. Submit a pull request with a clear description

## 📝 Code Standards

- **TypeScript**: Strict mode enabled
- **Linting**: ESLint configuration in `eslint.config.mjs`
- **Formatting**: Tailwind CSS class organization
- **Validation**: Zod schemas for all input validation
- **Type Safety**: Comprehensive TypeScript definitions in `src/types/`

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues

```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build cache
rm -rf .next
npm run build
```

## 📄 License

This project is licensed under the [License Type] - see the LICENSE file for details.

## 📧 Support

For issues, bug reports, or feature requests, please contact the development team.

---

**Last Updated**: March 2026  
**Version**: 1.0.0
