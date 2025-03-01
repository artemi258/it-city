import { API } from '@shared';
import { IPopup } from '..';

export const postQuestion = (data: IPopup): Promise<void> => API.mail.question(data);
