// import { classNames } from "@/shared/lib/classNames/classNames";
import { Input as AriaInput, InputProps } from "react-aria-components";
import styles from "./input.module.scss";

// export interface IInputProps extends InputProps {
// className?: string;
// }

export const Input = (props: InputProps) => {
    const {
        // className,
        ...rest
    } = props;

    return <AriaInput className={styles.input} {...rest} />;
};
