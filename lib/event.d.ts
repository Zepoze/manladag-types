declare interface argsOnDonwloadPageFinishedListener {
    path: string;
    page: number;
    source: source;
    manga: string;
}
declare interface onDonwloadPageFinishedListener {
    (args: argsOnDonwloadPageFinishedListener): void;
}
declare interface argsOnDonwloadPageStartedListener {
    path: string;
    page: number;
    source: source;
    manga: string;
}
declare interface onDonwloadPageStartedListener {
    (args: argsOnDonwloadPageStartedListener): void;
}
declare interface argsOnDonwloadPageErrorListener {
    path: string;
    page: number;
    source: source;
    manga: string;
    error: Error;
}
declare interface onDonwloadPageErrorListener {
    (args: argsOnDonwloadPageErrorListener): void;
}
declare interface argsOnDonwloadChapterStartedListener {
    manga: string;
    path: string;
    numberPage: number;
    source: string;
    chapter: number;
}
declare interface onDonwloadChapterStartedListener {
    (args: argsOnDonwloadChapterStartedListener): void;
}
declare interface argsOnDonwloadChapterFinishedListener {
    manga: string;
    path: string;
    numberPage: number;
    source: string;
    chapter: number;
}
declare interface onDonwloadChapterFinishedListener {
    (args: argsOnDonwloadChapterFinishedListener): void;
}
declare interface argsOnDonwloadChapterErrorListener {
    manga: string;
    path: string;
    numberPage: number;
    source: string;
    chapter: number;
    error: Error;
}
declare interface onDonwloadChapterErrorListener {
    (args: argsOnDonwloadChapterErrorListener): void;
}
