"use client";
import { Button } from "@/shared/ui/button/button";
import cls from "./sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/shared/ui/input/input";
import { SidebarLink } from "@/widgets/sidebarLink";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    // iconPath, text, to
    const links = [];

    return (
        <aside
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <Button onClick={toggleSidebar} className={cls.button}>
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
            <SidebarLink iconPath="a" text="a" to="/a" />
        </aside>
    );
};
