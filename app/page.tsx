'use client'

import { useState } from 'react'

type Phase = {
  title: string
  duration: string
  revenue: string
  tasks: string[]
  tools: { name: string; purpose: string }[]
  metrics: string[]
}

type Strategy = {
  id: number
  name: string
  description: string
  difficulty: string
  timeToRevenue: string
  phases: Phase[]
}

export default function Home() {
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null)
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  const strategies: Strategy[] = [
    {
      id: 1,
      name: 'AI Content Creation & Monetization',
      description: 'Create high-quality content using free AI tools and monetize through multiple channels',
      difficulty: 'Beginner-Friendly',
      timeToRevenue: '2-4 weeks',
      phases: [
        {
          title: 'Phase 1: Foundation & Setup',
          duration: 'Week 1',
          revenue: '$0',
          tasks: [
            'Create accounts on all free AI platforms (ChatGPT Free, Claude.ai, Gemini, Perplexity)',
            'Set up Medium.com account for blogging (Partner Program eligible)',
            'Create YouTube channel for AI-generated video content',
            'Sign up for Gumroad (free tier) to sell digital products',
            'Register on Fiverr and Upwork as content creator',
            'Join AI communities on Reddit, Discord, and Twitter for networking'
          ],
          tools: [
            { name: 'ChatGPT Free', purpose: 'Article writing, ideation, research' },
            { name: 'Claude.ai Free', purpose: 'Long-form content, editing, refinement' },
            { name: 'Gemini Free', purpose: 'Research, fact-checking, alternative perspectives' },
            { name: 'Perplexity Free', purpose: 'Research with citations, trend analysis' },
            { name: 'Canva Free', purpose: 'Graphics, thumbnails, social media posts' },
            { name: 'Leonardo.ai Free', purpose: '150 AI images/day for content' }
          ],
          metrics: [
            'All accounts created and verified',
            'First 3 sample articles written (unpublished)',
            'YouTube channel configured with branding',
            'Gumroad storefront setup complete'
          ]
        },
        {
          title: 'Phase 2: Content Production Sprint',
          duration: 'Week 2-3',
          revenue: '$50-200',
          tasks: [
            'Publish 2-3 high-quality Medium articles daily (SEO-optimized)',
            'Create 5-7 YouTube videos using AI tools (shorts + long-form)',
            'Design and launch first digital product (AI prompt guide, templates)',
            'Post 10+ portfolio pieces showcasing AI content skills',
            'Apply to 20-30 content writing gigs on Fiverr/Upwork',
            'Engage in 10+ AI-related discussions daily to build authority'
          ],
          tools: [
            { name: 'ChatGPT', purpose: 'Generate 15-20 article outlines daily' },
            { name: 'Grammarly Free', purpose: 'Polish and edit content' },
            { name: 'HeyGen Free', purpose: 'AI avatar videos (1 min/day free)' },
            { name: 'D-ID Free', purpose: 'Alternative AI video creation' },
            { name: 'Descript Free', purpose: 'Video editing (30 mins export/month)' },
            { name: 'ElevenLabs Free', purpose: '10k characters/month voiceover' },
            { name: 'RunwayML Free', purpose: '125 credits/month for AI video' }
          ],
          metrics: [
            '40-60 Medium articles published',
            '10-15 YouTube videos live',
            'First digital product launched',
            '3-5 client conversations started',
            'Medium Partner Program application submitted'
          ]
        },
        {
          title: 'Phase 3: Monetization & Scaling',
          duration: 'Week 4-8',
          revenue: '$500-1000',
          tasks: [
            'Land 2-3 consistent content clients ($200-400 each)',
            'Optimize Medium articles for maximum read time and earnings',
            'Scale YouTube to daily uploads using batch creation',
            'Launch second and third digital products (courses, ebooks)',
            'Build email list using free ConvertKit plan',
            'Create affiliate content for AI tools (commission earnings)',
            'Develop reusable content templates for efficiency'
          ],
          tools: [
            { name: 'NotebookLM', purpose: 'Research and podcast generation from notes' },
            { name: 'Gamma.app Free', purpose: 'Create presentation decks/courses' },
            { name: 'Tome Free', purpose: 'Alternative AI presentation tool' },
            { name: 'ConvertKit Free', purpose: 'Email marketing (1000 subscribers)' },
            { name: 'Beehiiv Free', purpose: 'Newsletter platform alternative' },
            { name: 'Poe.com', purpose: 'Access multiple AI models daily' }
          ],
          metrics: [
            '2-3 retainer clients secured',
            '$200-400/month Medium revenue',
            '$100-200/month digital product sales',
            'YouTube monetization requirements 50% complete',
            '500+ email subscribers'
          ]
        },
        {
          title: 'Phase 4: Optimization & $2000 Target',
          duration: 'Week 9-12',
          revenue: '$1500-2500',
          tasks: [
            'Expand client base to 5-7 consistent projects',
            'Achieve YouTube monetization (1000 subs, 4000 watch hours)',
            'Scale digital product line to 5-7 products',
            'Launch AI-powered service packages on Gumroad',
            'Create recurring revenue with membership/Patreon',
            'Automate content workflows with AI systems',
            'Build personal brand as "AI content expert"'
          ],
          tools: [
            { name: 'Zapier Free', purpose: 'Automate workflows (100 tasks/month)' },
            { name: 'Make.com Free', purpose: 'Alternative automation platform' },
            { name: 'Notion AI Free', purpose: 'Project management + AI writing' },
            { name: 'Patreon', purpose: 'Recurring membership revenue' },
            { name: 'Ko-fi', purpose: 'Tips and membership alternative' }
          ],
          metrics: [
            '$800-1200 from client work',
            '$300-500 from Medium',
            '$200-400 from digital products',
            '$100-300 from YouTube',
            '$100-200 from affiliates/other'
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'AI-Powered Freelance Services',
      description: 'Offer high-value services powered by AI tools while charging professional rates',
      difficulty: 'Intermediate',
      timeToRevenue: '1-2 weeks',
      phases: [
        {
          title: 'Phase 1: Service Design & Positioning',
          duration: 'Week 1',
          revenue: '$0',
          tasks: [
            'Identify 3-5 high-demand services you can deliver with AI (copywriting, design, research, data analysis)',
            'Create compelling service packages with clear deliverables',
            'Build portfolio with 10-15 sample projects using AI tools',
            'Set up profiles on Upwork, Fiverr, Contra, and PeoplePerHour',
            'Design service presentation decks and case studies',
            'Research competitor pricing and positioning'
          ],
          tools: [
            { name: 'ChatGPT', purpose: 'Service descriptions, proposals, client communication' },
            { name: 'Claude', purpose: 'Complex deliverables, research reports' },
            { name: 'Canva Pro Free Trial → Free', purpose: 'Portfolio pieces, client deliverables' },
            { name: 'Figma Free', purpose: 'UI/UX design mockups, prototypes' },
            { name: 'Gamma.app', purpose: 'Pitch decks and presentations' },
            { name: 'Beautiful.ai Free', purpose: 'Professional slide decks' }
          ],
          metrics: [
            'All freelance profiles live and optimized',
            '10+ portfolio pieces ready',
            '3-5 service packages defined',
            'First 50 proposals sent'
          ]
        },
        {
          title: 'Phase 2: Client Acquisition',
          duration: 'Week 2-3',
          revenue: '$300-600',
          tasks: [
            'Send 30-50 proposals daily across platforms',
            'Offer first-time client discount to build reviews',
            'Deliver exceptional quality using AI assistance',
            'Request testimonials and 5-star reviews',
            'Refine services based on market feedback',
            'Build case studies from completed projects',
            'Network in niche communities and forums'
          ],
          tools: [
            { name: 'Jasper Free Trial', purpose: '7 days of premium AI copywriting' },
            { name: 'Copy.ai Free', purpose: '2000 words/month marketing copy' },
            { name: 'Writesonic Free', purpose: '10k words/month content generation' },
            { name: 'Looka Free', purpose: 'Logo design samples (download with trial)' },
            { name: 'Remove.bg Free', purpose: 'Image editing for deliverables' },
            { name: 'Photopea', purpose: 'Free Photoshop alternative' }
          ],
          metrics: [
            '5-10 clients secured',
            '8-12 five-star reviews',
            '$300-600 earned',
            '20+ proposals in pipeline'
          ]
        },
        {
          title: 'Phase 3: Service Scaling',
          duration: 'Week 4-6',
          revenue: '$800-1200',
          tasks: [
            'Increase rates by 30-50% with social proof',
            'Develop service templates for faster delivery',
            'Offer retainer packages ($500-1000/month)',
            'Upsell existing clients to larger projects',
            'Create automated onboarding process',
            'Build referral system with incentives',
            'Expand to 2-3 additional service offerings'
          ],
          tools: [
            { name: 'Notion', purpose: 'Client project management' },
            { name: 'Trello Free', purpose: 'Workflow tracking' },
            { name: 'Calendly Free', purpose: 'Client scheduling' },
            { name: 'Descript Free', purpose: 'Video editing for deliverables' },
            { name: 'Synthesia Free Trial', purpose: 'AI video presentations for clients' },
            { name: 'Loom Free', purpose: 'Screen recordings and updates' }
          ],
          metrics: [
            '10-15 active clients',
            '2-3 retainer clients',
            '30+ five-star reviews',
            'Average project value $100-150'
          ]
        },
        {
          title: 'Phase 4: Premium Positioning',
          duration: 'Week 7-12',
          revenue: '$2000-3000',
          tasks: [
            'Transition to premium pricing ($150-300/project)',
            'Secure 3-5 high-value retainer clients',
            'Create exclusive "VIP" service tier',
            'Build personal brand website (free hosting)',
            'Develop signature frameworks and processes',
            'Start selective outreach to ideal clients',
            'Document and systematize delivery workflows'
          ],
          tools: [
            { name: 'Carrd Free', purpose: 'Professional single-page website' },
            { name: 'GitHub Pages', purpose: 'Free website hosting' },
            { name: 'Vercel Free', purpose: 'Alternative free hosting' },
            { name: 'Claude Projects', purpose: 'Complex client deliverables' },
            { name: 'Poe', purpose: 'Access to GPT-4, Claude, and others' }
          ],
          metrics: [
            '$1500-2000 from retainers',
            '$500-1000 from project work',
            '50+ reviews across platforms',
            'Top Rated/Rising Talent status achieved'
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'AI Digital Products Empire',
      description: 'Create and sell AI-generated digital products with minimal ongoing effort',
      difficulty: 'Beginner-Friendly',
      timeToRevenue: '2-3 weeks',
      phases: [
        {
          title: 'Phase 1: Product Research & Creation',
          duration: 'Week 1-2',
          revenue: '$0',
          tasks: [
            'Research top-selling digital products on Gumroad, Etsy, Creative Market',
            'Identify 10-15 product ideas with high demand, low competition',
            'Create first batch of 20-30 products using AI tools',
            'Design product mockups and preview images',
            'Write compelling product descriptions and SEO copy',
            'Set up storefronts on Gumroad, Etsy, Creative Fabrica'
          ],
          tools: [
            { name: 'ChatGPT', purpose: 'Product ideas, descriptions, templates' },
            { name: 'Midjourney Free Trial', purpose: '25 free AI images to start' },
            { name: 'Leonardo.ai', purpose: '150 daily tokens for image generation' },
            { name: 'Playground AI', purpose: '500 images/day free' },
            { name: 'Stable Diffusion (free local)', purpose: 'Unlimited image generation' },
            { name: 'Canva', purpose: 'Product templates, mockups, branding' }
          ],
          metrics: [
            '20-30 products created',
            'All storefronts live',
            'SEO-optimized listings',
            'Professional mockups ready'
          ]
        },
        {
          title: 'Phase 2: Launch & Initial Sales',
          duration: 'Week 3-4',
          revenue: '$100-300',
          tasks: [
            'Launch products with introductory pricing',
            'Share on Pinterest, Twitter, Instagram (organic)',
            'Post in relevant Facebook groups and Reddit communities',
            'Create blog content around product topics',
            'Develop product bundles and upsells',
            'Gather initial customer feedback and reviews',
            'Create lead magnets to build email list'
          ],
          tools: [
            { name: 'Buffer Free', purpose: 'Schedule 10 posts across 3 platforms' },
            { name: 'Later Free', purpose: 'Social media scheduling (30 posts/month)' },
            { name: 'Pinterest', purpose: 'High-intent traffic source (free)' },
            { name: 'Tailwind Free Trial', purpose: 'Pinterest scheduling boost' },
            { name: 'ConvertKit Free', purpose: 'Email marketing (1000 subs)' },
            { name: 'Sendfox Free', purpose: 'Unlimited emails, 1000 contacts' }
          ],
          metrics: [
            'First 10-20 sales',
            '500+ product views',
            '2-5% conversion rate',
            '100+ email subscribers'
          ]
        },
        {
          title: 'Phase 3: Scaling Product Line',
          duration: 'Week 5-8',
          revenue: '$500-800',
          tasks: [
            'Expand to 50-100 total products',
            'Create product lines and themed collections',
            'Develop PLR (Private Label Rights) products for B2B',
            'Offer customization services for premium pricing',
            'Build affiliate program for products',
            'Create YouTube content showcasing products',
            'Optimize listings based on analytics data'
          ],
          tools: [
            { name: 'Google Trends', purpose: 'Identify trending product ideas' },
            { name: 'Ubersuggest Free', purpose: 'Keyword research (3 searches/day)' },
            { name: 'AnswerThePublic Free', purpose: 'Content and product ideas' },
            { name: 'Pixabay/Pexels', purpose: 'Free stock images for products' },
            { name: 'RemoveBG', purpose: 'Background removal for mockups' },
            { name: 'Photopea', purpose: 'Advanced image editing' }
          ],
          metrics: [
            '50-100 products live',
            '$500-800 monthly revenue',
            '1000+ email subscribers',
            '10-15% repeat customer rate'
          ]
        },
        {
          title: 'Phase 4: Automation & $2000 Goal',
          duration: 'Week 9-12',
          revenue: '$1500-2500',
          tasks: [
            'Expand to 150-200+ products across niches',
            'Implement automated email sequences for upsells',
            'Create "product of the week" membership tier',
            'Launch on additional marketplaces (Teachers Pay Teachers, etc)',
            'Develop high-ticket product bundles ($50-100)',
            'Build automated social media posting system',
            'Create passive traffic sources (SEO blog, Pinterest)'
          ],
          tools: [
            { name: 'Zapier Free', purpose: 'Automate sales notifications, emails' },
            { name: 'IFTTT Free', purpose: 'Alternative automation tool' },
            { name: 'Notion', purpose: 'Product pipeline management' },
            { name: 'Google Analytics', purpose: 'Track traffic and conversions' },
            { name: 'Hotjar Free', purpose: 'User behavior insights' }
          ],
          metrics: [
            '$1200-1500 from product sales',
            '$300-500 from custom orders',
            '$200-300 from memberships/PLR',
            '3000+ email subscribers',
            '200+ products generating passive income'
          ]
        }
      ]
    }
  ]

  const freeAiTools = [
    { name: 'ChatGPT Free', category: 'Text AI', limit: 'Unlimited basic access, GPT-3.5' },
    { name: 'Claude.ai Free', category: 'Text AI', limit: 'Generous daily message limit' },
    { name: 'Google Gemini', category: 'Text AI', limit: 'Free access to Gemini Pro' },
    { name: 'Perplexity AI', category: 'Research', limit: '5 Pro searches/day + unlimited basic' },
    { name: 'Leonardo.ai', category: 'Images', limit: '150 tokens/day' },
    { name: 'Playground AI', category: 'Images', limit: '500 images/day' },
    { name: 'Microsoft Designer', category: 'Images', limit: '15 boosts/day with Microsoft account' },
    { name: 'Canva Free', category: 'Design', limit: 'Extensive free tier' },
    { name: 'HeyGen Free', category: 'Video', limit: '1 min/day AI avatar video' },
    { name: 'D-ID Free', category: 'Video', limit: '20 credits/month' },
    { name: 'ElevenLabs', category: 'Voice', limit: '10k characters/month' },
    { name: 'Descript Free', category: 'Video Editing', limit: '30 mins export/month' },
    { name: 'Gamma.app', category: 'Presentations', limit: '400 AI credits/month' },
    { name: 'NotebookLM', category: 'Research', limit: 'Unlimited free access' },
    { name: 'Poe.com', category: 'Multi-AI', limit: 'Daily access to multiple models' },
  ]

  const quickWins = [
    {
      title: 'Day 1: First $50',
      actions: [
        'Create 5 AI-generated social media template packs → List on Gumroad for $10 each',
        'Write 3 Medium articles on trending AI topics → Apply for Partner Program',
        'Sign up for Fiverr, create 3 gigs: "AI Content Writing", "AI Logo Design", "AI Research Reports"'
      ]
    },
    {
      title: 'Day 2-3: First Client',
      actions: [
        'Send 50 proposals on Upwork for content writing jobs (use AI to customize each)',
        'Create portfolio website on Carrd showcasing AI-generated work samples',
        'Join 10 Facebook groups related to your niche, offer free value to build trust'
      ]
    },
    {
      title: 'Week 1: $200',
      actions: [
        'Land 2-3 small client projects ($50-100 each) by offering competitive rates',
        'Publish 15-20 SEO-optimized Medium articles',
        'Create and launch 20 digital products (templates, guides, assets)',
        'Start YouTube channel with 5 videos on "How to use AI tools"'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            $2000/Month with Free AI Tools
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Complete Blueprint: 100% Free AI Tools, Real Revenue
          </p>
          <p className="text-sm text-gray-400">
            No subscriptions • No investments • Pure execution
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">$0</div>
            <div className="text-sm text-gray-300">Investment Required</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-green-400">2-4</div>
            <div className="text-sm text-gray-300">Weeks to $2000</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-gray-300">Free AI Tools</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-3xl font-bold text-yellow-400">3</div>
            <div className="text-sm text-gray-300">Proven Strategies</div>
          </div>
        </div>

        {/* Quick Wins Section */}
        <div className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-yellow-500/30">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-3xl">⚡</span> Quick Wins: Your First Week
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickWins.map((win, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-bold text-yellow-400 mb-3">{win.title}</h3>
                <ul className="space-y-2">
                  {win.actions.map((action, i) => (
                    <li key={i} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Main Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Choose Your Path to $2000/Month
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setSelectedStrategy(strategy.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${
                  selectedStrategy === strategy.id
                    ? 'bg-purple-600/30 border-purple-400 scale-105 shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 border-white/10 hover:border-purple-400/50 hover:bg-white/10'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">●</span>
                    <span className="text-gray-300">{strategy.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-400">⏱</span>
                    <span className="text-gray-300">{strategy.timeToRevenue}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Strategy Details */}
        {selectedStrategy && (
          <div className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-8">
              {strategies.find(s => s.id === selectedStrategy)?.name} - Detailed Plan
            </h2>

            <div className="space-y-6">
              {strategies.find(s => s.id === selectedStrategy)?.phases.map((phase, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-purple-400">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <span className="text-gray-400">⏱ {phase.duration}</span>
                        <span className="text-green-400 font-semibold">💰 {phase.revenue}</span>
                      </div>
                    </div>
                    <span className="text-2xl">{expandedPhase === idx ? '−' : '+'}</span>
                  </button>

                  {expandedPhase === idx && (
                    <div className="p-6 pt-0 space-y-6">
                      {/* Tasks */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-purple-300">
                          📋 Action Items
                        </h4>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-blue-300">
                          🛠️ Free AI Tools to Use
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.tools.map((tool, i) => (
                            <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5">
                              <div className="font-semibold text-sm text-blue-400">{tool.name}</div>
                              <div className="text-xs text-gray-400">{tool.purpose}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 text-yellow-300">
                          🎯 Success Metrics
                        </h4>
                        <ul className="space-y-2">
                          {phase.metrics.map((metric, i) => (
                            <li key={i} className="flex gap-3 text-gray-300">
                              <span className="text-yellow-400 flex-shrink-0">●</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Free AI Tools Library */}
        <div className="mb-12 bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-blue-500/30">
          <h2 className="text-3xl font-bold mb-6">
            🤖 Your Free AI Arsenal
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {freeAiTools.map((tool, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="font-bold text-blue-400 mb-1">{tool.name}</div>
                <div className="text-xs text-purple-300 mb-2">{tool.category}</div>
                <div className="text-xs text-gray-400">{tool.limit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 md:p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold mb-6">💡 Critical Success Factors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-purple-300 mb-2">⏰ Time Commitment</h3>
                <p className="text-sm text-gray-300">
                  4-6 hours daily for first month. Consistency beats perfection. Batch tasks for efficiency.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-green-300 mb-2">🎯 Focus Strategy</h3>
                <p className="text-sm text-gray-300">
                  Choose ONE strategy. Master it for 30 days before diversifying. Depth over breadth.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-yellow-300 mb-2">📈 Track Everything</h3>
                <p className="text-sm text-gray-300">
                  Use free Notion or Google Sheets. Track applications, revenue, conversion rates daily.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-blue-300 mb-2">🔄 Leverage AI Daily Limits</h3>
                <p className="text-sm text-gray-300">
                  Rotate between ChatGPT, Claude, Gemini to maximize output. Use all tools every day.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-pink-300 mb-2">💪 Push Through Week 2-3</h3>
                <p className="text-sm text-gray-300">
                  Hardest period before first real income. Don't quit. Results compound exponentially.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-red-300 mb-2">🚀 Scale What Works</h3>
                <p className="text-sm text-gray-300">
                  Identify your $200 week. 10x that exact process to reach $2000. Don't reinvent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>This plan requires zero investment and 100% free AI tools.</p>
          <p className="mt-2">Success depends on execution, consistency, and learning speed.</p>
          <p className="mt-4 text-purple-400 font-semibold">Start today. Track daily. Adjust weekly. Succeed monthly.</p>
        </div>
      </div>
    </div>
  )
}
