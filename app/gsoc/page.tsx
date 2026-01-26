import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";
import { Icons } from "@/components/utils/icons";
import {
  BookOpen,
  Bug,
  Code,
  Users,
  Boxes,
  MessageSquare,
  Terminal,
  Timer,
  Check as CheckIcon,
} from "lucide-react";
import { ProposalTemplate } from "@/components/gsoc/proposal-template";

export default function GSoCPage() {
  const currentYear = 2026;

  const projectIdeas = [
    {
      title: "WebRTC Optimization & Screen Sharing",
      description:
        "Implement low-latency screen sharing and adaptive bitrate streaming (simulcast) for 1:1 calls. Focus on optimizing bandwidth usage and connection stability.",
      scope: "175 hours (Medium)",
      difficulty: "Medium",
      skills: ["Next.js", "WebRTC", "Socket.io"],
      mentors: ["Jayanth (@jayanthmadhav)", "HelixQue Core"],
      repository: "https://github.com/HXQLabs/HelixQue",
    },
    {
      title: "Multiparty Group Conferencing",
      description:
        "Architect the backend and frontend for stable group calls. This involves handling multiple media streams efficiently using an SFU (Mediasoup) architecture.",
      scope: "350 hours (Large)",
      difficulty: "Hard",
      skills: ["Mediasoup", "Node.js", "WebSocket"],
      mentors: ["Jayanth (@jayanthmadhav)"],
      repository: "https://github.com/HXQLabs/HelixQue",
    },
    {
      title: "Intelligent Matching Engine",
      description:
        "Advanced matching algorithm handling complex constraints, reputation scores, and real-time availability. The goal is to perfect the pairing logic.",
      scope: "350 hours (Large)",
      difficulty: "Hard",
      skills: ["Node.js", "Redis", "PostgreSQL"],
      mentors: ["Jayanth (@jayanthmadhav)"],
      repository: "https://github.com/HXQLabs/helixque-match",
    },
    {
      title: "Instant Mentor Support",
      description:
        "Real-time mentorship platform. Users can view online mentors, request immediate assistance, and enter a queue for live support. Focus on low-latency connections.",
      scope: "175 hours (Medium)",
      difficulty: "Medium",
      skills: ["Next.js", "WebSocket", "Redis"],
      mentors: ["Frontend Team", "Backend Lead"],
      repository: "https://github.com/HXQLabs/helixque-mentroship",
    },
    {
      title: "Social Networking Ecosystem",
      description:
        "Build a complete social layer: Friend requests, user recommendations (friend-of-friend/interest-based), and real-time 1:1/Group messaging.",
      scope: "350 hours (Large)",
      difficulty: "Hard",
      skills: ["Socket.io", "Redis", "Postgres", "Graph Theory"],
      mentors: ["Frontend Team"],
      repository: "https://github.com/HXQLabs/HelixQue",
    },
    {
      title: "UI/UX Modernization & Accessibility",
      description:
        "Revamp the core interface with a focus on accessibility (WCAG 2.1), dark mode consistency, and micro-interactions. Implement a refined design system using Tailwind CSS and Radix UI.",
      scope: "175 hours (Medium)",
      difficulty: "Medium",
      skills: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
      mentors: ["Design Lead", "Jayanth (@jayanthmadhav)"],
      repository: "https://github.com/HXQLabs/helixque-ui",
    },
  ];

  return (
    <div className="bg-background relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] transform-gpu will-change-transform" />
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-3 py-1 text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 shadow-sm"
          >
            Google Summer of Code {currentYear}
          </Badge>

          <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Build the Future of <br className="hidden sm:block" />
            <AuroraText>Open Source</AuroraText> with HelixQue
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We are excited to participate in GSoC {currentYear}! Join us to
            build a next-generation collaboration platform backed by the power
            of Vercel&apos;s ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/helixque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-2.5 font-medium transition-transform hover:scale-105"
            >
              <Users className="w-4 h-4" />
              Join Community
            </a>
            <a
              href="#project-ideas"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 font-medium hover:bg-muted transition-colors"
            >
              <Code className="w-4 h-4" />
              View Ideas
            </a>
          </div>
        </div>
      </div>

      {/* Vercel & Backing Section */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur-sm">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Supported By
          </p>
          <div className="flex items-center justify-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Replace with actual SVGs or Icons if available, text for now */}
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 1155 1000"
                className="h-8 w-auto fill-foreground"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M577.344 0L1154.69 1000H0L577.344 0Z" />
              </svg>
              <span className="text-2xl font-bold tracking-tighter">
                Vercel
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            We are proud to be part of the Vercel OSS sponsorship program,
            providing our contributors with world-class infrastructure.
          </p>
        </div>
      </div>

      {/* Project Ideas Section */}
      <div id="project-ideas" className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Project Ideas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a project that matches your skills and interests. We are
            looking for passionate contributors who want to make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectIdeas.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <Badge
                  variant="outline"
                  className={`${
                    project.difficulty === "Easy"
                      ? "border-green-500/50 text-green-600"
                      : project.difficulty === "Medium"
                        ? "border-yellow-500/50 text-yellow-600"
                        : "border-red-500/50 text-red-600"
                  }`}
                >
                  {project.difficulty}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Timer className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Scope:</span> {project.scope}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Boxes className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Stack:</span>{" "}
                  {project.skills.join(", ")}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">Mentors:</span>{" "}
                  {project.mentors.join(", ")}
                </div>
                <div className="pt-2">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icons.github className="w-3.5 h-3.5" />
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center bg-muted/20 p-4 rounded-lg border border-dashed border-muted-foreground/30">
          <p className="text-sm text-muted-foreground">
            Don&apos;t see something you like? We are open to original
            proposals!
            <a
              href="https://github.com/HXQLabs/"
              className="text-blue-500 hover:underline ml-1"
            >
              Check our repositories
            </a>{" "}
            and pitch your idea.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-3 text-left">
            <div className="p-6 rounded-xl border bg-card/50">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Dedicated Mentorship</h3>
              <p className="text-sm text-muted-foreground">
                Every contributor is paired with a specific mentor for weekly
                1:1 guidance and code reviews.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card/50">
              <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Modern Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                Learn production-grade Next.js, Type-Safety, and Scalable
                Architecture standards.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card/50">
              <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Outstanding contributors get referrals, LinkedIn
                recommendations, and long-term roles.
              </p>
            </div>
          </div>
        </div>

        {/* Selection Process Section */}
        <div className="max-w-4xl mx-auto px-6 mb-24 mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Selection Criteria
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We value quality over quantity. Here is how we evaluate proposals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-4 text-sm text-muted-foreground border p-6 rounded-xl bg-muted/10">
              <li className="flex gap-3">
                <div className="mt-1">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <span>
                  <strong>Communication:</strong> Active participation in
                  Discord and clear, concise updates.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <span>
                  <strong>Code Quality:</strong> Your &quot;Good First
                  Issue&quot; PRs should demonstrate clean, typed, and tested
                  code.
                </span>
              </li>
            </ul>
            <ul className="space-y-4 text-sm text-muted-foreground border p-6 rounded-xl bg-muted/10">
              <li className="flex gap-3">
                <div className="mt-1">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <span>
                  <strong>Proposal Detail:</strong> We look for realistic
                  timelines and a deep understanding of the problem statement.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1">
                  <CheckIcon className="w-4 h-4 text-green-500" />
                </div>
                <span>
                  <strong>Collaboration:</strong> Helping others in the
                  community is a major plus point.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How to Apply / Template Section */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How to Apply
          </h2>
          <p className="text-muted-foreground">
            Follow these steps to submit a winning proposal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lg">Join Discord</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Introduce yourself in the #gsoc-2026 channel. We want to know
                  who you are!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lg">Explore the Codebase</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Setup the project locally. Try to fix a &quot;good first
                  issue&quot; to demonstrate your skills.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lg">Draft Your Proposal</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Use our template below. Be detailed about your timeline and
                  deliverables.
                </p>
              </div>
            </div>
          </div>

          <ProposalTemplate className="h-[26rem]" />
        </div>
      </div>
    </div>
  );
}
