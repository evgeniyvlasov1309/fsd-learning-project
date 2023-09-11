import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        locales: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    // @ts-ignore
    config.resolve.modules.push(paths.src);
    // @ts-ignore
    config.resolve.extensions.push(".ts", ".tsx");

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    // @ts-ignore
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    // @ts-ignore
    config.module.rules.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        })
    );

    config.resolve?.modules?.unshift(paths.src);

    return config;
};
