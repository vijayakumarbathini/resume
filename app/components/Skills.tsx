import React from 'react';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 text-gray-700">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-600">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const skillCategories = {
    'Backend Development': [
      'Java, NodeJS, Python',
      'Spring (IoC, Boot, AOP, MVC)',
      'APIs (gRPC, REST, SOAP, AWS API Gateway)',
    ],
    'Frontend Development': [
      'React, Redux, ExtJS, JS ES6, HTML, CSS',
    ],
    'Messaging and Streaming': [
      'Kafka, RabbitMQ, ActiveMQ, AWS SQS',
    ],
    'Databases and Storage': [
      'MySQL, RDS, Cassandra, CouchDB',
    ],
    'Caching': [
      'Redis, Memcached, MapDB',
    ],
    'Cloud & DevOps': [
      'AWS Services',
      'Terraform, Opentofu',
      'Docker & Kubernetes',
      'Helm, Kustomize, Ansible, Packer',
      'Vault, Consul, Akeyless',
      'ArgoCD, GitHub Workflows, GitLab Pipelines',
      'Netflix Spinnaker',
    ],
    'Observability & Monitoring': [
      'Grafana, Prometheus, Prisma, Temporal',
    ],
    'Service Mesh & Proxying': [
      'Istio',
      'Proxy (Nginx, Envoy)',
    ],
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">TECHNICAL SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
} 