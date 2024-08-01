export { getString as uiGetString, getUserName as uiGetUserName, utilsGetString, utilsGetUserName } from '@packages/ui/getString';

import userExample from '@root/examples/user.json';

export const getString = () => '<client-app>' as const;

export const getUserName = () => userExample.value.name;
