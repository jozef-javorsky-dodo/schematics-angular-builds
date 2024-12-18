/**
 * Generates a new basic application definition in the "projects" subfolder of the workspace.
 */
export interface Schema {
    /**
     * Create an application that does not utilize zone.js.
     */
    experimentalZoneless?: boolean;
    /**
     * Include styles inline in the root component.ts file. Only CSS styles can be included
     * inline. Default is false, meaning that an external styles file is created and referenced
     * in the root component.ts file.
     */
    inlineStyle?: boolean;
    /**
     * Include template inline in the root component.ts file. Default is false, meaning that an
     * external template file is created and referenced in the root component.ts file.
     */
    inlineTemplate?: boolean;
    /**
     * Create a bare-bones project without any testing frameworks. (Use for learning purposes
     * only.)
     */
    minimal?: boolean;
    /**
     * The name of the new application.
     */
    name: string;
    /**
     * A prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The root directory of the new application.
     */
    projectRoot?: string;
    /**
     * Creates an application with routing enabled.
     */
    routing?: boolean;
    /**
     * Creates a server application using the Server Routing and App Engine APIs (Developer
     * Preview).
     */
    serverRouting?: boolean;
    /**
     * Skip installing dependency packages.
     */
    skipInstall?: boolean;
    /**
     * Do not add dependencies to the "package.json" file.
     */
    skipPackageJson?: boolean;
    /**
     * Do not create "spec.ts" test files for the application.
     */
    skipTests?: boolean;
    /**
     * Creates an application with Server-Side Rendering (SSR) and Static Site Generation
     * (SSG/Prerendering) enabled.
     */
    ssr?: boolean;
    /**
     * Creates an application based upon the standalone API, without NgModules.
     */
    standalone?: boolean;
    /**
     * Creates an application with stricter bundle budgets settings.
     */
    strict?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * The view encapsulation strategy to use in the new application.
     */
    viewEncapsulation?: ViewEncapsulation;
}
/**
 * The file extension or preprocessor to use for style files.
 */
export declare enum Style {
    Css = "css",
    Less = "less",
    Sass = "sass",
    Scss = "scss"
}
/**
 * The view encapsulation strategy to use in the new application.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    None = "None",
    ShadowDom = "ShadowDom"
}
