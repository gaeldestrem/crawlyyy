// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from './common/hooks/useRouter';
import routes from './common/constants/routes';

export default function Home() {
  const routesInfo = useRouter();

  console.log(routesInfo);

  return <Link to={routes.COUNTER}>homeee</Link>
}
