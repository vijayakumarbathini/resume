import React from 'react';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

const ExperienceItem = ({ company, position, period, achievements }: ExperienceItemProps) => (
  <div className="mb-8">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{company}</h3>
        <p className="text-lg text-blue-600">{position}</p>
      </div>
      <span className="text-gray-600">{period}</span>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      {achievements.map((achievement, index) => (
        <li key={index} className="leading-relaxed">{achievement}</li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      company: "Fanatics ECommerce",
      position: "Staff Engineer",
      period: "2022 - Present",
      achievements: [
        "Orchestrated AWS cloud infrastructure using Terraform, reducing deployment time by 40% and ensuring consistent environments across teams.",
        "Automated Kubernetes application management using Helm and ArgoCD, reducing manual effort and improving deployment efficiency; migrated ~45% of applications from EC2 to EKS to boost scalability and operational resilience.",
        "Designed and implemented an automated remediation solution using AWS Systems Manager for both stateful and stateless systems, reducing out-of-SLA instances from 100% to under 5%.",
        "Led onboarding of ~880 applications to Spotify Backstage, streamlining developer experience and accelerating engineering productivity by 30% through unified access to tools, documentation, and service metadata.",
        "Saved ~$680M in AWS costs by using S3 Intelligent Tiering, rightsizing EC2/RDS, cleaning up unused resources, and setting automated rules with Cloud Custodian."
      ]
    },
    {
      company: "McAfee",
      position: "Staff Engineer",
      period: "2021-2022",
      achievements: [
        "Deployed MVISION CASB to secure cloud applications, enabling real-time threat monitoring, policy enforcement, and ensuring compliance across 100% of SaaS traffic.",
        "Optimized Redis caching strategy, reducing application load times by 35%.",
        "Streamlined data loss prevention (DLP) strategies by leveraging MVISION CASB for real-time monitoring and policy enforcement on cloud-based data flows, reducing policy violations by 54%"
      ]
    },
    {
      company: "CA Technologies (Broadcom)",
      position: "Senior Software Engineer",
      period: "2015-2021",
      achievements: [
        "Designed and maintained UIM probes, ensuring 99.9% uptime monitoring for critical business applications.",
        "Implemented distributed caching with Redis and event-driven messaging via Kafka, reducing data latency by 40%.",
        "Designed and implemented microservices architecture using Spring Boot, improving scalability by 40% and reducing time-to-market for new features by 30%.",
        "Enhanced system reliability by 50% through unit testing (JUnit, TestNG, JMockit) and improved CI/CD pipelines."
      ]
    },
    {
      company: "Prokarma Softech",
      position: "Software Engineer",
      period: "2012-2015",
      achievements: [
        "Developed and optimized 14+ SOA-based services for seamless integration across distributed systems, leveraging Java and Hibernate to ensure robust, scalable, and maintainable solutions for UPRR's critical business operations.",
        "Created asynchronous messaging solutions using ActiveMQ, Reduced processing latency by 40% by implementing real-time data exchange with ActiveMQ",
        "Applied advanced query optimizations and schema designs to improve data retrieval times by 40%, ensuring high availability and consistency for mission-critical applications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">WORK EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </section>
  );
} 