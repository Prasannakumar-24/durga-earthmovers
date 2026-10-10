
const companyConfig = {
  name: "DURGA EARTHMOVERS",

  tagline: "Powering Earthwork. Building Progress.",

  phone: "+91 9959290339",

  email: "venkatadurgaprasad986@gmail.com",

  whatsapp: "919959290339",

  instagram: "",

  address:
    "Vijaynagar Colony 10 Line, Vaddipalem, Ongole, Andhra Pradesh 523001",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Vijaynagar+Colony+10+Line+Vaddipalem+Ongole+Andhra+Pradesh+523001",

  siteUrl: "",

  // =========================
  // WEBSITE LOGO
  // =========================
  logo: "/assets/images/durga-earthmovers-logo.png",

  // =========================
  // SOCIAL LINKS
  // =========================
  socialLinks: {
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  },

  // =========================
  // SERVICES & MACHINERY
  // =========================
  services: [
    {
      id: 1,
      name: "Excavator 130",
      category: "Excavation",
      description:
        "Powerful 130-ton excavator for heavy-duty excavation and earthmoving projects.",

      // IMPORTANT:
      // File location:
      // client/public/assets/images/machinery/excavator-130.jpg
      //
      // Browser URL:
      // /assets/images/machinery/excavator-130.jpg
      image: "/assets/images/machinery/excavator-130.jpg",
    },

    {
      id: 2,
      name: "Excavator 110",
      category: "Excavation",
      description:
        "Versatile 110-ton excavator for medium to large-scale excavation work.",
      image: "/assets/images/machinery/110.jpg",
    },

    {
      id: 3,
      name: "Excavator 210",
      category: "Excavation",
      description:
        "Heavy-duty 210-ton excavator for major earthmoving and excavation projects.",
      image: "/assets/images/machinery/210.jpg",
    },

    {
      id: 4,
      name: "Hydraulic Breaker",
      category: "Breaking",
      description:
        "High-performance hydraulic breaker for rock breaking and demolition.",
      image: "/assets/images/machinery/breaker.jpg",
    },

    {
      id: 5,
      name: "Tractors",
      category: "Transportation",
      description:
        "Heavy-duty tractors for material handling and site preparation.",
      image: "/assets/images/machinery/tractor.jpg",
    },

    {
      id: 6,
      name: "Road Cutting Machine",
      category: "Road Work",
      description:
        "Precision road cutting equipment for road construction and maintenance.",
      image: "/assets/images/machinery/road cutting.jpg",
    },

    {
      id: 7,
      name: "Lorries",
      category: "Transportation",
      description:
        "Heavy-duty lorries for material transportation and earthmoving.",
      image: "/assets/images/machinery/lorry.jpg",
    },

    {
      id: 8,
      name: "JCB Machines",
      category: "Excavation",
      description:
        "Versatile JCB machines for digging, loading, and construction support.",
      image: "/assets/images/machinery/jcb.jpg",
    },
  ],

  // =========================
  // WORK TYPES
  // =========================
  workTypes: [
    {
      id: 1,
      name: "Excavation",
      icon: "shovel",
      description:
        "Professional excavation services for foundations, trenches, and site preparation.",

      // Same Excavator 130 image
      image: "/assets/images/machinery/excavator-130.jpg",
    },

    {
      id: 2,
      name: "Digging",
      icon: "pickaxe",
      description:
        "Expert digging services for construction and infrastructure projects.",
      image: "/assets/images/machinery/trench digging.jpg",
    },

    {
      id: 3,
      name: "Road Cutting",
      icon: "road",
      description:
        "Precision road cutting for road construction and utility installation.",
      image: "/assets/images/machinery/road cutting 2.jpg",
    },

    {
      id: 4,
      name: "Earthmoving",
      icon: "mountain",
      description:
        "Large-scale earthmoving for site leveling and land development.",
      image: "/assets/images/services/earthmoving.svg",
    },

    {
      id: 5,
      name: "Site Preparation",
      icon: "building",
      description:
        "Complete site preparation services for construction projects.",
      image: "/assets/images/machinery/site preparation.jpg",
    },

    {
      id: 6,
      name: "Material Handling",
      icon: "package",
      description:
        "Efficient material handling and transportation services.",
      image: "/assets/images/services/material-handling.svg",
    },

    {
      id: 7,
      name: "Construction Support",
      icon: "hammer",
      description:
        "Comprehensive construction support with heavy machinery.",
      image: "/assets/images/services/construction-support.svg",
    },

    {
      id: 8,
      name: "Machinery Deployment",
      icon: "truck",
      description:
        "Professional machinery deployment and equipment rental services.",
      image: "/assets/images/services/machinery-deployment.svg",
    },
  ],

  // =========================
  // COMPANY STATS
  // =========================
  stats: {
    machines: "130+",
    projects: "IMMEDIATE SERVICES",
    experience: "Years of Experience",
  },
};

export default companyConfig;

