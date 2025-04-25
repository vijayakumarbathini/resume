import React from 'react';

interface ContributionProps {
  project: string;
  description: string;
}

const Contribution = ({ project, description }: ContributionProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{project}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function OpenSource() {
  const contributions = [
    {
      project: "Backstage",
      description: "Collaborated with the open-source community to contribute enhancements to the Tech Radar plugin, code review the pull request and fix a couple of bugs"
    },
    {
      project: "Grafana",
      description: "Contributed with the custom data sources to support NAS and TAS databases which are built on top of Graph Database and fixed a few issues with provisioning custom data sources in Grafana"
    }
  ];

  return (
    <section id="opensource" className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">OPEN SOURCE CONTRIBUTIONS</h2>
      {contributions.map((contribution, index) => (
        <Contribution key={index} {...contribution} />
      ))}
    </section>
  );
} 