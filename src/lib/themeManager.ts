// src/lib/themeManager.ts
export function loadStylesheet(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.className = 'dynamic-theme';
    document.head.appendChild(link);
}

export function removeStylesheet() {
    const existingLink = document.querySelector('link.dynamic-theme');
    if (existingLink) {
        existingLink.remove();
    }
}