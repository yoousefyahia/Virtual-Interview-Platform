import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Logo.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: readonly FooterLink[];
};

const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    title: "Categories",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Cases", href: "/cases" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Survey & Feedback", href: "/feedback" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Services", href: "/services" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-background">        
      <div className="container border-t border-primary py-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="VU Platform"
              className="h-14 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-body-sm-semibold uppercase text-primary">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-muted-foreground transition-default hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-body-sm-semibold uppercase text-primary">
                Contact
              </h4>

              <a
                href="mailto:info@vuplatform.com"
                className="text-body-sm text-muted-foreground transition-default hover:text-primary break-all"
              >
                INFO@VUPLATFORM.COM
              </a>

              <div className="mt-8">
                <h4 className="mb-4 text-body-sm-semibold uppercase text-primary">
                  Follow Us
                </h4>

                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-default hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="size-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
          <div className="mt-14 flex justify-end gap-6 border-t border-primary pt-6 text-caption text-muted-foreground">   
             <span>Egypt (EG)</span>
              <span>© 2025 VU</span>
            </div>
      </div>
    </footer>
  );
}