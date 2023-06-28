import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class FileService {
    public selectedFile: File | undefined
    public filename: string | undefined
    onFileSelected(event : any) {
        if (event.target) {
          this.selectedFile = <File>event.target.files[0]
          console.log('selectedFile', this.selectedFile)
          this.filename = this.selectedFile.name
        }
      }
  }