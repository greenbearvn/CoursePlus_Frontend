export interface Blog{
    blogId: number;
    blogName: string;
    content?: string;
    thumnail: string;
    datePublish?: Date;
    cateid: number;
    userId: number;
    status: number;
}