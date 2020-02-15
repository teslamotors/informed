import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'light',
    brandTitle: 'Informed',
    brandUrl: 'https://joepuzzo.github.io/informed',
    //brandImage: 'https://placehold.it/350x150',

    //colorPrimary: 'hotpink',
    //colorSecondary: 'deepskyblue',

    // UI
    // appBg: 'white',
    // appContentBg: 'silver',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,

    // Typography
    // fontBase: '"Open Sans", sans-serif',
    // fontCode: 'monospace',

    // Text colors
    //textColor: 'white',
    //textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    // barTextColor: 'silver',
    // barSelectedColor: 'black',
    // barBg: 'hotpink',

    // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: 'black',
    // inputBorderRadius: 4,
});


addons.setConfig({
    name: 'Informed',
    url: 'https://joepuzzo.github.io/informed',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,

    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,

    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,

    /**
     * theme storybook, see link below
     */
    theme,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined,
});