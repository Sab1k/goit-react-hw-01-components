const StatisticItem = stats => {
  return (
    <>
      <span>{stats.label}</span>
      <span>{stats.percentage} %</span>
    </>
  );
};

export default StatisticItem;
