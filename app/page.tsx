import { Button } from "@/components/ui/button";
import Image from "next/image";
import Badges from "./components/Badges";
import { GitHubIcon, LinkedInIcon } from "./components/icons";

export default function HomePage() {
  const careerTimeline = [
    {
      period: "2022 - Present",
      company: "Fanatics ECommerce",
      role: "Staff Engineer",
      achievements: [
        {
          title: "Cloud Infrastructure & DevOps",
          points: [
            "Orchestrated AWS cloud infrastructure using Terraform, reducing deployment time by 40% and ensuring consistent environments across teams",
            "Automated Kubernetes application management using Helm and ArgoCD, improving deployment efficiency",
            "Migrated ~45% of applications from EC2 to EKS to boost scalability and operational resilience",
            "Implemented Infrastructure as Code (IaC) practices across multiple AWS accounts"
          ]
        },
        {
          title: "Platform Engineering",
          points: [
            "Led onboarding of ~880 applications to Spotify Backstage, streamlining developer experience",
            "Accelerated engineering productivity by 30% through unified access to tools and documentation",
            "Designed and implemented automated remediation solutions using AWS Systems Manager",
            "Reduced out-of-SLA instances from 100% to under 5% through automated monitoring"
          ]
        },
        {
          title: "Cost Optimization & Security",
          points: [
            "Saved ~$680M in AWS costs through intelligent resource management",
            "Implemented S3 Intelligent Tiering and EC2/RDS rightsizing strategies",
            "Set up automated rules with Cloud Custodian for resource cleanup",
            "Enhanced security posture through AWS Security Hub and Config Rules"
          ]
        }
      ]
    },
    {
      period: "2021 - 2022",
      company: "McAfee",
      role: "Staff Engineer",
      achievements: [
        {
          title: "Cloud Security Solutions",
          points: [
            "Deployed MVISION CASB to secure cloud applications with real-time threat monitoring",
            "Ensured compliance across 100% of SaaS traffic through policy enforcement",
            "Implemented data loss prevention (DLP) strategies reducing violations by 54%"
          ]
        },
        {
          title: "Performance Optimization",
          points: [
            "Optimized Redis caching strategy, reducing application load times by 35%",
            "Designed high-performance microservices architecture",
            "Implemented distributed caching solutions for global deployments"
          ]
        }
      ]
    },
    {
      period: "2015 - 2021",
      company: "CA Technologies (Broadcom)",
      role: "Senior Software Engineer",
      achievements: [
        {
          title: "Monitoring & Reliability",
          points: [
            "Designed and maintained UIM probes with 99.9% uptime for critical applications",
            "Implemented distributed caching with Redis and Kafka messaging",
            "Reduced data latency by 40% through optimized architecture"
          ]
        },
        {
          title: "Microservices Architecture",
          points: [
            "Designed microservices using Spring Boot, improving scalability by 40%",
            "Reduced time-to-market for new features by 30%",
            "Enhanced system reliability by 50% through comprehensive testing"
          ]
        },
        {
          title: "DevOps & CI/CD",
          points: [
            "Improved CI/CD pipelines using Jenkins and Docker",
            "Implemented automated testing with JUnit, TestNG, and JMockit",
            "Set up monitoring and alerting using Grafana and Prometheus"
          ]
        }
      ]
    },
    {
      period: "2012 - 2015",
      company: "Prokarma Softech",
      role: "Software Engineer",
      achievements: [
        {
          title: "Enterprise Integration",
          points: [
            "Developed 14+ SOA-based services for distributed systems integration",
            "Implemented Java and Hibernate solutions for UPRR's operations",
            "Created asynchronous messaging solutions using ActiveMQ"
          ]
        },
        {
          title: "Performance Optimization",
          points: [
            "Reduced processing latency by 40% through optimized data exchange",
            "Improved data retrieval times by 40% using advanced query optimization",
            "Ensured high availability for mission-critical applications"
          ]
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Cloud Infrastructure with AWS",
      description: "Deep dive into architecting cloud-native solutions using AWS services, focusing on scalability and cost optimization.",
      date: "Coming Soon",
      tags: ["AWS", "Cloud Architecture", "DevOps"],
      readTime: "15 min read"
    },
    {
      title: "Kubernetes Best Practices for Enterprise",
      description: "Comprehensive guide to implementing Kubernetes in enterprise environments with focus on security and scalability.",
      date: "Coming Soon",
      tags: ["Kubernetes", "DevOps", "Container Orchestration"],
      readTime: "12 min read"
    },
    {
      title: "Modern Developer Platforms with Backstage",
      description: "How to build and scale developer platforms using Spotify Backstage, including custom plugins and integrations.",
      date: "Coming Soon",
      tags: ["Backstage", "Developer Experience", "Platform Engineering"],
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">VB</div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#opensource" className="hover:text-blue-600">Open Source</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/4 order-2 md:order-1">
              <div className="relative">
                <div className="w-full aspect-[3/4] max-w-[280px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/profile.png"
                    alt="Vijaya Kumar Bathini"
                    priority
                    width={280}
                    height={373}
                    className="object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="absolute inset-0 shadow-md rounded-lg"></div>
              </div>
            </div>
            <div className="md:w-3/4 order-1 md:order-2">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Vijaya Kumar Bathini
                  </h1>
                  <h2 className="text-xl text-blue-600 mb-6">Staff Engineer | Cloud & Backend Expert</h2>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>
                      Experienced software engineer with a strong background in building secure, scalable cloud platforms and 
                      services. Passionate about cybersecurity and developing end-to-end systems that protect critical 
                      infrastructure.
                    </p>
                    <p>
                      I thrive in fast-paced, cross-functional environments and am driven by a growth mindset, with a 
                      deep commitment to building solutions that make a global impact on enterprise security.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">Download Resume</Button>
                    <a href="#contact">
                      <Button variant="outline">Contact Me</Button>
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
                    <Badges />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Career Journey</h2>
          <div className="space-y-16">
            {careerTimeline.map((period, periodIndex) => (
              <div key={periodIndex} className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm">
                      <span className="text-blue-600 font-semibold block mb-2">{period.period}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{period.company}</h3>
                      <p className="text-lg text-blue-600">{period.role}</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="grid gap-6">
                      {period.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex} 
                          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            {achievement.title}
                          </h4>
                          <ul className="space-y-3">
                            {achievement.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-2 text-gray-600">
                                <span className="text-blue-600 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section id="opensource" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Source Contributions</h2>
          <div className="grid gap-8">
            {/* Grafana Project */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Grafana Provisioning Utility</h3>
                  <a 
                    href="https://github.com/vijayakumarbathini/Grafana-Provisioning-Util"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-1"
                  >
                    <GitHubIcon /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="prose prose-gray">
                <p className="text-gray-600 mb-4">
                  Developed a utility tool for automating Grafana dashboard and datasource provisioning, 
                  focusing on streamlining the setup process for monitoring infrastructure. The tool supports:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Automated dashboard creation and management</li>
                  <li>Custom data source provisioning</li>
                  <li>Support for NAS and TAS databases with Graph Database integration</li>
                  <li>Improved provisioning workflow for custom data sources</li>
                </ul>
              </div>
            </div>

            {/* Backstage Project */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Backstage Plugin Contributions</h3>
                  <a 
                    href="https://github.com/vijayakumarbathini/roadie-backstage-plugins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mt-1"
                  >
                    <GitHubIcon /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="prose prose-gray">
                <p className="text-gray-600 mb-4">
                  Contributed to the Roadie Backstage plugins ecosystem, enhancing developer portal capabilities 
                  through various plugin contributions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enhanced the Tech Radar plugin with new features and bug fixes</li>
                  <li>Collaborated with the open-source community on pull request reviews</li>
                  <li>Improved plugin documentation and integration guides</li>
                  <li>Contributed to the plugin testing framework and CI/CD pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+918885886610" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    +91 888-588-6610
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a href="mailto:bathinivijayakumar@outlook.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    bathinivijayakumar@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-blue-600">
                    <LinkedInIcon />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                  <a href="https://linkedin.com/in/bathinivijayakumar" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    /in/bathinivijayakumar
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-gray-900">
                    <GitHubIcon />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                  <a href="https://github.com/vijayakumarbathini" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    /vijayakumarbathini
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-600">
                Staff Engineer with extensive experience in cloud architecture, security, and scalable systems. 
                Always open to discussing new opportunities and technical challenges.
              </p>
              <div className="mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Download Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="md:w-3/4 ml-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2024 Vijaya Kumar Bathini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
