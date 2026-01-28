"use client";

import { useState } from "react";
import Image from "next/image";

// Icons as components
const VerifiedBadge = () => (
  <svg viewBox="0 0 22 22" className="w-5 h-5 fill-[#1d9bf0] verified-badge cursor-pointer">
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#71767b]">
    <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#71767b]">
    <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#71767b]">
    <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 11.29 8.46 12.7 7.05c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24l-1.41 1.41 1.41 1.41 1.41-1.41c1.96-1.96 1.96-5.12.01-7.06zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02 5.19c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41-1.41-1.41-1.41 1.41c-1.17 1.17-3.07 1.17-4.24 0-1.17-1.17-1.17-3.07 0-4.24l1.41-1.41-1.41-1.41-1.42 1.4z" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
  </svg>
);

const RetweetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
  </svg>
);

const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    {filled ? (
      <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
    ) : (
      <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
    )}
  </svg>
);

const ViewsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5L19 15h2z" />
  </svg>
);

const MoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#71767b]">
    <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26l2.12 2.12c.28.28.44.66.44 1.06v1.56c0 .83-.67 1.5-1.5 1.5H14v5l-1.5 1.5L11 20v-5H5.94c-.83 0-1.5-.67-1.5-1.5v-1.56c0-.4.16-.78.44-1.06L7 9.76V4.5zM9.5 4c-.28 0-.5.22-.5.5v6.38l-2.5 2.5v.62h11v-.62l-2.5-2.5V4.5c0-.28-.22-.5-.5-.5h-5z" />
  </svg>
);

