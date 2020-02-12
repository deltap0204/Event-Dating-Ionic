import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {CommonsService} from '@core/commons.service';
import {concatMap, map} from 'rxjs/operators';
import {ChatRequests, UserChatAndOtherProfile} from '@chat/chat.models';
import GetUserChatsByDialogId = ChatRequests.GetUserChatsByDialogId;
import {ChatService} from '@chat/chat.service';
import {Chats, Users} from '@core/core.models';
import UserChat = Chats.UserChat;
import {UsersService} from '@users/users.service';
import {ChatsUserAccountsToOtherAccountPipe} from '@chat/chat.pipe';
import {AuthService} from '@core/auth.service';
import {UserRequests} from '@users/users.models';
import GetUserProfileByUser = UserRequests.GetUserProfileByUser;
import UserProfile = Users.UserProfile;

@Injectable()
export class ChatUserChatByDialogIdResolver implements Resolve<Observable<UserChat>> {

    constructor(private chatService: ChatService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetUserChatsByDialogId.Request();
        request.dialogId = route.paramMap.get('dialogId');
        return this.chatService.getUserChatsByDialogId(request)
            .pipe(CommonsService.deserializeMap(UserChat), map(success => success[0]));
    }
}

@Injectable()
export class ChatUserChatByDialogIdAndOtherProfileResolver implements Resolve<Observable<UserChatAndOtherProfile>> {

    pipe = new ChatsUserAccountsToOtherAccountPipe();

    constructor(private usersService: UsersService, private authService: AuthService,
                private userChatByDialogIdResolver: ChatUserChatByDialogIdResolver) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userChatByDialogIdResolver.resolve(route).pipe(concatMap(user_chat_response => {
            const user_chat = <UserChat>user_chat_response;
            const other_account = this.pipe.transform(user_chat, this.authService.userProfile.userAccount);
            const request = new GetUserProfileByUser.Request();
            request.user = other_account._id;
            return this.usersService.getUserProfileByUser(request)
                .pipe(CommonsService.deserializeMap(UserProfile), map((response: UserProfile) => {
                    const user_chat_other_profile = new UserChatAndOtherProfile();
                    user_chat_other_profile.userChat = user_chat;
                    user_chat_other_profile.otherProfile = response;
                    return user_chat_other_profile;
                }));
        }));
    }
}
