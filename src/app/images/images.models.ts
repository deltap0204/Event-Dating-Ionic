import {JsonObject, JsonProperty} from 'json2typescript';
import {Files} from '@core/core.models';

export interface SelectedFile {
    file_url: string;
    file_name: string;
}

export interface FileBlob {
    file: File;
    blob: Blob;
}

export namespace FileRequests {
    export namespace CreateFileUploadRequest {

        import UploadedFile = Files.UploadedFile;

        @JsonObject()
        export class Request {
            @JsonProperty('entityType', String)
            entityType: string = undefined;
            @JsonProperty('name', String)
            name: string = undefined;
            @JsonProperty('type', String)
            type: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;
        }

        @JsonObject()
        export class Response extends UploadedFile {
        }

    }

    export namespace GetUploadedFileByEntityAndType {

        import UploadedFile = Files.UploadedFile;

        @JsonObject()
        export class Request {
            @JsonProperty('entityType', String)
            entityType: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;
        }

        @JsonObject()
        export class Response extends UploadedFile {
        }

    }

    export namespace UploadFile {
        export class Request {

        }
    }

    export namespace DeleteUploadedFile {
        export class Request {
            fileId: string;
        }
    }

    export namespace GetUploadedFile {
        import UploadedFile = Files.UploadedFile;

        @JsonObject()
        export class Request {
            fileId: string;
        }

        @JsonObject()
        export class Response extends UploadedFile {

        }
    }

}
