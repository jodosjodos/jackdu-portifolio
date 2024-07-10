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


export const experience:{title:string,date:string,company:string,location:string,responsibilities:string[]}[] = [
  {
    title: "LEAD FULL STACK DEVELOPER",
    date: "Jan 2022 - Nov 2023",
    company: "Hamlet",
    location: " Columbia, Maryland, United States",
    responsibilities: [
      "Led a team of Junior and Mid Developers, overseeing project designations and creating workflows for efficient development",
      "Maintained, developed, upgraded and enhanced the company's websites and internal systems, ensuring a high level of performance and usability",
      "Led the planning, tracking, and documentation of team progress, ensuring timely completion of projects.",
      "Created and implemented standardized codes for all company websites and systems, providing guidance for other developers and improving overall consistency.",
      "Conceptualized and implemented database structures, architectures, and relationships, optimizing data management and performance.",
      "Ensured that all modifications to the company's websites and systems were fully tested prior to deployment, minimizing the risk of errors and bugs",
      "Collaborated with other staff to come up with improvements, enhancements, and bug fixes to the company's websites and ordering systems, driving innovation and customer satisfaction.",
      "Demonstrated expertise in managing and deploying scalable cloud infrastructure using AWS services, including EC2, S3, and RDS, resulting in increased system reliability and cost optimization",
      "Proficient in a wide range of technologies including Reactjs, Typescript, Vuejs, Angular, Node Js, React Native, Nestjs, Django, Mysql, MongoDB,Postgresql,AWS."
    ]
  }
  ,{
    title: "SMART CONTRACT,WEB3 DEVELOPER",
    date: "Nov 2016 - Nov 2021",
    company: " Hamlet",
    location: "United States",
    responsibilities: [
      "Specialized in developing, integrating and deploying smart contracts on Ethereum/Solana Network using Hardhat/Truffle/Remix.",
      "Expertise in building NFT Marketplace, NFT games, NFT Foundry Website, NFT Art Image by rarity, OpenSea, Pinata, Metadata Generate, Staking, Reveal Function",
      "Proficient in ERC-20, ERC-721, ERC-1155, Solidity, Rust,Cardano."
     
    ]
  }
  ,{
    title: "FULL-STACK DEVELOPER",
    date: "Nov 2012 - Oct 2016",
    company: "Webhelp",
    location: "France",
    responsibilities: [
      
     
    ]
  },
 
]