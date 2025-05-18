"use client";
import { Button } from "@/shared/button/button";
import cls from "./sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export const Sidebar = () => {
    const t = useTranslations("HomePage");
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}
        >
            <Button onClick={toggleSidebar} className={cls.button}>
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
        </aside>
    );
};
