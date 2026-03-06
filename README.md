User Request
│
▼
Middleware (proxy)
│
▼
Get pathname + cookies
(accessToken, refreshToken)
│
▼
Verify Access Token
│
├── ❌ Invalid Token
│ │
│ ▼
│ Redirect → /login
│
▼
Decode Token
(get userRole)
│
▼
Check Token Expiring Soon
│
├── YES
│ │
│ ▼
│ Refresh Token
│
▼
Check Route Type
│
├── Auth Route
│ (/login, /register)
│ │
│ ▼
│ Redirect → Dashboard
│
├── Public Route
│ │
│ ▼
│ Allow Access
│
├── Protected Route
│ │
│ ▼
│ Check Login
│
│ ├── Not Logged In
│ │ │
│ │ ▼
│ │ Redirect → /login
│ │
│ ▼
│ Check Email Verified
│
│ ├── ❌ Not Verified
│ │ │
│ │ ▼
│ │ Redirect → /verify-email
│ │
│ ▼
│ Check Need Password Change
│
│ ├── YES
│ │ │
│ │ ▼
│ │ Redirect → /reset-password
│ │
│ ▼
│ Check Role Permission
│
│ ├── ❌ Wrong Role
│ │ │
│ │ ▼
│ │ Redirect → Default Dashboard
│ │
│ ▼
│ ✅ Access Allowed
│
▼
NextResponse.next()
