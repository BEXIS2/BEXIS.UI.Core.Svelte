
export interface FileInfo {
 name:string,
 type:string,
 lenght:number,
 description:string,
 validationHash:string,

}


export interface FileUploaderModel{
 accept:string[],
 existingFiles:FileInfo[],
 descriptionType:number,
 multiple:boolean,
 maxSize:number,
 lastModification:Date
}

export interface Files {
 accepted:any[],
 rejected:any[]
}


export type user = {
 name:string
}