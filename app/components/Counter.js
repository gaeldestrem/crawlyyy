// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from './common/hooks/useRouter';
import routes from './common/constants/routes';

export default () => {
  console.log(useRouter());

  return <Link to={routes.HOME}>counter</Link>

}
