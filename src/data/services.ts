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
  | "Sun"
  | "Droplets"
  | "FileText"
  | "Wrench"
  | "MessageCircle";

export const services: Service[] = [
  {
    id: "on-grid-solar-system-installation",
    slug: "on-grid-solar-system-installation",
    title: "On-Grid Solar System Installation",
    shortDescription:
      "Grid-connected solar systems for homes, businesses, and industrial sites.",
    fullDescription:
      "Neo Energy provides grid-connected solar system installation for properties that remain linked to the national electricity grid. Our on-grid solutions help residential, commercial, and industrial customers reduce electricity costs while benefiting from net metering and high-performance solar generation.",
    iconName: "Sun",
    deliverables: [
      "Lower electricity costs with net metering",
      "Efficient generation through high-performance solar panels",
      "Integration with existing grid infrastructure",
      "Professional installation and commissioning",
    ],
  },
  {
    id: "solar-pumping-systems-for-agriculture",
    slug: "solar-pumping-systems-for-agriculture",
    title: "Solar Pumping Systems for Agriculture",
    shortDescription:
      "Solar irrigation and pumping solutions for farms and remote locations.",
    fullDescription:
      "Solar pumping systems are presented as a solution for farmers and agribusinesses seeking stable water access without dependence on diesel generators. These systems provide reliable water supply during sunlight hours, reduce fuel dependency, and support lower-emission agricultural operations.",
    iconName: "Droplets",
    deliverables: [
      "Reliable and sustainable water supply",
      "Reduced fuel dependency and generator costs",
      "Lower-emission agricultural operations",
      "Customized pumping solutions for farm scale and water demand",
    ],
  },
  {
    id: "power-purchase-agreement",
    slug: "power-purchase-agreement",
    title: "Power Purchase Agreement (PPA)",
    shortDescription:
      "Enables companies to use solar energy without upfront capital investment.",
    fullDescription:
      "Neo Energy offers a PPA model where the client hosts a solar energy system without paying the upfront system cost. The client pays only for the electricity generated, usually below traditional utility rates, while Neo Energy handles installation, operations, monitoring, and maintenance.",
    iconName: "FileText",
    deliverables: [
      "No upfront system cost",
      "Pay for electricity used at competitive rates",
      "Long-term energy cost savings",
      "Maintenance-free operations by Neo Energy",
      "Flexible contract durations from 10 to 25 years",
    ],
  },
  {
    id: "engineering-procurement-construction",
    slug: "engineering-procurement-construction",
    title: "Engineering, Procurement, and Construction (EPC)",
    shortDescription: "End-to-end turnkey solar system service.",
    fullDescription:
      "Neo Energy describes EPC as an end-to-end turnkey solar system service. We manage every phase of the project—from system design and engineering to procurement of solar panels, inverters, and accessories, followed by professional installation and commissioning.",
    iconName: "Wrench",
    deliverables: [
      "System design and engineering",
      "Procurement of solar panels, inverters, and accessories",
      "Professional installation and commissioning",
      "Quality assurance and project handover",
    ],
  },
  {
    id: "solar-energy-consultation",
    slug: "solar-energy-consultation",
    title: "Solar Energy Consultation and Project Development",
    shortDescription:
      "Helping clients assess solar potential, design systems, and manage approvals.",
    fullDescription:
      "Consultation services are built around helping clients assess solar potential, design systems, and manage approvals. Our team supports feasibility studies, energy audits, customized system design, and regulatory compliance to move projects from concept to implementation.",
    iconName: "MessageCircle",
    deliverables: [
      "Feasibility studies and energy audits",
      "Customized system design by location, energy needs, and budget",
      "Regulatory support, permits, grid approvals, and compliance",
      "Project development guidance from concept to commissioning",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
