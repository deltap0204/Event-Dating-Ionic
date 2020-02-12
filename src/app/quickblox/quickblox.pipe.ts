import {Pipe, PipeTransform} from '@angular/core';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {QB_NOTIFICATION_SETTINGS} from '@quickblox/quickblox.constants';
import CreateAndUploadFile = QuickbloxRequests.CreateAndUploadFile;
import Attachment = QuickbloxObjects.Attachment;


@Pipe({
    name: 'quickbloxPlatformToNotificationChannel'
})
export class QuickbloxPlatformToNotificationChannelPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        return QB_NOTIFICATION_SETTINGS[value].notification_channel;
    }
}

@Pipe({
    name: 'quickbloxCreateAndUploadFileResponseToAttachment'
})
export class QuickbloxCreateAndUploadFileResponseToAttachmentPipe implements PipeTransform {

    transform(value: CreateAndUploadFile.Response, ...args: any[]): Attachment {
        const attachment = new Attachment();
        // @ts-ignore
        attachment.uid = value.uid;
        attachment.type = 'photo';

        return attachment;
    }

}