// Sidebar Icons
const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-3h8v2H8v-2zm0 6h5v2H8v-2z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v.511l8 5.25 8-5.25V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 2.234l-8 5.25-8-5.25V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5V7.234z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Sidebar Component
function Sidebar() {
  const navItems = [
    { icon: <ResumeIcon />, label: "Resume", href: "/Razzak_Haadi_Resume_2026.pdf" },
    { icon: <EmailIcon />, label: "Email", href: "mailto:haadirazzak@gmail.com" },
    { icon: <GithubIcon />, label: "Github", href: "https://github.com/haadir" },
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/haadirazzak/" },
    { icon: <XIcon />, label: "X", href: "https://x.com/haadirazzak" },
    { icon: <MubeIcon />, label: "Mube", href: "#", badge: "soon" },
  ];

  return (
    <aside className="hidden md:flex flex-col items-end xl:items-start w-[88px] xl:w-[275px] h-screen sticky top-0 px-2 pt-4">
      {/* Nav Items */}
      <nav className="flex flex-col gap-1 w-full">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-5 p-3 rounded-full hover:bg-white/10 transition-colors group xl:pr-6"
          >
            <span className="text-[#e7e9ea] group-hover:text-[#e7e9ea]">
              {item.icon}
            </span>
            <span className="hidden xl:inline text-xl text-[#e7e9ea]">
              {item.label}
            </span>
            {item.badge && (
              <span className="hidden xl:inline text-[10px] bg-[#1d9bf0] text-white px-1.5 py-0.5 rounded-full font-bold uppercase">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
}

type TabType = "experiences" | "projects" | "highlights" | "media";

interface Experience {
  id: string;
  company: string;
  companyHandle: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  logo: string;
  pinned?: boolean;
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Amazon Web Services",
    companyHandle: "aws",
    role: "Software Development Engineer",
    location: "Seattle, WA",
    period: "Aug 2025 – Present",
    logo: "/companies/aws.jpg",
    pinned: true,
    bullets: [
      "Contributed within the <b>Data Center Automation</b> organization to build internal tooling for data center health monitoring, supporting operations across nearly <b>1,000 data centers</b> worldwide",
      "Created an internal, team-specific package using <b>AWS CDK</b> (Python and TypeScript) to standardize <b>CloudWatch</b> alarm creation as part of an <b>Operational Excellence</b> initiative, defining a consistent alarm taxonomy by service ownership and severity levels",
      "Expanded the team's service ownership from commercial AWS to <b>Amazon Dedicated Cloud (ADC)</b>, re-architecting systems and performing extensive validation to prevent alarm data leakage between private ADC data centers and commercial environments; partnered with Controls and ADC teams, led <b>User Acceptance Testing (UAT)</b>, and enabled adoption by <b>100+ ADC engineers</b>",
    ],
  },
  {
    id: "3",
    company: "BMC Software",
    companyHandle: "bmc",
    role: "Machine Learning Engineer Intern",
    location: "Santa Clara, CA",
    period: "May 2024 – Aug 2024",
    logo: "/companies/bmc.png",
    bullets: [
      "Analyzed previous server configurations using <b>time series modeling</b>, achieving a <b>19% improvement</b> in fleet health and a <b>15% reduction</b> in server downtime through fine-tuning the <b>Llama 2</b> model",
      "Leveraged <b>Generative AI</b> with tools like <b>Kustomize</b> to enhance <b>Kubernetes</b> deployments, drawing on historical user data and metrics such as server response time, CPU usage, and container health status",
    ],
  },
  {
    id: "4",
    company: "PayPal",
    companyHandle: "paypal",
    role: "Software Integration Engineering Intern",
    location: "San Jose, CA",
    period: "May 2023 – Aug 2023",
    logo: "/companies/paypal.png",
    bullets: [
      "Created a system using <b>NodeJS</b> and <b>Braintree</b> to smoothen the external app payment integration process for high volume merchants, enabling a smoother payment process for <b>100+ million users</b>",
      "Collaborated with <b>20+ merchants</b> to enhance checkout page customization, optimizing payment interfaces by integrating fraud protection, alternative payment methods, and webhook automation",
    ],
  },
  {
    id: "5",
    company: "PayPal",
    companyHandle: "paypal",
    role: "Software Integration Engineering Intern",
    location: "San Jose, CA",
    period: "May 2022 – Aug 2022",
    logo: "/companies/paypal.png",
    bullets: [
      "did the same stuff the summer before lol",
    ],
  },
  {
    id: "6",
    company: "Innowi",
    companyHandle: "innowi",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    period: "Summer 2021",
    logo: "/companies/innowi.jpg",
    bullets: [
      "senior year of high school internship — built <b>Point of Sale devices</b> and deployed to restaurants. also wrote a lil <b>Java</b>",
    ],
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="border-b border-[#2f3336] px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer">
      {experience.pinned && (
        <div className="flex items-center gap-3 ml-6 mb-1 text-[#71767b] text-[13px]">
          <PinIcon />
          <span className="font-bold">Pinned</span>
        </div>
      )}
      <div className="flex gap-3">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#2f3336] overflow-hidden">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-[15px] hover:underline">{experience.company}</span>
            <VerifiedBadge />
            <span className="text-[#71767b] text-[15px]">@{experience.companyHandle}</span>
            <span className="text-[#71767b] text-[15px]">·</span>
            <span className="text-[#71767b] text-[15px]">{experience.period}</span>
            <div className="ml-auto">
              <button className="p-2 -m-2 rounded-full hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] text-[#71767b] transition-colors">
                <MoreIcon />
              </button>
            </div>
          </div>
          
          {/* Role & Location */}
          <div className="mt-1">
            <span className="text-[15px] font-semibold text-[#1d9bf0]">{experience.role}</span>
            <span className="text-[#71767b] text-[15px]"> · {experience.location}</span>
          </div>
          
          {/* Bullet Points */}
          <ul className="mt-3 space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index} className="text-[15px] leading-5 text-[#e7e9ea] flex gap-2">
                <span className="text-[#1d9bf0] mt-1.5 flex-shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: bullet }} className="[&_b]:font-semibold [&_b]:text-white" />
              </li>
            ))}
          </ul>
          
          {/* Actions */}
          <div className="flex items-center gap-8 mt-3 text-[#71767b]">
            <button className="flex items-center gap-2 group">
              <div className="p-2 -m-2 rounded-full group-hover:bg-[#1d9bf0]/10 group-hover:text-[#1d9bf0] transition-colors">
                <CommentIcon />
              </div>
            </button>
            
            <button className="flex items-center gap-2 group">
              <div className="p-2 -m-2 rounded-full group-hover:bg-[#1d9bf0]/10 group-hover:text-[#1d9bf0] transition-colors">
                <ViewsIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("experiences");
  
  const tabs: { id: TabType; label: string }[] = [
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "highlights", label: "Highlights" },
    { id: "media", label: "Media" },
  ];

  return (
    <div className="min-h-screen bg-black text-[#e7e9ea]">
      {/* Layout wrapper */}
      <div className="flex justify-center">
        {/* Left Sidebar - hidden on mobile */}
        <Sidebar />

        {/* Main container */}
        <main className="w-full max-w-[600px] border-x border-[#2f3336] min-h-screen">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#2f3336]">
          <div className="flex items-center gap-6 px-4 h-[53px]">
            <button className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeftIcon />
            </button>
            <div>
              <h1 className="text-xl leading-6 italic" style={{ fontFamily: "'PP Editorial New', serif", fontWeight: 800 }}>Haadi Razzak</h1>
              <p className="text-[13px] text-[#71767b]">127 posts</p>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div className="h-[200px] relative overflow-hidden">
          <Image
            src="/background.jpg"
            alt="Profile banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Section */}
        <div className="px-4 pb-3 relative">
          {/* Avatar */}
          <div className="absolute -top-[67px] left-4">
            <div className="w-[134px] h-[134px] rounded-full border-4 border-black bg-[#2f3336] overflow-hidden">
              <Image
                src="/pfp.png"
                alt="Haadi Razzak"
                width={134}
                height={134}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Spacer for avatar overlap */}
          <div className="pt-3 pb-16" />

          {/* Name & Handle */}
          <div className="mt-1">
            <div className="flex items-center gap-1">
              <h2 className="text-xl italic" style={{ fontFamily: "'PP Editorial New', serif", fontWeight: 800 }}>Haadi Razzak</h2>
              <VerifiedBadge />
            </div>
            <p className="text-[#71767b] text-[15px]">@haadirazzak</p>
          </div>

          {/* Bio */}
          <div className="mt-3 text-[15px] leading-5">
            <span>swe{" "}</span>
            <span className="relative inline-block group">
              <span className="text-[#1d9bf0] cursor-pointer hover:underline">@aws</span>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <span className="block bg-[#16181c] border border-[#2f3336] rounded-xl p-3 shadow-xl">
                  <Image
                    src="/companies/aws.jpg"
                    alt="AWS"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <span className="block text-[13px] text-[#e7e9ea] mt-2 font-bold">Amazon Web Services</span>
                  <span className="block text-[12px] text-[#71767b]">@aws</span>
                </span>
              </span>
            </span>
            <span>{" "}|{" "}</span>
            <span className="relative inline-block group/usc">
              <span className="text-[#1d9bf0] cursor-pointer hover:underline">@usc</span>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/usc:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <span className="block bg-[#16181c] border border-[#2f3336] rounded-xl p-3 shadow-xl">
                  <Image
                    src="/companies/usc.png"
                    alt="USC"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <span className="block text-[13px] text-[#e7e9ea] mt-2 font-bold">University of Southern California</span>
                  <span className="block text-[12px] text-[#71767b]">@usc</span>
                </span>
              </span>
            </span>
            <span>{" "}alum</span>
            <p className="mt-1 text-[#71767b]">Building distributed systems at scale ☁️ | Previously tinkering with ML & full-stack</p>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-[15px] text-[#71767b]">
            <div className="flex items-center gap-1">
              <LocationIcon />
              <span>Seattle // SF</span>
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon />
              <a href="https://github.com/haadir" className="text-[#1d9bf0] hover:underline">github.com/haadir</a>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon />
              <span>Joined Earth April 2003</span>
            </div>
          </div>

          {/* Following/Followers */}
          <div className="flex gap-5 mt-3 text-[14px]">
            <button className="hover:underline">
              <span className="font-bold text-[#e7e9ea]">127</span>
              <span className="text-[#71767b]"> Following</span>
            </button>
            <button className="hover:underline">
              <span className="font-bold text-[#e7e9ea]">53</span>
              <span className="text-[#71767b]"> Followers</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <nav className="border-b border-[#2f3336]">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 relative py-4 text-[15px] font-medium hover:bg-white/[0.03] transition-colors ${
                  activeTab === tab.id ? "text-[#e7e9ea] font-bold" : "text-[#71767b]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#1d9bf0] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Feed */}
        <div>
          {activeTab === "experiences" && (
            <>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </>
          )}
          
          {activeTab === "projects" && (
            <div className="p-8 text-center text-[#71767b]">
              <p className="text-xl">🚀</p>
              <p className="mt-2">Projects coming soon...</p>
            </div>
          )}
          
          {activeTab === "highlights" && (
            <div className="p-8 text-center text-[#71767b]">
              <p className="text-xl">✨</p>
              <p className="mt-2">Highlights coming soon...</p>
            </div>
          )}
          
          {activeTab === "media" && (
            <div className="p-8 text-center text-[#71767b]">
              <p className="text-xl">🖼️</p>
              <p className="mt-2">Media coming soon...</p>
            </div>
          )}
        </div>
        
        {/* Bottom padding for scroll */}
        <div className="h-20" />
      </main>

        {/* Right spacer for symmetry on large screens */}
        <div className="hidden lg:block w-[350px]" />
      </div>
    </div>
  );
}
