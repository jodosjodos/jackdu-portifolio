export const headers: { name: string; to: string }[] = [
  { name: "Home", to: "/#/" },
  { name: "About", to: "/#/about" },
  { name: "Resume", to: "/#/resume" },
  { name: "Services", to: "/#/services" },
  { name: "Portifolio", to: "/#/portifolio" },
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
