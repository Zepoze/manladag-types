// Declaration needed to create source Interface
// Works with npm > @manladag/source@1.0.7
declare interface manga {
    name: string
}

declare interface source {
    site: string,
    url: string,
    mangas: { [name:string]: manga },
    getNumberPageChapter(manga:manga,chapter:number):Promise<number>,
    getUrlPages(manga:manga,chapter:number):Promise<string[]>,
    getLastChapter(manga:manga):Promise<number>,
    chapterIsAvailable(manga:manga,chapter:number) : Promise<boolean>
    getChaptersAvailable?(manga:manga, fromChapter:number, toChapter:number): Promise<number[]>
}
