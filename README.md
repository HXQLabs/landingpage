<p align="center">
<a href="https://github.com/HXQLabs/Helixque">
  <img src="assets/header.png" alt="Helixque Header" width="100%">
</a>
</p>
<p align="center"><b>Professional real-time video chat with preference-based matching</b></p>

<p align="center">
<a href="https://discord.gg/dQUh6SY9Uk">
<img alt="Discord" src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white&style=for-the-badge" />
</a>
<img alt="Commit activity per month" src="https://img.shields.io/github/commit-activity/m/HXQLabs/Helixque?style=for-the-badge" />
<img alt="License" src="https://img.shields.io/badge/license-Apache%202.0-blue?style=for-the-badge" />
</p>

<p align="center">
    <a href="https://github.com/HXQLabs/helixque-landing"><b>GitHub</b></a> •
    <a href="https://github.com/HXQLabs/helixque-landing/releases"><b>Releases</b></a> •
    <a href="https://discord.gg/dQUh6SY9Uk"><b>Discord</b></a> •
    <a href="#deployment"><b>Deployment Guide</b></a>
</p>

Meet [Helixque](https://github.com/HXQLabs/Helixque), a professional real-time video chat application that pairs people based on their preferences. Built with WebRTC for secure, low-latency peer-to-peer media and Socket.IO for reliable signaling—delivering a modern experience for networking, interviews, and collaboration. 🎥

> Helixque is continuously evolving. Your suggestions, ideas, and reported bugs help us immensely. Do not hesitate to join the conversation on [Discord](https://discord.gg/dQUh6SY9Uk) or raise a GitHub issue. We read everything and respond to most.

# Helixque

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Helixque is a professional networking platform designed for builders, learners, and mentors in the tech community. It enables instant matching based on skills, industry, and language preferences, facilitating meaningful connections for learning, mentoring, and collaboration through text or video without the awkwardness of traditional networking.

## ✨ Key Features

- **Professional Profile**: Build a credible profile showcasing your skills, languages, experience level, and goals to help others understand your background.
- **Smart Matching Algorithm**: Advanced filtering by skills, industry, and language with balanced experience levels and randomized pairing to reduce bias.
- **Professional Networking Sessions**: Engage in mock interviews (behavioral & technical), pair programming, portfolio critiques, startup pitch practice, and more.
- **Real-Time Chats**: Instant professional connections with seamless messaging and typing indicators.
- **Open Source Community**: Built by professionals for professionals, with transparent development and community-driven improvements.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HXQLabs/helixque-landing.git
   cd helixque-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables (optional for full functionality):
   - Create a `.env.local` file in the root directory
   - Add your GitHub Personal Access Token for enhanced rate limits:

     ```text
     NEXT_PUBLIC_GH_TOKEN=your_github_token_here
     ```

   - Add Discord invite code and GitHub repo for community features:

     ```text
     NEXT_PUBLIC_DISCORD_INVITE_CODE=your_discord_invite
     NEXT_PUBLIC_GITHUB_REPO=your_github_repo
     ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📖 Usage

### For Users

1. **Create Your Profile**: Sign up and build your professional profile with skills, languages, and career goals.
2. **Get Matched**: Use the smart matching algorithm to find compatible professionals for networking sessions.
3. **Connect**: Engage in real-time chats or video calls for mock interviews, mentoring, or collaboration.
4. **Grow Your Network**: Participate in various professional development activities and build meaningful connections.

### For Developers

- **Development**: The app auto-reloads during development. Edit files in the `app/` directory for page changes.
- **Content Management**: Add announcements and changelogs in the `content/` directory using MDX format.
- **Styling**: Customize UI components in the `components/` directory. The project uses Tailwind CSS for styling.
- **API Integration**: Extend functionality by adding API routes in `app/api/` or integrating with external services.

## 🏗️ Tech Stack & Architecture

### Core Technologies

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Content**: MDX with Fumadocs
- **3D Graphics**: Three.js, React Three Fiber

### Key Dependencies

- `@radix-ui/*`: Accessible UI primitives
- `framer-motion`: Animation library
- `next-themes`: Theme management
- `recharts`: Data visualization
- `gray-matter`: Frontmatter parsing for MDX
- `react-markdown`: Markdown rendering

### Architecture Overview

- **Pages**: Built with Next.js App Router (`app/` directory)
- **Components**: Modular UI components in `components/` with sections, UI primitives, and utilities
- **Content**: MDX-based content system for announcements, changelogs, and documentation
- **API Routes**: Server-side API endpoints for Discord integration and data fetching
- **Styling**: Utility-first CSS with Tailwind, custom themes, and responsive design
- **Deployment**: Optimized for static generation and server-side rendering

## 🤝 Contributing

We welcome contributions from the community! Helixque is built by professionals for professionals, and your input helps make it better.

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Development Guidelines

- **Code Style**: Follow the existing TypeScript and React patterns
- **Components**: Use the established component structure in `components/`
- **Styling**: Prefer Tailwind classes and follow the design system
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Test your changes thoroughly before submitting
- **Documentation**: Update relevant documentation for new features

### Areas for Contribution

- UI/UX improvements
- New features for networking sessions
- Performance optimizations
- Accessibility enhancements
- Documentation improvements
- Bug fixes and issue resolution

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

### Acknowledgments

Thanks to the open-source projects that made Helixque possible:

- [WebRTC](https://webrtc.org/) - Real-time communication
- [Socket.IO](https://socket.io/) - Real-time bidirectional communication
- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
