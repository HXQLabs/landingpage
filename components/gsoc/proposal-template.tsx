"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const TEMPLATE_CONTENT = `# Project Title

## 1. Personal Details
- **Name:** Your Full Name
- **Email:** your.email@example.com
- **GitHub:** @yourusername
- **Timezone:** UTC+X
- **Education:** University, Major, Year

## 2. Project Abstract
(A concise summary of the project. What problem are you solving? What is the proposed solution?)

## 3. Project Goals
- Objective 1
- Objective 2
- Objective 3

## 4. Benefits to the Community
(How will this project help HelixQue users and the open-source ecosystem?)

## 5. Deliverables
**Phase 1:**
- [ ] Deliverable A
- [ ] Deliverable B

**Phase 2:**
- [ ] Deliverable C
- [ ] Deliverable D

## 6. Detailed Timeline
- **Community Bonding (May 1 - May 26):** 
    - Get familiar with codebase
    - Setup dev environment
- **Week 1-2:** Implementation of Feature X...
- **Week 3-4:** Testing and refinement...
- **Mid-Term Eval:** ...
- **Week 5-8:** ...
- **Final Week:** Documentation and final PRs...

## 7. Technical Approach
(Architecture, libraries to be used, database schema changes, API design, etc.)

## 8. Availability & Commitment
- How many hours per week can you dedicate? (e.g., 30-40h)
- Do you have other commitments (exams, internships)?

## 9. Why You?
(Your relevant experience, links to previous PRs/projects, and why you are the right person for this task)`;

export function ProposalTemplate({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TEMPLATE_CONTENT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border bg-zinc-950 p-4 overflow-hidden relative group flex flex-col",
        className,
      )}
    >
      <div className="absolute top-2 right-2 z-10" onClick={handleCopy}>
        <Badge
          variant="secondary"
          className="cursor-pointer flex items-center gap-1 transition-colors"
        >
          {copied ? (
            <Check className="w-3 h-3" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </Badge>
      </div>
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 mb-2 shrink-0">
        <Terminal className="w-4 h-4 text-zinc-400" />
        <span className="text-xs font-mono text-zinc-400">
          proposal-template.md
        </span>
      </div>
      <pre className="text-xs text-zinc-300 font-mono overflow-auto flex-1 leading-relaxed scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {TEMPLATE_CONTENT}
      </pre>
    </div>
  );
}
