export class UserConstants {

    public static USERS_ENDPOINT = 'users';

    public static COGNITO_ERROR_STATUS_CODES = {
        USER_NOT_CONFIRMED_EXCEPTION: 'UserNotConfirmedException',
        USER_NOT_FOUND_EXCEPTION: 'UserNotFoundException',
        NOT_AUTHORIZED_EXCEPTION: 'NotAuthorizedException',
        PASSWORD_REST_REQUIRED_EXCEPTION: 'PasswordResetRequiredException'
    };

    public static USER_PROFILE_GENDER = {
        'MALE': 'MALE',
        'FEMALE': 'FEMALE'
    };

    public static USER_PROFILE_ENTRY_NAME = {
        'WORK': 'WORK',
        'JOB_TITLE': 'JOB_TITLE',
        'SCHOOL': 'SCHOOL',
        'EDUCATION_LEVEL': 'EDUCATION_LEVEL',
        'RELIGIOUS_BELIEFS': 'RELIGIOUS_BELIEFS',
        'POLITICS': 'POLITICS',
        'NAME': 'NAME',
        'GENDER': 'GENDER',
        'AGE': 'AGE',
        'HEIGHT': 'HEIGHT',
        'KIDS': 'KIDS',
        'FAMILY_PLANS': 'FAMILY_PLANS',
        'DRINKING': 'DRINKING',
        'SMOKING': 'SMOKING',
        'MARIJUANA': 'MARIJUANA',
        'DRUGS': 'DRUGS',
        'LOCATION': 'LOCATION'
    };

    public static PROFILE_ENTRY_NAME_TO_HUMAN_READABLE = {
        [UserConstants.USER_PROFILE_ENTRY_NAME.WORK]: 'Work',
        [UserConstants.USER_PROFILE_ENTRY_NAME.JOB_TITLE]: 'Job Title',
        [UserConstants.USER_PROFILE_ENTRY_NAME.SCHOOL]: 'School',
        [UserConstants.USER_PROFILE_ENTRY_NAME.EDUCATION_LEVEL]: 'Education Level',
        [UserConstants.USER_PROFILE_ENTRY_NAME.RELIGIOUS_BELIEFS]: 'Religious Beliefs',
        [UserConstants.USER_PROFILE_ENTRY_NAME.POLITICS]: 'Politics',
        [UserConstants.USER_PROFILE_ENTRY_NAME.NAME]: 'Name',
        [UserConstants.USER_PROFILE_ENTRY_NAME.GENDER]: 'Gender',
        [UserConstants.USER_PROFILE_ENTRY_NAME.AGE]: 'Age',
        [UserConstants.USER_PROFILE_ENTRY_NAME.HEIGHT]: 'Height',
        [UserConstants.USER_PROFILE_ENTRY_NAME.KIDS]: 'Kids',
        [UserConstants.USER_PROFILE_ENTRY_NAME.FAMILY_PLANS]: 'Family Plans',
        [UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING]: 'Drinking',
        [UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING]: 'Smoking',
        [UserConstants.USER_PROFILE_ENTRY_NAME.MARIJUANA]: 'Marijuana',
        [UserConstants.USER_PROFILE_ENTRY_NAME.DRUGS]: 'Drugs',
        [UserConstants.USER_PROFILE_ENTRY_NAME.LOCATION]: 'Location',
    };


    public static PROFILE_ENTRY_NAME_TO_ICON = {
        [UserConstants.USER_PROFILE_ENTRY_NAME.AGE]: 'birthday-cake',
        [UserConstants.USER_PROFILE_ENTRY_NAME.GENDER]: 'venus-double',
        [UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING]: 'glass-martini',
        [UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING]: 'smoking',
        [UserConstants.USER_PROFILE_ENTRY_NAME.WORK]: 'suitcase',
    };

    public static GENDER_TO_ICON = {
        [UserConstants.USER_PROFILE_GENDER.MALE]: 'male',
        [UserConstants.USER_PROFILE_GENDER.FEMALE]: 'FEMALE',
    };


}
