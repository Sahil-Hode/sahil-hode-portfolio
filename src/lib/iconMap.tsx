import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiOpenai, SiDocker, 
  SiVercel, SiPython, SiPostgresql, SiFlutter, 
  SiRailway, SiGitlab, SiBun, SiNestjs, 
  SiExpress, SiMysql, SiNetlify,
  SiFramer, SiJavascript, SiHtml5, SiCss
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrain, TbCloudCode, TbInfinity, TbRoute, TbDeviceMobile, TbDatabase, TbRocket } from "react-icons/tb";
import { HiOutlineLightningBolt, HiOutlineServer, HiOutlineCog, HiOutlineSparkles } from "react-icons/hi";

export const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  nodejs: <SiNodedotjs />,
  mongodb: <SiMongodb />,
  openai: <SiOpenai />,
  docker: <SiDocker />,
  vercel: <SiVercel />,
  python: <SiPython />,
  postgresql: <SiPostgresql />,
  flutter: <SiFlutter />,
  railway: <SiRailway />,
  gitlab: <SiGitlab />,
  bun: <SiBun />,
  nestjs: <SiNestjs />,
  express: <SiExpress />,
  mysql: <SiMysql />,
  aws: <FaAws />,
  netlify: <SiNetlify />,
  framer: <SiFramer />,
  javascript: <SiJavascript />,
  html: <SiHtml5 />,
  css: <SiCss />,
  brain: <TbBrain />,
  cloud: <TbCloudCode />,
  infinity: <TbInfinity />,
  route: <TbRoute />,
  mobile: <TbDeviceMobile />,
  database: <TbDatabase />,
  rocket: <TbRocket />,
  lightning: <HiOutlineLightningBolt />,
  server: <HiOutlineServer />,
  cog: <HiOutlineCog />,
  sparkles: <HiOutlineSparkles />,
};
