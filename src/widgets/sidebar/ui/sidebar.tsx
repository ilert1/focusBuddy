"use client";
import { Button } from "@/shared/button/button";
import cls from "./sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <Button size={"md"} onClick={toggleSidebar}>
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>

            {/* контент */}
        </aside>
    );
};
