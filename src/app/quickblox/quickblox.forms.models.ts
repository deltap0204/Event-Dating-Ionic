import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';

export const CREATE_MESSAGE_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextAreaInputModel('message', undefined, 'Type a message', 3)
        .addValidator('REQUIRED')
        .build()
];
