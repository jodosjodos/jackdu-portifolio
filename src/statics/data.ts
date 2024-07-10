export const headers: { name: string; to: string }[] = [
  { name: "Home", to: "/#/" },
  { name: "About", to: "/#/about" },
  { name: "Resume", to: "/#/resume" },
  { name: "Services", to: "/#/services" },
  { name: "Portfolio", to: "/#/portfolio" },
];

export const analytics: { title: string; count: number }[] = [
  {
    title: "Happy client",
    count: 23,
  },
  {
    title: "Projects",
    count: 53
    ,
  },
  {
    title: "Hours of Support",
    count: 1000
    ,
  },
  {
    title: "Hard Workers",
    count: 3
    ,
  },
];

export const skills: { categories: string[], percentage: number[] }[] = [{ categories:["React", "Angular", "Vue", "NodeJs"],percentage:[95,90,95,90]},{ categories:["Solidity", "Nest js", "React Native", "Mysql"],percentage:[95,90,95,90]}]
export const portfolio = [
  {
    image: "/online_shot.png",
    title: "Price Comparison Website",
    url: "https://ae.pricena.com/en/",
    type: "web",
  },
  {
    image: "/dating_site.png",
    title: "Dating Website",
    url: "https://gopromenad.com/",
    type: "web",
  },
  {
    image: "/NFT_market.png",
    title: "NFT Marketplace",
    url: "https://market.kryptomon.co/",
    type: "blockchain",
  },
  {
    image: "/LF_Finance.png",
    title: "LP Finance Project",
    url: "https://lp.finance/",
    type: "blockchain",
  },
];

export const filters = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "WEB",
    value: "web",
  },
  {
    name: "BLOCKCHAIN",
    value: "blockchain",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Bots Trading | Sports Betting | Booking System |",
  },
  {
    title: "Mobile App Development",
    description:
      "Online dating app | Delivery app | Fitness app | Online shopping app |",
  },
  {
    title: "Blockchain",
    description: "Defi and Dapps platform | Smart contracts | NFT |",
  },
];