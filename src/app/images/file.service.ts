import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    // copied from
    // https://devdactic.com/ionic-4-image-upload-storage/
    // https://medium.com/@aakashbanerjee/upload-files-to-amazon-s3-from-the-browser-using-pre-signed-urls-4602a9a90eb5

    constructor(injector: Injector, protected  http: HttpClient) {
    }

    uploadFile(file_url: string, content: Blob, content_type: string) {
        const headers = new HttpHeaders({'Content-Type': content_type});
        const req = new HttpRequest(
            'PUT',
            file_url,
            content,
            {
                headers: headers,
                // reportProgress: true, //This is required for track upload process
            });
        return this.http.request(req);
    }

}
