export { getString as utilsGetString, getUserName as utilsGetUserName } from '@packages/utils/getString';

import userExample from '@root/examples/user.json';

export const getString = () => '<@packages/ui>' as const;

export const getUserName = () => userExample.value.name;
