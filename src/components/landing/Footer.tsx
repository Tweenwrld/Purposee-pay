import React from 'react';
import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const navigationLinks: FooterLink[] = [
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/purposepay',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878a4.675 4.675 0 0 1-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568a4.68 4.68 0 0 1-2.104.08c.592 1.842 2.313 3.186 4.352 3.225a9.36 9.36 0 0 1-5.81 2.003c-.377 0-.749-.022-1.116-.066 2.062 1.323 4.505 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l-.002-.002z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/purposepay',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.001zM5.337 7.433c-1.144 0-2.063-.93-2.063-2.077 0-1.146.919-2.077 2.063-2.077 1.145 0 2.063.931 2.063 2.077 0 1.147-.918 2.077-2.063 2.077zm1.777 13.019H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h-.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold text-foreground">Purpose Pay</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center md:text-left">
              Empowering seamless payments worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Purpose Pay. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Back to Top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;