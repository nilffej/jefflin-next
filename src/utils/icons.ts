import BootstrapIcon from "@/public/icons/bootstrap.svg";
import Chevron from "@/public/icons/chevron.svg";
import CodeIcon from "@/public/icons/code.svg";
import D3Icon from "@/public/icons/d3.svg";
import DartIcon from "@/public/icons/dart.svg";
import Document from "@/public/icons/document.svg";
import ExpressIcon from "@/public/icons/express.svg";
import FirebaseIcon from "@/public/icons/firebase.svg";
import FlutterIcon from "@/public/icons/flutter.svg";
import GitHub from "@/public/icons/github.svg";
import HomeIcon from "@/public/icons/home.svg";
import JavaIcon from "@/public/icons/java.svg";
import JavascriptIcon from "@/public/icons/javascript.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import MongoDBIcon from "@/public/icons/mongodb.svg";
import NextJSIcon from "@/public/icons/nextjs.svg";
import NoSQLIcon from "@/public/icons/nosql.svg";
import PersonIcon from "@/public/icons/person.svg";
import PostgreSQLIcon from "@/public/icons/postgresql.svg";
import ReactIcon from "@/public/icons/react.svg";
import ReduxIcon from "@/public/icons/redux.svg";
import SpringBootIcon from "@/public/icons/springboot.svg";
import SQLIcon from "@/public/icons/sql.svg";
import TypescriptIcon from "@/public/icons/typescript.svg";
import WorkIcon from "@/public/icons/work.svg";

export const iconMap = {
  Bootstrap: BootstrapIcon,
  "D3.js": D3Icon,
  Dart: DartIcon,
  Express: ExpressIcon,
  Firebase: FirebaseIcon,
  Flutter: FlutterIcon,
  Java: JavaIcon,
  Javascript: JavascriptIcon,
  MongoDB: MongoDBIcon,
  "Next.js": NextJSIcon,
  NoSQL: NoSQLIcon,
  PostgreSQL: PostgreSQLIcon,
  React: ReactIcon,
  Redux: ReduxIcon,
  SQL: SQLIcon,
  "Spring Boot": SpringBootIcon,
  Typescript: TypescriptIcon,
  chevron: Chevron,
  code: CodeIcon,
  document: Document,
  github: GitHub,
  home: HomeIcon,
  linkedin: LinkedIn,
  person: PersonIcon,
  work: WorkIcon,
};

export type IconTitle = keyof typeof iconMap;
