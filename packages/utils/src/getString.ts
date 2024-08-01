import cloneDeep from 'lodash.clonedeep';
import userExample from '@root/examples/user.json';

export const getString = () => cloneDeep('<@packages/utils>' as const);

export const getUserName = () => userExample.value.name;
