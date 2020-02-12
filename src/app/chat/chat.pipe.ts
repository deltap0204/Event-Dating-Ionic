import {Pipe, PipeTransform} from '@angular/core';
import {Chats, Users} from '@core/core.models';
import UserChat = Chats.UserChat;
import UserAccount = Users.UserAccount;

@Pipe({
    name: 'chatsUserAccountsToOtherAccount'
})
export class ChatsUserAccountsToOtherAccountPipe implements PipeTransform {

    transform(value: UserChat, account: UserAccount, ...args: any[]): UserAccount {
        return value.userAccounts.find(user_account => account._id !== user_account._id);
    }

}

@Pipe({
    name: 'chatsUserAccountsToSameAccount'
})
export class ChatsUserAccountsToSameAccountPipe implements PipeTransform {

    transform(value: UserChat, account: UserAccount, ...args: any[]): UserAccount {
        return value.userAccounts.find(user_account => account._id === user_account._id);
    }

}
