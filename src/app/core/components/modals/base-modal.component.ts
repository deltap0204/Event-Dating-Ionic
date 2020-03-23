import {BaseComponent} from '@core/components/base.component';
import {
    EventEmitter,
    Injector,
    Output
} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NavigationEnd} from '@angular/router';
import {UserInterests} from '@core/core.models';
import ModalResult = UserInterests.ModalResult;

export abstract class BaseModalComponent extends BaseComponent {

    modalController: ModalController;
    values = {};
    modal;
    @Output()
    closeResult = new EventEmitter<ModalResult>();

    constructor(injector: Injector) {
        super(injector);
        this.modalController = injector.get(ModalController);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // close all open modals
                this.modalController.getTop().then(function (success) {
                    if (success) {
                        success.dismiss();
                    }
                }, function (error) {

                });
            }
        });

    }

    // async must or else throws error
    async open(content?, cssClass?) {
        this.modal = await this.modalController.create({component: content, componentProps: this.values, cssClass: cssClass});
        this.modal.onDidDismiss().then((detail) => {
            this.closeResult.emit(detail.data);
        });
        await this.modal.present();
    }

    closeModal(modal_result?: ModalResult) {
        this.modal.dismiss(modal_result);
    }


    setModalData(key, value) {
        this.values[key] = value;
    }

}
