import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">EDUCATION</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Bachelor Of Technology in Computer Science</h3>
        <p className="text-lg text-blue-600">Sri Krishnadevaraya University</p>
        <p className="text-gray-600">Sep 2008 - April 2012</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-12 text-gray-800">CERTIFICATIONS</h2>
      <ul className="space-y-4 text-gray-600">
        <li className="flex justify-between items-center">
          <span>AWS Certified Solutions Architect - Professional</span>
          <span>2025</span>
        </li>
        <li className="flex justify-between items-center">
          <span>AWS Certified Solutions Architect - Associate</span>
          <span>2024</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Hashicorp Certified Terraform Associate</span>
          <span>2022</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Cambridge B2 English CEFR Certificate</span>
          <span>2015</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-6 mt-12 text-gray-800">AWARDS</h2>
      <ul className="space-y-4 text-gray-600">
        <li className="flex justify-between items-center">
          <span>McAfee Star Performance Award</span>
          <span>2021</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Broadcom Above and Beyond Award</span>
          <span>2018</span>
        </li>
        <li className="flex justify-between items-center">
          <span>CA Technologies Above and Beyond Award</span>
          <span>2017</span>
        </li>
        <li className="flex justify-between items-center">
          <span>CA Technologies Above and Beyond Award</span>
          <span>2016</span>
        </li>
        <li className="flex justify-between items-center">
          <span>CA Technologies Above and Beyond Award</span>
          <span>2015</span>
        </li>
      </ul>
    </section>
  );
} 