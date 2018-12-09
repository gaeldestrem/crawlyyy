/* @flow */
import { useContext } from 'react';
import type { Location, RouterHistory, Match } from 'react-router-dom';
import { __RouterContext } from 'react-router';

/*
 * TODO: replace as soon as https://github.com/ReactTraining/react-router/pull/6453
 * gets merged.
 */

function useRouter(): {
  location: Location,
  history: RouterHistory,
  match: Match
} {
  return useContext(__RouterContext);
}

export default useRouter;
