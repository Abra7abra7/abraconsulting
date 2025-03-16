import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/button";
import { notFound } from "next/navigation";
import { FeatureJsonLd } from "@/components/features-json-ld";

// Define types for our feature data
type UseCase = {
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  useCases: UseCase[];
  technicalDetails: string[];
};

type FeaturesData = {
  [key: string]: Feature;
};

// Feature data - in a real implementation, this would come from a CMS or API
const featuresData: FeaturesData = {
  "one-click-automation": {
    title: "One-Click Automation",
    description: "Set up complex business automation workflows with a single click. No coding required, no complex configurations, just immediate results.",
    longDescription: "ABRA AI's One-Click Automation revolutionizes how businesses implement automation. Traditional automation requires extensive technical knowledge, complex setup procedures, and significant time investment. Our solution eliminates these barriers with a truly one-click approach to business process automation.",
    icon: "/icons/automation.svg", // This would be a real icon in production
    benefits: [
      "Save hours on setup and configuration",
      "Implement automation without technical expertise",
      "Start seeing results immediately",
      "Easily modify workflows as needs change",
      "Reduce implementation costs by up to 80%",
      "Scale automation across departments effortlessly"
    ],
    useCases: [
      {
        title: "Financial Reporting",
        description: "Automate the collection, processing, and distribution of financial reports across your organization with a single click."
      },
      {
        title: "Customer Onboarding",
        description: "Streamline customer onboarding processes by automating document collection, verification, and account setup."
      },
      {
        title: "Supply Chain Management",
        description: "Automate inventory tracking, order processing, and supplier communications to optimize your supply chain."
      }
    ],
    technicalDetails: [
      "Built on MCP protocol for seamless integration",
      "Pre-configured templates for common business processes",
      "Visual workflow editor for customization",
      "Real-time monitoring and analytics",
      "Automatic error handling and recovery"
    ]
  },
  "intuitive-workflow": {
    title: "Intuitive Workflow",
    description: "Business-centric workflows designed for operations management, not technical implementation. Adapt to your business processes, not the other way around.",
    longDescription: "ABRA AI's Intuitive Workflow system reimagines how businesses interact with automation tools. Instead of forcing your team to adapt to rigid technical frameworks, our solution molds itself to your existing business processes, creating a natural extension of how your organization already works.",
    icon: "/icons/workflow.svg", // This would be a real icon in production
    benefits: [
      "Workflows that match your business processes",
      "User-friendly interface for all skill levels",
      "Reduce training time and costs",
      "Increase adoption across your organization",
      "Eliminate workflow bottlenecks",
      "Improve cross-departmental collaboration"
    ],
    useCases: [
      {
        title: "Approval Processes",
        description: "Create intuitive approval workflows that follow your organization's hierarchy and decision-making processes."
      },
      {
        title: "Project Management",
        description: "Implement workflows that adapt to your project management methodology, whether agile, waterfall, or hybrid."
      },
      {
        title: "Document Management",
        description: "Design document workflows that mirror your organization's review, approval, and distribution processes."
      }
    ],
    technicalDetails: [
      "Drag-and-drop workflow designer",
      "Role-based access controls",
      "Conditional logic and branching",
      "Integration with existing business systems",
      "Mobile-friendly interface for on-the-go management"
    ]
  },
  "edge-hosting": {
    title: "Edge Hosting",
    description: "Lightning-fast performance with our global edge network. Your autonomous business solutions hosted in every major city for minimal latency and maximum reliability.",
    longDescription: "ABRA AI's Edge Hosting infrastructure delivers unprecedented performance for your autonomous business solutions. By distributing your applications across our global network of edge servers, we ensure that your systems respond instantly, regardless of where your team or customers are located.",
    icon: "/icons/hosting.svg", // This would be a real icon in production
    benefits: [
      "Faster response times for critical operations",
      "Improved reliability with distributed infrastructure",
      "Better user experience for global teams",
      "Enhanced data sovereignty compliance",
      "Reduced bandwidth costs",
      "Automatic scaling during peak demand"
    ],
    useCases: [
      {
        title: "Global Workforce Support",
        description: "Provide consistent, high-performance access to business systems for employees across multiple countries and regions."
      },
      {
        title: "Customer-Facing Applications",
        description: "Deliver lightning-fast experiences to customers regardless of their location, improving satisfaction and conversion rates."
      },
      {
        title: "Real-Time Data Processing",
        description: "Process and analyze business data in real-time at the edge, enabling faster decision-making and response."
      }
    ],
    technicalDetails: [
      "Presence in over 50 global locations",
      "Automatic content distribution",
      "Built-in DDoS protection",
      "99.99% uptime guarantee",
      "Compliance with regional data regulations"
    ]
  },
  "business-insights": {
    title: "AI-Powered Business Insights",
    description: "Transform raw data into actionable business intelligence. Our AI analyzes your operations and delivers insights that drive strategic decision-making.",
    longDescription: "ABRA AI's Business Insights capability harnesses the power of artificial intelligence to extract meaningful patterns and actionable intelligence from your business data. Unlike traditional analytics that simply report what happened, our AI-powered system explains why it happened and predicts what will happen next.",
    icon: "/icons/insights.svg", // This would be a real icon in production
    benefits: [
      "Discover hidden patterns in your business data",
      "Receive proactive recommendations",
      "Make data-driven decisions with confidence",
      "Continuously improve based on AI analysis",
      "Identify opportunities before competitors",
      "Mitigate risks through early detection"
    ],
    useCases: [
      {
        title: "Sales Forecasting",
        description: "Leverage AI to predict future sales with unprecedented accuracy, enabling better inventory and resource planning."
      },
      {
        title: "Customer Behavior Analysis",
        description: "Understand customer patterns and preferences to optimize marketing strategies and product development."
      },
      {
        title: "Operational Efficiency",
        description: "Identify inefficiencies in business processes and receive AI-generated recommendations for improvement."
      }
    ],
    technicalDetails: [
      "Advanced machine learning algorithms",
      "Natural language processing for text data",
      "Time-series analysis for trend detection",
      "Interactive visualization dashboards",
      "Automated insight generation and distribution"
    ]
  }
};

