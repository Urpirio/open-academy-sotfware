import { cn } from "@/lib/utils";
import { CSSProperties } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { LuLibraryBig } from "react-icons/lu";
import { BiCompass } from "react-icons/bi";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

interface TypeIconos {
  className?: string;
  style?: CSSProperties;
}

export const Iconos = {
  LightningBolt: ({ className, style }: TypeIconos) => {
    return <HiLightningBolt className={cn("", className)} style={style} />;
  },
  RegEyeSlash: ({ className, style }: TypeIconos) => {
    return <FaRegEyeSlash className={cn("", className)} style={style} />;
  },
  RegEye: ({ className, style }: TypeIconos) => {
    return <FaRegEye className={cn("", className)} style={style} />;
  },
  LockReset: ({ className, style }: TypeIconos) => {
    return <MdLockReset className={cn("", className)} style={style} />;
  },
  ArrowBack: ({ className, style }: TypeIconos) => {
    return <MdArrowBack className={cn("", className)} style={style} />;
  },
  Dashboard: ({ className, style }: TypeIconos) => {
    return <MdDashboard className={cn("", className)} style={style} />;
  },
  LibraryBig: ({ className, style }: TypeIconos) => {
    return <LuLibraryBig className={cn("", className)} style={style} />;
  },
  Compass: ({ className, style }: TypeIconos) => {
    return <BiCompass className={cn("", className)} style={style} />;
  },
  MessageCircleQuestion: ({ className, style }: TypeIconos) => {
    return (
      <TbMessageCircleQuestion className={cn("", className)} style={style} />
    );
  },
  Settings3Fill: ({ className, style }: TypeIconos) => {
    return <RiSettings3Fill className={cn("", className)} style={style} />;
  },
  Search: ({ className, style }: TypeIconos) => {
    return <FiSearch className={cn("", className)} style={style} />;
  },
};
