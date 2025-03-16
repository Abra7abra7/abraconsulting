import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/button";
import { FeaturesCollectionJsonLd } from "@/components/features-json-ld";

export const metadata: Metadata = {
  title: "AI Autonomous Business Features | ABRA AI",
  description: "Explore ABRA AI&apos;s comprehensive suite of autonomous business features including one-click automation, intuitive workflow, edge hosting, and AI-powered business insights.",
  keywords: [
    "AI business features", 
    "autonomous business tools", 
    "MCP protocol features",
    "business automation features", 
    "AI workflow tools", 
    "edge hosting solution",
    "business insights AI",
    "one-click automation",
    "intuitive business workflow",
    "Slovakia AI solutions",
    "Central Europe business automation"
  ],
};

// Feature data - in a real implementation, this might come from a CMS or API
const features = [
  {
    id: "one-click-automation",
    title: "One-Click Automation",
    description: "Set up complex business automation workflows with a single click. No coding required, no complex configurations, just immediate results.",
    icon: "/icons/automation.svg", // This would be a real icon in production
    benefits: [
      "Save hours on setup and configuration",
      "Implement automation without technical expertise",
      "Start seeing results immediately",
      "Easily modify workflows as needs change"
    ]
  },
  {
    id: "intuitive-workflow",
    title: "Intuitive Workflow",
    description: "Business-centric workflows designed for operations management, not technical implementation. Adapt to your business processes, not the other way around.",
    icon: "/icons/workflow.svg", // This would be a real icon in production
    benefits: [
      "Workflows that match your business processes",
      "User-friendly interface for all skill levels",
      "Reduce training time and costs",
      "Increase adoption across your organization"
    ]
  },
  {
    id: "edge-hosting",
    title: "Edge Hosting",
    description: "Lightning-fast performance with our global edge network. Your autonomous business solutions hosted in every major city for minimal latency and maximum reliability.",
    icon: "/icons/hosting.svg", // This would be a real icon in production
    benefits: [
      "Faster response times for critical operations",
      "Improved reliability with distributed infrastructure",
      "Better user experience for global teams",
      "Enhanced data sovereignty compliance"
    ]
  },
  {
    id: "business-insights",
    title: "AI-Powered Business Insights",
    description: "Transform raw data into actionable business intelligence. Our AI analyzes your operations and delivers insights that drive strategic decision-making.",
    icon: "/icons/insights.svg", // This would be a real icon in production
    benefits: [
      "Discover hidden patterns in your business data",
      "Receive proactive recommendations",
      "Make data-driven decisions with confidence",
      "Continuously improve based on AI analysis"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <>
      <FeaturesCollectionJsonLd />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Autonomous Business Features</h1>
        <p className="text-xl max-w-3xl mx-auto text-neutral-600 dark:text-neutral-400">
          Discover how ABRA AI&apos;s comprehensive suite of features can transform your business operations with intelligent automation and MCP protocol integration.
        </p>
      </div>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  {/* Placeholder for icon - would use actual icons in production */}
                  <div className="w-6 h-6 text-blue-600 dark:text-blue-400">
                    {feature.id === "one-click-automation" && "🔄"}
                    {feature.id === "intuitive-workflow" && "📊"}
                    {feature.id === "edge-hosting" && "🌐"}
                    {feature.id === "business-insights" && "📈"}
                  </div>
                </div>
                <h2 className="text-xl font-bold">{feature.title}</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
                {feature.benefits.slice(0, 2).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              
              <Link 
                href={`/features/${feature.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Integration Section */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
          <p className="text-lg max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            All features are built on the MCP protocol for effortless integration with your existing business systems and workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">API-First Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with any system through our comprehensive API built on MCP protocol standards.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">No-Code Connectors</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use pre-built connectors for popular business systems without writing a single line of code.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Custom Extensions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Develop custom extensions for unique business needs with our developer-friendly SDK.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-neutral-600 dark:text-neutral-400">
          Discover how ABRA AI&apos;s autonomous business features can help your organization achieve new levels of efficiency and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as="a"
            href="#contact"
            variant="primary"
            className="px-8 py-3"
          >
            Schedule a Demo
          </Button>
          <Button 
            as="a"
            href="/blog"
            variant="secondary"
            className="px-8 py-3"
          >
            Read Success Stories
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
