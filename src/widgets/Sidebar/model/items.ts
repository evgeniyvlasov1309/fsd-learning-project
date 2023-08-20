import { RoutePath } from "app/providers/router";
import { SVGProps, VFC } from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: "main-menu-item",
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: "about-us-menu-item",
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: "profile-menu-item",
        Icon: ProfileIcon
    }
]