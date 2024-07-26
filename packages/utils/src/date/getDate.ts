import cloneDeep from 'lodash.clonedeep';
import { getString as getStringA } from '~/getString';
import { getString as getStringB } from '@packages/utils/src/getString';

export const getDate = () => cloneDeep(new Date().toString());

export const getDateStringA = () => `${getDate()} ${getStringA()}`;

export const getDateStringB = () => `${getDate()} ${getStringB()}`;
