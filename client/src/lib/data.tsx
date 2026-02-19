import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  BatteryCharging, 
  Server, 
  Lightbulb, 
  AlertTriangle, 
  Search, 
  Plug, 
  HardHat,
  Home 
} from "lucide-react";

export const COMPANY_INFO = {
  name: "Apex Electric",
  phone: "(647) 555-0123",
  phoneRaw: "6475550123",
  email: "hello@apexelectric.ca",
  address: "Toronto, ON",
  serviceArea: "Greater Toronto Area",
  license: "ECRA/ESA #7000000 (Placeholder)",
  hours: "Mon-Fri: 7am - 7pm, Sat: 9am - 5pm, Sun: Emergency Only"
};

export const SERVICES = [
  {
    id: "residential",
    title: "Residential Electrical",
    slug: "residential-electrical",
    description: "Complete home electrical solutions from renovations to new builds.",
    icon: Home,
    features: ["Whole home wiring", "Renovations & additions", "Outlet & switch installation", "Smart home integration"],
    image: "/assets/hero-bg.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Electrical",
    slug: "commercial-electrical",
    description: "Reliable power solutions for offices, retail, and industrial spaces.",
    icon: Server,
    features: ["Office lighting & power", "Data cabling", "Backup generators", "Maintenance contracts"],
    image: "/assets/service-commercial.jpg"
  },
  {
    id: "emergency",
    title: "Emergency Services",
    slug: "emergency-electrical",
    description: "24/7 rapid response for power outages, electrical faults, and safety hazards.",
    icon: AlertTriangle,
    features: ["24/7 Availability", "Power outage restoration", "Fault finding", "Safety hazard resolution"],
    image: "/assets/hero-bg.jpg"
  },
  {
    id: "ev-charger",
    title: "EV Charger Installation",
    slug: "ev-charger-installation",
    description: "Level 2 EV charger installation for Tesla and all major electric vehicle brands.",
    icon: BatteryCharging,
    features: ["Tesla Wall Connector", "Universal Level 2 Chargers", "Panel capacity upgrades", "ESA certification"],
    image: "/assets/service-ev.jpg"
  },
  {
    id: "panel-upgrade",
    title: "Panel Upgrades",
    slug: "electrical-panel-upgrades",
    description: "Modernize your home's power capacity to safely run today's appliances.",
    icon: Zap,
    features: ["100A to 200A upgrades", "Fuse to breaker replacement", "Sub-panel installation", "Whole home surge protection"],
    image: "/assets/hero-bg.jpg"
  },
  {
    id: "lighting",
    title: "Lighting Installation",
    slug: "lighting-installation",
    description: "Transform your space with recessed pot lights, landscape lighting, and smart controls.",
    icon: Lightbulb,
    features: ["Recessed pot lights", "Landscape & exterior lighting", "Chandelier installation", "Smart dimmer switches"],
    image: "/assets/service-lighting.jpg"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting & Repair",
    slug: "troubleshooting-and-repairs",
    description: "Expert diagnostics to find and fix electrical issues quickly and safely.",
    icon: Search,
    features: ["Flickering lights", "Dead outlets", "Tripping breakers", "Wiring inspections"],
    image: "/assets/hero-bg.jpg"
  },
  {
    id: "surge",
    title: "Surge Protection",
    slug: "surge-protection",
    description: "Protect your expensive electronics and appliances from power spikes.",
    icon: ShieldCheck,
    features: ["Whole home protection", "Lightning protection", "Sensitive electronics safety", "Grounding inspection"],
    image: "/assets/hero-bg.jpg"
  }
];

export const SERVICE_AREAS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Scarborough",
  "Etobicoke",
  "North York"
];

export const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Toronto",
    rating: 5,
    date: "2 weeks ago",
    text: "Apex Electric saved the day! We lost power to half our house on a Sunday. They arrived within an hour, identified the issue in the main panel, and fixed it. Professional, clean, and upfront about the cost.",
    service: "Emergency Repair"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Markham",
    rating: 5,
    date: "1 month ago",
    text: "Had a Tesla Wall Connector installed. The team was fantastic. They handled the permit, did a clean install with conduit running through the garage, and walked me through how to use it. Highly recommended.",
    service: "EV Charger Installation"
  },
  {
    id: 3,
    name: "David Ross",
    location: "Mississauga",
    rating: 5,
    date: "3 months ago",
    text: "Upgraded our panel from fuses to breakers. It was a big job but Apex made it look easy. They coordinated with Hydro for the disconnect/reconnect seamlessly. Great communication throughout.",
    service: "Panel Upgrade"
  }
];

export const FAQS = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for most residential and commercial projects. For troubleshooting specific electrical faults, we have a standard diagnostic fee which is waived if you proceed with the repair."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed by the Electrical Safety Authority (ESA) and carry $5M in liability insurance and WSIB coverage for all our electricians. We never cut corners on safety."
  },
  {
    question: "Do you provide a warranty on your work?",
    answer: "Yes, we stand behind our craftsmanship with a 3-year workmanship warranty on all installations, in addition to any manufacturer warranties on parts and materials."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "For electrical emergencies, we aim to be on-site within 60-90 minutes anywhere in the Greater Toronto Area. Our emergency line is monitored 24/7."
  },
  {
    question: "Do I need a permit for my electrical work?",
    answer: "Most electrical alterations require an ESA permit. As licensed electrical contractors, we handle the entire permit and inspection process for you to ensure everything is code-compliant and legal."
  }
];
