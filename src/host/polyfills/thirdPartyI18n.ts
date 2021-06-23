// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// Needs to change when the following bug is fixed:
// #341: Devtools should be localized as in the browser.
export function applyThirdPartyI18nLocalesPatch(content: string): string | null {
    const pattern = /const\s*locales\s*=\s*\{[^]+?};/g;
    if (content.match(pattern)) {
        return content.replace(pattern, "const locales = {'en-US': {'title': 'value'},};");
    }
        return null;

}
