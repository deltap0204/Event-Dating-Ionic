import {Component, Injector} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {Events, Users} from '@core/core.models';
import {ChatsUserAccountsToOtherAccountPipe} from '@chat/chat.pipe';
import Event = Events.Event;
import UserAccount = Users.UserAccount;

@Component({
  selector: 'events-create-event-invite-modal-content',
  templateUrl: './events-create-event-invite-modal-content.component.html',
  styleUrls: ['./events-create-event-invite-modal-content.component.scss'],
})
export class EventsCreateEventInviteModalContentComponent extends BaseModalContentComponent {

  event: Event;
  selected_accounts: UserAccount[] = [];

  chats_user_accounts_to_other_account_pipe = new ChatsUserAccountsToOtherAccountPipe();

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  addAccount(account: UserAccount) {
    // TODO: add remove too
    this.selected_accounts = this.selected_accounts.concat(account);
  }

}
