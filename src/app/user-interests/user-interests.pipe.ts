import {Pipe, PipeTransform} from '@angular/core';
import {Core, UserInterests, Users} from '@core/core.models';
import * as _lodash from 'lodash';
import UserInterest = UserInterests.UserInterest;
import CoreEntity = Core.CoreEntity;
import UserAccount = Users.UserAccount;

@Pipe({
    name: 'userInterests'
})
export class UserInterestsPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        return null;
    }

}

@Pipe({
    name: 'userInterestsFilterUserInterestByEntityAndInterest'
})
export class UserInterestsFilterUserInterestByEntityPipe implements PipeTransform {

    transform(value: UserInterest[], entity: CoreEntity, entityType: string, ...args: any[]): UserInterest[] {
        return value.filter(user_interest => {
            const currentEntity = getUserInterestEntity(user_interest, entityType);
            return user_interest.entityType === entityType && entity._id === currentEntity._id;
        });
    }
}

@Pipe({
    name: 'userInterestsFilterUserInterestByInteraction'
})
export class UserInterestsFilterUserInterestByInteractionPipe implements PipeTransform {

    transform(value: UserInterest[], interaction: string, ...args: any[]): UserInterest[] {
        return value.filter(user_interest => {
            return user_interest.interaction === interaction;
        });
    }
}

@Pipe({
    name: 'userInterestsRemoveUserInterestFromArray'
})
export class UserInterestsRemoveUserInterestFromArrayPipe implements PipeTransform {

    transform(removeValues: UserInterest[], allValues: UserInterest[], ...args: any[]): UserInterest[] {
        return _lodash.differenceWith(allValues, removeValues, (a, b) => a._id === b._id);
    }
}

@Pipe({
    name: 'userInterestsRemoveUserInterestByAccount'
})
export class UserInterestsRemoveUserInterestByAccountPipe implements PipeTransform {

    transform(value: UserInterest[], account: UserAccount, ...args: any[]): UserInterest[] {
        return value.filter(user_interest => {
            return user_interest.userAccount._id !== account._id;
        });
    }
}

export function getUserInterestEntity(userInterest: UserInterest, entityType: string): CoreEntity {
    switch (entityType) {
        case 'EVENT':
            return userInterest.event;
        case 'USER_ACCOUNT':
            return userInterest.otherAccount;
        default:
            throw new Error('Unknown entity type ' + entityType);
    }
}
