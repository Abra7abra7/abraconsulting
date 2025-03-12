import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Autonomous Business Blog | ABRA AI",
  description: "Expert insights on AI autonomous business, MCP protocol implementation, and intelligent decision making for businesses in Slovakia and Central Europe.",
  keywords: [
    "AI autonomous business blog", 
    "MCP protocol insights", 
    "decision making AI",
    "Slovakia AI solutions",
    "Central Europe business automation",
    "autonomous AI blog",
    "business intelligence blog"
  ],
};

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Understanding AI Autonomous Business Solutions",
    excerpt: "Explore how AI autonomous business solutions are transforming operations across Central Europe.",
    date: "March 12, 2025",
    slug: "understanding-ai-autonomous-business",
    category: "AI Business",
  },
  {
    id: 2,
    title: "The Power of MCP Protocol in Business Automation",
    excerpt: "Learn how the MCP protocol is revolutionizing the way businesses automate their processes.",
    date: "March 10, 2025",
    slug: "mcp-protocol-business-automation",
    category: "MCP Protocol",
  },
  {
    id: 3,
    title: "Intelligent Decision Making with AI: A Case Study",
    excerpt: "See how companies in Slovakia are leveraging AI for smarter, faster decision making.",
    date: "March 5, 2025",
    slug: "intelligent-decision-making-ai-case-study",
    category: "Decision Making",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Autonomous Business Blog</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Expert insights on AI autonomous business, MCP protocol implementation, and intelligent decision making for businesses in Slovakia and Central Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Stay updated with the latest insights on AI autonomous business, MCP protocol, and intelligent decision making.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Topics</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["AI Autonomous Business", "MCP Protocol", "Decision Making", "Business Automation", "Slovakia AI", "Central Europe", "Intelligent Systems", "Data Management"].map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
