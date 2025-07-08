# Sharon's Blog
This is a [Next.js 15](https://nextjs.org) project that allows people to make blog posts that can be viewed by everyone. I created it following a [tutorial](https://www.youtube.com/watch?v=PqxHnMfyCUY) (with a few of my own additions) to improve at Next.js and Typescript. I also submitted it to HackClub's Shipwrecked Bay.

## Live deployment
NOTE: I don't have any live moderation so anybody can post anything. The link is only available on HackClub's Bay and here so there's probably nothing bad, but proceed with caution. Feel free to add a blog post but please use common sense: keep it appropriate and don't write any sensitive information.

Website: https://blog-rosy-mu-rabca91ieq.vercel.app/

## Features
- React Server Components
- App Router
- Image optimization
- Protected routes using middleware
- Server actions for data mutations
- Authentication using [Kinde](https://kinde.com/)
- Database using [Neon](https://neon.com/) and [Prisma](https://www.prisma.io/)
- Animations using [Motion for React](https://motion.dev/)
- Caching and Streaming for responsive design

## Running locally

Clone the repository:
```bash
git clone https://github.com/sharonbasovich/blog.git
```

Go into the project folder:
```bash
cd .\blog\
```

Install dependencies:
```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (you will need to set up your own Neon database and Kinde auth and setup a .env for proper functionality). 
