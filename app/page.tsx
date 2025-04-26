import { GitHubIcon, LinkedInIcon } from './components/icons'
import { Button } from './components/ui/button'
import Todo from './components/Todo'

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Open Source Section */}
      <section className="mb-12 bg-secondary/50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Backstage Plugin Contributions</h2>
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <a 
              href="https://github.com/vijayakumarbathini/roadie-backstage-plugins" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5" />
              View on GitHub
            </a>
            <p className="text-muted-foreground mb-4">
              Contributed to the Roadie Backstage plugins ecosystem, enhancing developer portal capabilities through various plugin contributions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Enhanced the Tech Radar plugin with new features and bug fixes</li>
              <li>Collaborated with the open-source community on pull request reviews</li>
              <li>Improved plugin documentation and integration guides</li>
              <li>Contributed to the plugin testing framework and CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12" id="contact">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+918885886610" 
                className="text-primary hover:text-primary/80 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +91 888-588-6610
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:bathinivijayakumar@outlook.com" 
                className="text-primary hover:text-primary/80 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                bathinivijayakumar@outlook.com
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/bathinivijayakumar" 
                  className="text-primary hover:text-primary/80 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2]/10">
                    <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  </span>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/vijayakumarbathini" 
                  className="text-primary hover:text-primary/80 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/10">
                    <GitHubIcon className="w-4 h-4" />
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-card rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Professional Summary</h3>
            <p className="text-muted-foreground">
              Staff Engineer with extensive experience in cloud architecture, security, and scalable systems. 
              Always open to discussing new opportunities and technical challenges.
            </p>
            <Button className="w-full">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground">
        © 2024 Vijaya Kumar Bathini. All rights reserved.
      </footer>

      <div className="container mx-auto px-4 py-8">
        <Todo />
      </div>
    </main>
  )
}
