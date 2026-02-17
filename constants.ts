import { ServiceItem } from './types';

export const SERVICE_ITEMS: ServiceItem[] = [
  // Keynotes
  {
    id: 'keynote-1',
    category: 'Keynote',
    title: 'The Death of Syntax: Coding in the Era of AI Agents',
    targetAudience: 'Researchers and Developers',
    shortDescription: 'Stop writing lines of code and start orchestrating intelligence.',
    hook: 'Stop writing lines of code and start orchestrating intelligence. The era of the "manual coder" is sunsetting, making way for the Architect of Intent.',
    abstract: 'The industry is hitting a tipping point where the "how" of coding is becoming a solved problem. As AI agents evolve to handle the heavy lifting of syntax, debugging, and boilerplate, the traditional role of the developer is undergoing a fundamental promotion. This session explores the transition from being a writer of code to a Strategic Coordinator of Systems. We will provide a roadmap for navigating this shift, offering practical nuggets on how to work effectively with autonomous agents that handle the execution while you focus on high-level design and cross-team collaboration. We\'ll give you a glimpse into a future where the software lifecycle is defined by architectural vision rather than manual implementation, ensuring you remain the indispensable pilot of the machine.',
    whyCurrent: 'Grounded in today\'s agentic workflows (Claude Code, Cursor Agent, Devin-style tools), MCP integrations, and the shift from single-model chat to multi-agent orchestration—so your teams see themselves in the narrative.',
    experience: 'This is a highly engaging talk with live examples of coding and real-time agent demos. The audience is encouraged to participate: bring your own repo questions, vote on which scenario we debug live, and leave with a shared "orchestration checklist" you can use the next morning.',
    takeawaysTitle: 'Key Takeaways',
    takeaways: [
      {
        title: 'The Shift to Orchestration',
        description: 'Why the "Architect" mindset is the most valuable skill in an AI-driven SDLC.'
      },
      {
        title: 'Agentic Collaboration',
        description: 'Techniques for directing AI agents to handle the end-to-end coding process.'
      },
      {
        title: 'Seamless Synergy',
        description: 'How reducing the manual coding burden allows for deeper, more effective integration with product and design teams.'
      },
      {
        title: 'The Future of the Lifecycle',
        description: 'Navigating a world where your value is defined by the problems you solve, not the lines you type.'
      }
    ]
  },
  {
    id: 'keynote-2',
    category: 'Keynote',
    title: 'Occupationally Hazard-Free: Thriving in the Age of AI FOMO',
    targetAudience: 'Broad Professional Audience',
    shortDescription: 'Stop the sprint and start the strategy.',
    hook: 'AI won\'t take your occupation, but it might change your "job." Are you chasing every "shiny tool" only to feel further behind? It\'s time to stop the sprint and start the strategy.',
    abstract: 'The modern professional is suffering from "Tool Fatigue." With a new "revolutionary" AI launching every week, the fear of missing out (FOMO) is real, exhausting, and—most importantly—unproductive. This talk cuts through the noise. We explore the critical distinction between your occupation (your value and expertise) and your job (the tasks you do). We will move past the hype to provide a clear, sustainable methodology for staying ahead of the curve. Learn how to identify the 20% of tools that drive 80% of your results, allowing you to master the future of work without losing your mind.',
    whyCurrent: 'References the actual pace of 2025–2026—weekly model drops, agent frameworks, and copilot overload—so the "filter framework" feels like it was written for this quarter, not generic advice.',
    experience: 'A highly engaging talk with live examples and interactive moments where the audience is encouraged to participate: quick polls on which tools they use, shared "FOMO vs. focus" mapping, and a closing exercise where everyone leaves with a personal "20% stack" they can adopt immediately.',
    takeawaysTitle: 'Key Takeaways',
    takeaways: [
      {
        title: 'The Filter Framework',
        description: 'How to evaluate new tech without falling for the hype.'
      },
      {
        title: 'Future-Proofing Your Value',
        description: 'Why your human "occupation" is more secure than you think.'
      },
      {
        title: 'Sustainable Upskilling',
        description: 'A step-by-step guide to staying relevant in a volatile market.'
      }
    ]
  },
  {
    id: 'keynote-3',
    category: 'Keynote',
    title: 'From Mandate to Movement: Building Your AI Champion Network',
    targetAudience: 'Learning Managers and Executives',
    shortDescription: 'Top-down mandates don\'t create change; bottom-up desire does.',
    hook: 'Top-down mandates don\'t create change; bottom-up desire does. If your AI strategy is sitting in a PDF instead of being used in the office, you don\'t have a tech problem—you have a culture problem.',
    abstract: 'Executive buy-in and resource allocation are only half the battle. To truly transform an organization, you need more than just software licenses; you need a heartbeat. This keynote reveals the blueprint for building an internal "AI Champion" program. We move beyond the "Top-Down" approach to show how a decentralized team of enthusiasts can drive organic adoption, mitigate fear, and provide peer-to-peer coaching. We will break down real-world case studies of successful rollouts, detailing how to structure these teams, define their goals, and measure their impact on the bottom line.',
    whyCurrent: 'Tied to how modern L&D and IT actually roll out tools—Slack/Teams communities, internal hackathons, and champion KPIs that map to today\'s AI adoption dashboards—so learning managers see a path they can implement next quarter.',
    experience: 'This is a highly engaging talk with live examples and demonstrations where the audience is encouraged to participate: we run a mini "champion identification" exercise in the room, share anonymized rollout timelines from recent enterprises, and close with a template you can take back to build your own champion network—so the shift from mandate to movement starts in the room.',
    takeawaysTitle: 'Key Takeaways',
    takeaways: [
      {
        title: 'The Champion Blueprint',
        description: 'How to identify and recruit your internal influencers.'
      },
      {
        title: 'The Desire Engine',
        description: 'Moving employees from "I have to use this" to "I want to use this."'
      },
      {
        title: 'Scalable Success',
        description: 'Lessons learned from organizations that turned AI adoption into a competitive advantage.'
      }
    ]
  },
  // Workshops
  {
    id: 'workshop-1',
    category: 'Workshop',
    title: 'Deep Context & Repository Navigation: Pro-tier Cursor & Windsurf',
    targetAudience: 'Software Engineers working in 100k+ LOC repositories',
    shortDescription: 'Master the Context-Awareness Engines of 2026.',
    hook: 'Most AI tutorials fail because they ignore the complexity of legacy code and the "token tax" of large context windows. In this workshop, we move past basic autocomplete to master the Context-Awareness Engines of 2026.',
    abstract: 'Most AI tutorials fail because they ignore the complexity of legacy code and the "token tax" of large context windows. In this workshop, we move past basic autocomplete to master the Context-Awareness Engines of 2026.',
    whyCurrent: 'Built around 2026 tooling—Cursor rules, Windsurf Codemaps, MCP for Jira/Confluence—and real cost pressures (context pricing, RAG vs. full-index trade-offs) so engineers recognize their own stack.',
    experience: 'A highly engaging, hands-on workshop with live coding and demonstrations where the audience is encouraged to participate: follow along on your own machine, bring a real monorepo path, and pair with the facilitator to tune your .cursorrules so you leave with something that works for your codebase.',
    takeawaysTitle: 'Hands-On Modules',
    takeaways: [
      {
        title: 'The Indexing Masterclass',
        description: 'Configuring .cursorrules and Windsurf Codemaps to prioritize business-critical paths over noise. We\'ll show how to use RAG-based semantic search to find hidden dependencies across multi-package monorepos.'
      },
      {
        title: 'External Brain Integration',
        description: 'Connecting your editor to Jira and Confluence via the Model Context Protocol (MCP). Learn to prompt with live ticket data: "Implement the fix for JIRA-402, respecting the architecture defined in our Wiki."'
      },
      {
        title: 'Token Triage & Pruning',
        description: 'Practical strategies to reduce inference costs by 40% using manual context pinning (@-mentions) and "surgical" file selection instead of blanket codebase indexing.'
      }
    ],
    technicalTakeaway: 'You will leave with a custom .cursorrules template tailored for large-scale, interconnected systems.'
  },
  {
    id: 'workshop-2',
    category: 'Workshop',
    title: 'Claude Code CLI: Agentic Swarms & SDLC Automation',
    targetAudience: 'Senior Backend & Platform Engineers',
    shortDescription: 'Orchestrating a team of terminal agents is fast.',
    hook: 'Chatting with an LLM is slow. Orchestrating a team of terminal agents is fast. We dive into the Claude Code 2.1 CLI to build autonomous, parallelized workflows.',
    abstract: 'Chatting with an LLM is slow. Orchestrating a team of terminal agents is fast. We dive into the Claude Code 2.1 CLI to build autonomous, parallelized workflows.',
    whyCurrent: 'Uses the latest Claude Code CLI, Opus reasoning toggles, and real-world patterns (pre-commit hooks, parallel subagents) that align with how platform teams ship in 2025–2026.',
    experience: 'This is a highly engaging workshop with live examples of coding and terminal demos where the audience is encouraged to participate: run the same commands in your environment, suggest a feature to decompose live, and walk out with a working hook and scripts you can plug into your CI the same day.',
    takeawaysTitle: 'Hands-On Modules',
    takeaways: [
      {
        title: 'Multi-Agent Coordination',
        description: 'Setting up a "Team Lead" agent to decompose a feature request into sub-tasks. We will run parallel subagents—one for the implementation, one for unit tests, and one for documentation—all within a single terminal session.'
      },
      {
        title: 'Custom Lifecycle Hooks',
        description: 'Building deterministic triggers using /hooks. We\'ll create a Pre-Commit Hook that automatically runs a linter and sends the error logs back to Claude for an "auto-fix" before the commit is finalized.'
      },
      {
        title: 'Adaptive Thinking Budgets',
        description: 'Mastering the new Opus 4.6 "Reasoning effort" toggle. Learn when to use "Fast" mode for boilerplate and when to trigger "Deep Research" for complex architectural refactors.'
      }
    ],
    technicalTakeaway: 'A suite of CLI-ready scripts to automate PR descriptions, unit test generation, and CI/CD error recovery.'
  },
  {
    id: 'workshop-3',
    category: 'Workshop',
    title: 'The Human Architect: Auditing & Validating AI Logic',
    targetAudience: 'Tech Leads and Architects',
    shortDescription: 'Using AI to catch the mistakes made by other AI.',
    hook: 'AI-generated code often "works" but violates architectural boundaries. This workshop focuses on the Reviewer role, using AI to catch the mistakes made by other AI.',
    abstract: 'AI-generated code often "works" but violates architectural boundaries. This workshop focuses on the Reviewer role, using AI to catch the mistakes made by other AI.',
    whyCurrent: 'Covers Windsurf Flow State, Cursor Agent Skills, and the "shadow reviewer" pattern—directly addressing the quality and governance concerns that matter most as teams scale AI-generated code in 2026.',
    experience: 'A highly engaging workshop with live demonstrations and real PR-style examples where the audience is encouraged to participate: audit sample AI-generated patches together, vote on what counts as "architectural rot," and build your team\'s review checklist and guardrail prompts in the room so you can enforce them Monday morning.',
    takeawaysTitle: 'Hands-On Modules',
    takeaways: [
      {
        title: 'Architectural Guardrails',
        description: 'Using Windsurf Flow State to visualize how AI changes affect the broader system. We will practice "In-line Command + Follow-ups" to force the AI to refactor its own suggestions to match a specific Design Pattern (e.g., Clean Architecture or Hexagonal).'
      },
      {
        title: 'The "Shadow" PR Reviewer',
        description: 'Setting up an automated Claude Agent specifically to audit incoming AI-generated code for security vulnerabilities and "architectural rot."'
      },
      {
        title: 'Memory Management',
        description: 'Leveraging the Windsurf "Memories" and Cursor Agent Skills to ensure the AI "remembers" your team\'s specific coding standards across different sessions and projects.'
      }
    ],
    technicalTakeaway: 'A rigorous "Review Checklist" and a set of automated prompts to enforce code quality and prevent technical debt.'
  }
];

export const EMAIL_SUBJECT = "Request for a tailored keynote/workshop";
export const EMAIL_BODY = `Hi AM Consulting team,

I'd love to hop on a brief call to provide more context on my specific needs and explore potential collaboration.

Could you please suggest three available time slots for a Zoom call sometime next week?

Best regards,
[Your Name]`;

export const MAILTO_LINK = `mailto:office@amconsultingai.com?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export const IMAGES = {
  logo: 'https://github.com/israelichamberit-cmd/images/blob/main/AM_Logo.png?raw=true',
  instructor: 'https://github.com/israelichamberit-cmd/images/blob/main/avishay_casual_nw.png?raw=true',
  linkedin: 'https://github.com/israelichamberit-cmd/images/blob/main/linkedin.png?raw=true',
  heroBackground: 'https://github.com/israelichamberit-cmd/images/blob/main/AI_Chamber_Stage.jpeg?raw=true',
  slideOverHeader: 'https://github.com/israelichamberit-cmd/images/blob/main/AI_Chamber_stage_2.JPG?raw=true'
};