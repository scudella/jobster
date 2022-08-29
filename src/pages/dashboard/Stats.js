import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatsContainer, ChartsContainer } from '../../components';
import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  const { monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
