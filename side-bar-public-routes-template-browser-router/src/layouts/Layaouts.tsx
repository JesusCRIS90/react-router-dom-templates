import { ReactNode } from "react";

import "./Layaout.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export function CenterLayout({ children, className = "center-layout" }: Props) {
  return <div className={className}>{children}</div>;
}

export function MainLayout({ children, className = "main-layout" }: Props) {
  return <div className={className}>{children}</div>;
}
