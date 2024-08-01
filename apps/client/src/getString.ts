export { getString as uiGetString, getUserName as uiGetUserName, utilsGetString, utilsGetUserName } from '@packages/ui/getString';

import userExample from '~~/examples/user.json';

export const getString = () => '<client-app>' as const;

export const getUserName = () => userExample.value.name;
