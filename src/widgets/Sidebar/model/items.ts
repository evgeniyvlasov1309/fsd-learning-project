import { SVGProps, VFC } from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import MainIcon from "shared/assets/icons/main.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
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
        Icon: ProfileIcon,
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "articles-menu-item",
        authOnly: true,
    },
]