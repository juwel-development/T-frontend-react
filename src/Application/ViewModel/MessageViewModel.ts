import { en_US } from '../../Presentation/Translation/Resources/en_US';

export enum MessageType {
    Error = 'Error',
    Warning = 'Warning',
}

export class MessageViewModel {
    public Titel: keyof typeof en_US = 'ERROR_GENERAL_TITLE';
    public Message: keyof typeof en_US = 'ERROR_GENERAL_MESSAGE';
    public Type: MessageType = MessageType.Error;

    public static get Factory(): MessageViewModelFactory {
        return new MessageViewModelFactory();
    }
}

class MessageViewModelFactory {
    private readonly messageViewModel: MessageViewModel = new MessageViewModel();

    public get Model(): MessageViewModel {
        return this.messageViewModel;
    }

    public setTitle(title: keyof typeof en_US): MessageViewModelFactory {
        this.messageViewModel.Titel = title;
        return this;
    }

    public setMessage(message: keyof typeof en_US): MessageViewModelFactory {
        this.messageViewModel.Message = message;
        return this;
    }

    public setType(type: MessageType): MessageViewModelFactory {
        this.messageViewModel.Type = type;
        return this;
    }
}