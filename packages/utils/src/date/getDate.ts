import cloneDeep from 'lodash.clonedeep';
import { getString as getStringA } from '~/getString';
import { getString as getStringB } from '@packages/utils/getString';

export const getDate = () => cloneDeep(new Date().toString());

export const getDateStringA = () => `${getDate()} ${getStringA()}`;

export const getDateStringB = () => `${getDate()} ${getStringB()}`;
