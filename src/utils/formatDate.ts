/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import pt from 'date-fns/locale/pt-BR'; //

const formatDate = (date: string): string =>
  format(parseISO(date), 'P', {
    locale: pt,
  });

export default formatDate;