// Generate metadata for each feature page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Check if the slug is a valid key in our featuresData
  if (!(params.slug in featuresData)) {
    return {
      title: "Feature Not Found | ABRA AI",
      description: "The requested feature could not be found."
    };
  }
  
  const feature = featuresData[params.slug];
  
  return {
    title: `${feature.title} | ABRA AI Features`,
    description: feature.description,
    keywords: [
      `${feature.title.toLowerCase()}`,
      "AI business feature",
      "autonomous business tool",
      "MCP protocol integration",
      "business automation",
      "Slovakia AI solutions",
      "Central Europe business automation"
    ],
  };
}

// Generate static params for all features
export async function generateStaticParams() {
  return Object.keys(featuresData).map(slug => ({
    slug,
  }));
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  // Check if the slug is a valid key in our featuresData
  if (!(params.slug in featuresData)) {
    notFound();
  }
  
  const feature = featuresData[params.slug];
  
  return (
    <>
      <FeatureJsonLd 
        title={feature.title}
        description={feature.description}
        slug={params.slug}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Features
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500 dark:text-gray-300">{feature.title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Feature Hero Section */}
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
            {/* Placeholder for icon - would use actual icons in production */}
            <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
              {params.slug === "one-click-automation" && "🔄"}
              {params.slug === "intuitive-workflow" && "📊"}
              {params.slug === "edge-hosting" && "🌐"}
              {params.slug === "business-insights" && "📈"}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{feature.title}</h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
      
      {/* Main Content */}
      <div className="prose dark:prose-invert lg:prose-xl max-w-none mb-12">
        <p>{feature.longDescription}</p>
        
        {/* Benefits Section */}
        <h2>Key Benefits</h2>
        <ul>
          {feature.benefits.map((benefit: string, index: number) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        
        {/* Use Cases Section */}
        <h2>Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
          {feature.useCases.map((useCase: UseCase, index: number) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
        
        {/* Technical Details Section */}
        <h2>Technical Details</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg not-prose mb-8">
          <ul className="space-y-2">
            {feature.technicalDetails.map((detail: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to experience {feature.title}?</h2>
        <p className="text-lg mb-6">
          Discover how this feature can transform your business operations and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as="a"
            href="#contact"
            variant="primary"
            className="px-8 py-3"
          >
            Request a Demo
          </Button>
          <Button 
            as="a"
            href="/features"
            variant="secondary"
            className="px-8 py-3"
          >
            Explore Other Features
          </Button>
        </div>
      </div>
      
      {/* Related Features Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(featuresData)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 2)
            .map(([slug, relatedFeature]) => (
              <div key={slug} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link href={`/features/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {relatedFeature.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {relatedFeature.description}
                </p>
                <Link 
                  href={`/features/${slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
}
