"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Button as AriaButton, ButtonProps } from "react-aria-components";
import { ReactNode } from "react";
import styles from "./button.module.scss";

const buttonVariants = cva(styles.button, {
    variants: {
        // size: {
        //     sm: styles.sm,
        //     md: styles.md,
        // },
        // defaultVariants: {
        //     size: "md",
        // },
    },
});

type AriaButtonTypes = ButtonProps & React.RefAttributes<HTMLButtonElement>;

export interface IButtonProps
    extends AriaButtonTypes,
        VariantProps<typeof buttonVariants> {
    children: ReactNode;
    className?: string;
}

export const Button = (props: IButtonProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <AriaButton className={buttonVariants({ className })} {...otherProps}>
            {children}
        </AriaButton>
    );
};
