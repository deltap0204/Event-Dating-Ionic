import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MomentModule} from 'ngx-moment';
import {FormsModule, NG_VALIDATORS, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DynamicFormsIonicUIModule} from '@ng-dynamic-forms/ui-ionic';
import {NgBusyModule} from 'ng-busy';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {HttpModule} from '@core/http/http.module';
import {Toast as ToastValue} from '@ionic-native/toast';
import {Toast} from '@ionic-native/toast/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {Camera as CameraValue} from '@ionic-native/camera';
import {File} from '@ionic-native/file/ngx';
import {File as FileValue} from '@ionic-native/file';
import {PhotoViewer} from '@ionic-native/photo-viewer/ngx';
import {PhotoViewer as PhotoViewerValue} from '@ionic-native/photo-viewer';
import {FileTransfer as FileTransferValue} from '@ionic-native/file-transfer';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';

import {
    AppArrayRandomItemPipe, AppConvertToArrayPipe,
    AppDefaultDateFormatPipe,
    AppDefaultDateTimeFormatToMomentPipe,
    AppDefaultTimeFormatPipe,
    AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
    AppMomentToDefaultDateTimeFormatPipe,
    AppNonZeroDayPipe, AppObjectArrayToPropertyArrayPipe,
    AppShortDateFormatPipe,
    AppSortDateTimeStringKeyValuePipe,
    AppSortNumberKeyValuePipe,
    AppStringToNumberPipe,
    AppWeekNumberToWeekStartDayNumberPipe,
    NumberToMomentDurationPipe
} from './core.pipe';
import {FormValidations} from '@core/form.validations';
import {CoreFormValidationMessageComponent} from '@core/components/core-form-validation-message/core-form-validation-message.component';
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons';
import {DYNAMIC_VALIDATORS, Validator, ValidatorFactory} from '@ng-dynamic-forms/core';
import {faBirthdayCake} from '@fortawesome/free-solid-svg-icons/faBirthdayCake';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faVenusDouble} from '@fortawesome/free-solid-svg-icons/faVenusDouble';
import {faGlassMartini} from '@fortawesome/free-solid-svg-icons/faGlassMartini';
import {faArrowsAltH} from '@fortawesome/free-solid-svg-icons/faArrowsAltH';
import {faSmoking} from '@fortawesome/free-solid-svg-icons/faSmoking';
import {faHeart, fas} from '@fortawesome/free-solid-svg-icons';
import {AuthGuard} from '@core/auth.guard';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faMapMarker} from '@fortawesome/free-solid-svg-icons/faMapMarker';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons/faSuitcase';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog';
import {faSlidersH} from '@fortawesome/free-solid-svg-icons/faSlidersH';
import {faDharmachakra} from '@fortawesome/free-solid-svg-icons/faDharmachakra';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons/faShareAlt';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {ModalFooterComponent} from '@core/components/modals/modal-footer/modal-footer.component';
import {ModalHeaderComponent} from '@core/components/modals/modal-header/modal-header.component';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import {faGavel} from '@fortawesome/free-solid-svg-icons/faGavel';
import {faCookie} from '@fortawesome/free-solid-svg-icons/faCookie';
import {faIdBadge} from '@fortawesome/free-solid-svg-icons/faIdBadge';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {CoreConfirmDirective} from './directives/core-confirm.directive';
import {CoreClickStopPropogationDirective} from './directives/core-click-stop-propogation.directive';
import {NgxStripeModule} from 'ngx-stripe';


@NgModule({
    declarations: [AppDefaultDateFormatPipe,
        AppShortDateFormatPipe,
        AppDefaultTimeFormatPipe,
        AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
        AppDefaultDateTimeFormatToMomentPipe,
        AppMomentToDefaultDateTimeFormatPipe,
        AppNonZeroDayPipe,
        AppSortDateTimeStringKeyValuePipe,
        AppSortNumberKeyValuePipe,
        AppStringToNumberPipe,
        AppWeekNumberToWeekStartDayNumberPipe,
        NumberToMomentDurationPipe,
        CoreFormValidationMessageComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        CoreConfirmDirective,
        CoreClickStopPropogationDirective,
        AppObjectArrayToPropertyArrayPipe,
        AppArrayRandomItemPipe,
        AppConvertToArrayPipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        IonicModule,
        MomentModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsIonicUIModule,
        NgBusyModule,
        AmplifyAngularModule,
        Angular2PromiseButtonModule,
        FontAwesomeModule,
        NgxStripeModule
    ],
    exports: [
        CommonModule,
        HttpModule,
        IonicModule,
        MomentModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsIonicUIModule,
        NgBusyModule,
        AmplifyAngularModule,
        AppDefaultDateFormatPipe,
        AppShortDateFormatPipe,
        AppDefaultTimeFormatPipe,
        AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
        AppDefaultDateTimeFormatToMomentPipe,
        AppMomentToDefaultDateTimeFormatPipe,
        AppNonZeroDayPipe,
        AppSortDateTimeStringKeyValuePipe,
        AppSortNumberKeyValuePipe,
        AppStringToNumberPipe,
        AppWeekNumberToWeekStartDayNumberPipe,
        NumberToMomentDurationPipe,
        CoreFormValidationMessageComponent,
        Angular2PromiseButtonModule,
        FontAwesomeModule,
        ModalFooterComponent,
        ModalHeaderComponent,
        CoreConfirmDirective,
        CoreClickStopPropogationDirective,
        NgxStripeModule,
        AppObjectArrayToPropertyArrayPipe,
        AppArrayRandomItemPipe,
        AppConvertToArrayPipe
    ],
    providers: [
        AmplifyService,
        AuthGuard,
        {
            provide: NG_VALIDATORS,
            useValue: FormValidations.emailValidator,
            multi: true
        },
        {
            provide: DYNAMIC_VALIDATORS,
            useValue: new Map<string, Validator | ValidatorFactory>([
                [
                    'emailValidator',
                    FormValidations.emailValidator
                ],
                [
                    'mobileNumberValidator',
                    FormValidations.mobileNumberValidator
                ],
                [
                    'appPasswordValidator',
                    FormValidations.appPasswordValidator
                ]
            ])
        },
        {provide: Toast, useValue: ToastValue},
        {provide: Camera, useValue: CameraValue},
        {provide: File, useValue: FileValue},
        {provide: PhotoViewer, useValue: PhotoViewerValue},
        {provide: FileTransfer, useValue: FileTransferValue},
    ]

})
export class CoreModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
        library.addIcons(faBirthdayCake, faVenusDouble, faGlassMartini,
            faArrowsAltH, faSmoking, faHome, faComments, faUser, faMapMarker, faArrowRight, faChevronRight,
            faMapMarkerAlt, faSuitcase, faQuoteLeft, faSearch, faCog, faSlidersH, faDharmachakra, faShareAlt,
            faCalendar, faClock, faUsers, faThumbsUp, faPaperPlane, faChevronLeft, faPlus, faShieldAlt, faGavel,
            faCookie, faIdBadge, faPencilAlt, faHeart
        );
    }
}
