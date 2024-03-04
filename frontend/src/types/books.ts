import { ReactNode } from "react";

export interface BookModel {
  _id: string;
  title: string;
  author: string;
  year: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface Inputprops {
  onChange: (x: any) => void;
  type: string | number;
  name?: string;
  placeholder?: string;
  value?: string | number;
  className?: string;
}
export interface LabelProps {
  children: string;
}
export interface BtnProps {
  name?: string;
  icon?: ReactNode;
  onClick?: (x: any) => void;
  type?: "button" | "submit" | "reset";
  children?: string | ReactNode;
  className?: string;
  disabled?: boolean;
}
