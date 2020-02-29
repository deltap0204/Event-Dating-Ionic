import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {UserConstants} from '@users/users.constants';

export const USER_COGNITO_SIGN_IN_FORM_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextInputModel('user_name', '', undefined, 'Phone Number')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel('password', '', undefined, 'Password', 'password')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),
];

export const USER_COGNITO_SIGN_IN_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-1 mb-1 h-3 font-primary-dark placeholder-dark',
        }
    },
    'password': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-1 mb-1 h-3 font-primary-dark placeholder-dark',
        }
    },
};

export const USER_COGNITO_SIGNUP_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'email': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
    'password': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};

export function getUserCognitoSignupFormModel(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('user_name', '', undefined, 'Mobile Number')
            .addValidatorAndErrorMessage('MOBILE_VALIDATOR')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('email', '', undefined, 'E-mail')
            .addValidatorAndErrorMessage('EMAIL_VALIDATOR')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('password', '', undefined, 'Create Password', 'password')
            .addValidatorAndErrorMessage('PASSWORD_VALIDATOR')
            .build(),
    ];
}

export const USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT = {
    'token': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    }
};

export const USER_REGISTER_OTP_VERIFICATION_FORM_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextInputModel('token', '', undefined, 'Verification Code')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),

];

export const USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextInputModel('user_name', '', undefined, 'Email')
        .addValidatorAndErrorMessage('EMAIL_VALIDATOR')
        .build(),
];

export const USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};

export const USER_PROFILE_CREATE_OR_UPDATE: DynamicFormControlModel[] = [
    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.NAME, '', undefined, 'Name')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.WORK, '', undefined, 'I Work at')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.JOB_TITLE, '', undefined, 'I Work at')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.SCHOOL, '', undefined, 'I Work at')
        .build(),

    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.AGE, '', undefined, 'Age')
        .build(),
    new DynamicInputModelBuilder()
        .getTextInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.HEIGHT, '', undefined, 'Height')
        .build(),

    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.GENDER, 'Gender', [
            {label: 'Male', value: 'MALE'},
            {label: 'Female', value: 'FEMALE'},
        ], 'MALE')
        .build(),

    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.KIDS, 'Kids', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.FAMILY_PLANS, 'Family', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING, 'Drinking', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
            {label: 'Sometimes', value: 'SOMETIMES'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING, 'Smoking', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
            {label: 'Sometimes', value: 'SOMETIMES'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.MARIJUANA, 'Marijuana', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
            {label: 'Sometimes', value: 'SOMETIMES'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.DRUGS, 'Drugs', [
            {label: 'Yes', value: 'YES'},
            {label: 'No', value: 'NO'},
            {label: 'Sometimes', value: 'SOMETIMES'},
        ], 'NO')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.RELIGIOUS_BELIEFS, 'Relegious Beliefs', [
            {label: 'Atheist', value: 'ATHEIST'},
            {label: 'Agnostic', value: 'AGNOSTIC'},
            {label: 'Buddhist', value: 'BUDDHIST'},
            {label: 'Catholic', value: 'CATHOLIC'},
            {label: 'Christian', value: 'CHRISTIAN'},
            {label: 'Hindu', value: 'HINDU'},
            {label: 'Jewish', value: 'JEWISH'},
            {label: 'Muslim', value: 'MUSLIM'},
            {label: 'Spiritual', value: 'SPIRITUAL'},
            {label: 'Other', value: 'OTHER'},
        ], 'CATHOLIC')
        .build(),
    new DynamicInputModelBuilder()
        .getRadioGroupInputModel(UserConstants.USER_PROFILE_ENTRY_NAME.EDUCATION_LEVEL, 'Education Level', [
            {label: 'HIGH SCHOOL', value: 'HIGH_SCHOOL'},
            {label: 'UNDERGRAD', value: 'UNDERGRAD'},
            {label: 'POSTGRAD', value: 'POSTGRAD'},
            {label: 'PREFER NOT TO SAY', value: 'PREFER_NOT_TO_SAY'},
        ], 'UNDERGRAD')
        .build(),
];
