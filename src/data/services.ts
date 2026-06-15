export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: ServiceIconName;
  deliverables: string[];
}

export type ServiceIconName =
  | "ClipboardCheck"
  | "Wrench"
  | "Settings"
  | "ShieldCheck";

export const services: Service[] = [
  {
    id: "engineering-consulting",
    slug: "engineering-consulting",
    title: "Engineering Consulting",
    shortDescription:
      "Feasibility studies, load profiling, and system architecture design for industrial energy projects.",
    fullDescription:
      "Our engineering team analyzes your site load profile, utility tariffs, and operational constraints to design an energy system that meets your reliability and sustainability targets. Deliverables include concept layouts, techno-economic analysis, and risk assessments.",
    iconName: "ClipboardCheck",
    deliverables: [
      "Site load profiling",
      "Techno-economic analysis",
      "Conceptual system design",
      "Regulatory roadmap",
    ],
  },
  {
    id: "system-integration",
    slug: "system-integration",
    title: "System Integration & Installation",
    shortDescription:
      "Turnkey integration of inverters, batteries, solar arrays, and control systems for seamless deployment.",
    fullDescription:
      "We manage the complete integration lifecycle—from hardware procurement and factory acceptance testing to on-site installation, commissioning, and handover. Our approach minimizes downtime and ensures every subsystem communicates reliably.",
    iconName: "Wrench",
    deliverables: [
      "Hardware procurement",
      "Factory acceptance testing",
      "On-site installation",
      "Commissioning & handover",
    ],
  },
  {
    id: "commissioning-testing",
    slug: "commissioning-testing",
    title: "Commissioning & Testing",
    shortDescription:
      "Performance validation, safety verification, and grid-interconnection support.",
    fullDescription:
      "Rigorous commissioning protocols confirm that power quality, protection settings, and control logic match the approved design. We coordinate witness testing with utilities and independent engineers to accelerate energization.",
    iconName: "Settings",
    deliverables: [
      "Protection & control validation",
      "Power quality testing",
      "Utility witness testing",
      "As-built documentation",
    ],
  },
  {
    id: "operations-maintenance",
    slug: "operations-maintenance",
    title: "Operations & Maintenance",
    shortDescription:
      "Long-term service plans, remote monitoring, and preventive maintenance for peak system availability.",
    fullDescription:
      "Protect your investment with scheduled maintenance, 24/7 remote monitoring, and rapid incident response. Our O&M programs extend asset life, sustain warranty compliance, and maximize uptime across the project lifecycle.",
    iconName: "ShieldCheck",
    deliverables: [
      "24/7 remote monitoring",
      "Preventive maintenance schedules",
      "Spare parts management",
      "Performance reporting",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
