import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {ImagesConstants} from '@images/images.constants';
import {FileRequests} from '@images/images.models';
import GetUploadedFileByEntityAndType = FileRequests.GetUploadedFileByEntityAndType;
import CreateFileUploadRequest = FileRequests.CreateFileUploadRequest;
import DeleteUploadedFile = FileRequests.DeleteUploadedFile;
import GetUploadedFile = FileRequests.GetUploadedFile;

@Injectable({
    providedIn: 'root'
})
export class ImagesService extends RestService {

    filesService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.filesService = this.getService(ImagesConstants.FILES_ENDPOINT);
    }

    getFileByEntityAndType(request: GetUploadedFileByEntityAndType.Request) {
        return this.filesService.one('entities').customGET('', this.serialize(request));
    }

    createFileUploadRequest(request: CreateFileUploadRequest.Request) {
        return this.filesService.one('requestUpload').customPOST(this.serialize(request));
    }

    deleteUploadedFile(request: DeleteUploadedFile.Request) {
        return this.filesService.one(request.fileId).customDELETE();
    }

    getUploadedFile(request: GetUploadedFile.Request) {
        return this.filesService.one(request.fileId).get();
    }
}
