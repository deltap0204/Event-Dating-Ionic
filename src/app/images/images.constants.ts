import {CameraOptions, MediaType, PictureSourceType} from '@ionic-native/camera/ngx';

export class ImagesConstants {

    public static FILES_ENDPOINT = 'files';

    public static PHOTO_CAMERA_OPTIONS: CameraOptions = {
        quality: 100,
        sourceType: PictureSourceType.CAMERA,
        mediaType: MediaType.PICTURE,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

    public static PHOTO_PHOTOLIBRARY_OPTIONS: CameraOptions = {
        quality: 100,
        sourceType: PictureSourceType.PHOTOLIBRARY,
        mediaType: MediaType.PICTURE,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };

}
