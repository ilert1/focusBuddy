"use client";

import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.scss";

const buttonVariants = cva(styles.button, {
    variants: {
        size: {
            sm: styles.sm,
            md: styles.md,
        },
    },
});

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { children, size } = props;

    return <button className={buttonVariants({ size })}>{children}</button>;
};
