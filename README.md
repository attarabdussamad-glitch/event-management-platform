# Event Management Platform
## Professional Mega Career & Recruitment Fair – Mumbai

Reusable full-stack event management website.

**Stack:** Next.js 15 · TypeScript · Tailwind · Prisma · Neon PostgreSQL · Auth.js · Vercel Blob · Resend

Designed so students can deploy with only GitHub + Vercel (no terminal).

---

## Included Features (Career-fair focused)

### Public
- Home page driven by event configuration in the database
- Registration form with categories (Job Seeker, Student, Employer, Sponsor, Visitor)
- Job-seeker profile fields (qualification, skills, experience, preferred role, LinkedIn)
- Consent for sharing data with employers
- Unique Registration ID + Ticket Number + secure QR token
- Confirmation email (Resend)

### Admin / Backend
- One-time `/setup` page to create Super Admin
- Admin login (email + password)
- Roles foundation: SUPER_ADMIN, EVENT_MANAGER, REGISTRATION_MANAGER, CHECKIN_STAFF
- Full Prisma schema for events, registrations, tickets, job seeker profiles, employers, enquiries, SPOCs, speakers, sponsors, email logs, audit logs

---

## Student Deployment (No Terminal)

### 1. Download & Extract
Download the ZIP and extract it.

### 2. Upload to GitHub
1. Create a new empty repository on GitHub.
2. Use **uploading an existing file**.
3. Drag all project files into the browser and commit.

### 3. Neon Database
1. Create a free project at neon.tech.
2. Copy the **pooled** connection string → `DATABASE_URL`
3. Copy the **direct** connection string → `DATABASE_URL_UNPOOLED`

### 4. Deploy on Vercel
1. Import the GitHub repo in Vercel.
2. Add these Environment Variables:

**Required**
- `DATABASE_URL`
- `DATABASE_URL_UNPOOLED`
- `AUTH_SECRET` (any long random string, 32+ characters)
- `NEXT_PUBLIC_APP_URL` (your Vercel URL, e.g. https://xxx.vercel.app)

**Optional but recommended**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_FROM_NAME`
- `BLOB_READ_WRITE_TOKEN`

3. Click Deploy.

### 5. First-time Setup
Visit: `https://your-app.vercel.app/setup`

Create the Super Admin account, then log in at `/admin/login`.

---

## Important Routes

| Path | Purpose |
|------|---------|
| `/` | Public home |
| `/register` | Registration |
| `/setup` | Create first Super Admin |
| `/admin/login` | Admin login |
| `/api/register` | Registration endpoint |
| `/api/setup` | Setup endpoint |

---

## Implementation Status

**Working in this package**
- Complete Prisma schema
- Event model + seed data
- Public home page (DB-backed)
- Full registration flow with categories + job-seeker fields
- Ticket + QR token generation
- Confirmation email via Resend
- One-time setup + Super Admin creation
- Admin login
- Ticket types API

**Ready for extension (schema + architecture already support)**
- Full admin CRUD dashboard modules
- SPOC assignment UI
- Resume upload to Vercel Blob
- QR scanner check-in interface
- Employer / Sponsor enquiry forms
- Advanced form builder
- Email campaign composer
- CSV reports

---

## Notes
- Never put secrets in the code or GitHub.
- Set all secrets only in the Vercel dashboard.
- After first deploy, run `/setup` before using the admin area.

This platform is intended as a reusable base that any student team can customize for their own career fair or college event.
