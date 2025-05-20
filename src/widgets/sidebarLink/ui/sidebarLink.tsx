import Image from "next/image";
import Link from "next/link";
import styles from "./sidebarLink.module.scss";
import { AppRouteByPathPattern } from "@/shared/const/routes";

export interface SidebarLinkProps {
    to: string;
    iconPath: string;
    text: string;
}

export const SidebarLink = (props: SidebarLinkProps) => {
    const { iconPath, text, to } = props;
    console.log(AppRouteByPathPattern);

    return (
        <Link href={to} className={styles.sidebarLink}>
            {/* <Image src={iconPath} alt="Sidebar icon" /> */}
            <span>{text}</span>
        </Link>
    );
};
