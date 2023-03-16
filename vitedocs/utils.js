import mediaQueries from './tokens/media.json';

/**
 * matchMediaQuery
 *
 * @param {*} query 'phone-only' | 'desktop-up', etc. See tokens/media.json for a complete list
 * @returns a MediaQueryList for the matching query
 */
export const matchMediaQuery = query => window.matchMedia(mediaQueries[query]);

/**
 * isMedia
 * - Util function for matching the current window's media query
 * @param query 'phone-only' | 'desktop-up', etc. See tokens/media.json for a complete list
 * @returns true | false if the window is of the query's dimensions
 */
export const isMedia = query => matchMediaQuery(query).matches;

/**
 * Query-specific utils
 * @returns true if query is matched
 */
export const isPhoneOnly = () => isMedia('phone-only');
export const isTabletPortraitOnly = () => isMedia('tablet-portrait-only');
export const isTabletPortraitUp = () => isMedia('tablet-portrait-up');
export const isTabletLandscapeOnly = () => isMedia('tablet-landscape-only');
export const isTabletLandscapeUp = () => isMedia('tablet-landscape-up');
export const isDesktopOnly = () => isMedia('desktop-only');
export const isDesktopUp = () => isMedia('desktop-up');
export const isDesktopLargeUp = () => isMedia('desktop-large-up');

/**
 * Density-specific utils
 */
export const isDensity2x = () => isMedia('density--2x');
export const isDensity3x = () => isMedia('density--3x');
export const isDensity4x = () => isMedia('density--4x');
