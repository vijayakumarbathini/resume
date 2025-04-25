import React from 'react';
import Image from 'next/image';

export default function Badges() {
  const badges = [
    {
      id: "6f65eda8-cd6b-4358-adc2-0637f8c93e29",
      title: "AWS Certified Solutions Architect - Professional",
      image: "/aws-prof.png",
      link: "https://www.credly.com/badges/6f65eda8-cd6b-4358-adc2-0637f8c93e29"
    },
    {
      id: "0f2349fc-fdc0-4e24-b7ce-82c4fc97c30a",
      title: "AWS Certified Solutions Architect - Associate",
      image: "/aws-assoc.png",
      link: "https://www.credly.com/badges/0f2349fc-fdc0-4e24-b7ce-82c4fc97c30a"
    }
  ];

  return (
    <div className="flex flex-wrap gap-6 items-center">
      {badges.map((badge) => (
        <a
          key={badge.id}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <div className="w-32 h-32 relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src={badge.image}
              alt={badge.title}
              width={128}
              height={128}
              className="rounded-lg hover:brightness-110 transition-all duration-300"
              unoptimized
              loading="eager"
            />
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-600 transition-opacity duration-300 whitespace-nowrap">
            {badge.title}
          </div>
        </a>
      ))}
    </div>
  );
} 