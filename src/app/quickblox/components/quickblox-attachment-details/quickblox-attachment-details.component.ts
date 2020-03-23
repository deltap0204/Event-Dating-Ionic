import {Component, Injector, Input} from '@angular/core';
import {QuickbloxObjects} from '@quickblox/quickblox.models';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {Files} from '@core/core.models';
import Attachment = QuickbloxObjects.Attachment;
import UploadedFile = Files.UploadedFile;

@Component({
  selector: 'quickblox-attachment-details',
  templateUrl: './quickblox-attachment-details.component.html',
  styleUrls: ['./quickblox-attachment-details.component.scss'],
})
export class QuickbloxAttachmentDetailsComponent extends BaseComponent {

  @Input()
  attachment: Attachment;

  uploaded_file: UploadedFile;

  constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getUploadedFile(this.createRequestData());
  }

  createRequestData(attachment?: Attachment): Attachment {
    return attachment || this.attachment;
  }

  getUploadedFile(attachement: Attachment) {
    this.quickbloxService.getFilePrivateUrl(attachement)
        .subscribe(value => {
          this.uploaded_file = value;
        });
  }

}
