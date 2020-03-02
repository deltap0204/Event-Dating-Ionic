import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {CommonsService} from '@core/commons.service';

export const EVENTS_CREATE_EVENT_FORM_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextInputModel('event_name', '', undefined, 'What do you want to do or Activty Name')
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel('event_description', '', undefined, 'Describe what you want to do')
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel('location', '', undefined, 'Location')
       // .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),    
    new DynamicInputModelBuilder().getRadioGroupInputModel('event_type', '', [
        {label: 'Event Brite', value: 'EVENT_BRITE'},
        {label: 'ACTIVITY', value: 'ACTIVITY'}
    ]).build(),
    new DynamicInputModelBuilder().getDateInputModel('event_start_time', '',
        CommonsService.getDateStringFromMoment(CommonsService.getCurrentTimeAsMoment()),
        CommonsService.getDateStringFromMoment(CommonsService.getCurrentTimeAsMoment()))
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new DynamicInputModelBuilder().getDateInputModel('event_end_time', '',
        CommonsService.getDateStringFromMoment(CommonsService.getCurrentTimeAsMoment()),
        CommonsService.getDateStringFromMoment(CommonsService.getCurrentTimeAsMoment()))
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),

];

export const EVENTS_CREATE_EVENT_FORM_LAYOUT = {
    'event_name': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'event_description': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'location': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'event_start_time': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
    'event_end_time': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};
