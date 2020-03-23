import {BaseComponent} from '@core/components/base.component';
import {
    EventEmitter,
    Injector,
    Output
} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {combineLatest} from 'rxjs';
import {UserInterests} from '@core/core.models';
import ModalResult = UserInterests.ModalResult;

export abstract class BaseModalContentComponent extends BaseComponent {

    @Output()
    closeModalClicked = new EventEmitter<ModalResult>();

    modalController: ModalController;

    effects_observable_array = [];

    constructor(injector: Injector) {
        super(injector);
        this.modalController = injector.get(ModalController);
    }

    closeModal(modal_result?: ModalResult) {
        if (this.effects_observable_array.length) {
            combineLatest(this.effects_observable_array)
                .subscribe(values => {
                    this.emitModalResultAndDismiss(modal_result);
                });
        } else {
            this.emitModalResultAndDismiss(modal_result);
        }
    }

    emitModalResultAndDismiss(modal_result?: ModalResult) {
        this.closeModalClicked.emit(modal_result);
        this.modalController.dismiss(modal_result);

    }

}
