
export type FileInfo = {
 name:string,
 type:string,
 lenght:number,
 description:string,
 validationHash:string,

}


export type FileUploader = {
 accept:string[],
 existingFiles:FileInfo[],
 descriptionType:number,
 multiple:boolean,
 maxSize:number,
 lastModification:Date
}

export type Files = {
 accepted:any[],
 rejected:any[]
}


