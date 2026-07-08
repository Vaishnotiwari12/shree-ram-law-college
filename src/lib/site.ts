export const SITE = {
  name: "Shree Ram Law College",
  shortName: "Shree Ram Law",
  tagline: "Best Environment for Higher Legal Education",
  address:
    "Village Nandana, Post Patarsa, Tehsil Ghatampur, Kanpur Nagar (U.P.)",
  phones: ["+91 94150 67926", "+91 94556 16195"],
  email: "sriramlawcollege@gmail.com",
  website: "sriramlawcollege.com",
  whatsapp: "919415067926",
  affiliations: [
    "Approved by Bar Council of India",
    "Affiliated to C.S.J.M. University, Kanpur",
  ],
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/admissions", label: "Admissions" },
  { to: "/notices", label: "Notices" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
