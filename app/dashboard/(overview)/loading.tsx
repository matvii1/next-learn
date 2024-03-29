import DashboardSkeleton from '@/app/ui/skeletons';
import { FC } from 'react';

type loadingProps = {};

const Loading: FC<loadingProps> = ({}) => {
  return <DashboardSkeleton />;
};

export default Loading;
