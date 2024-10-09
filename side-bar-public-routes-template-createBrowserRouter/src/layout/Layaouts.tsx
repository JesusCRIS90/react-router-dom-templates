import { ReactNode } from "react";

import styles from "./Layaout.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export function CenterLayout({ children, className = styles['center-layout'] }: Props) {
  return <div className={className}>{children}</div>;
}

export function MainLayout({ children, className = styles['main-layout'] }: Props) {
  return <div className={className}>{children}</div>;
}
