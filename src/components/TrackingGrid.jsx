import '../styling/tracking-grid.scss'

const TrackingGrid = () => {

// Want to track: 
// 1. exercise
// 2. range session
// 3. short game practice
// 4. putting practice
// 5. round played

  const buildTrackerRow = () => {
    const rows = []
    for (let i = 0; i < 7; i++) {
      rows.push(<tr class="tracker-row">{buildMainTrackerColumns()}</tr>)
    }

    return rows
  }

  // temporary function to simulate activity. Will need to be removed when actual data exists
  const activityGenerator = () => {
    const min = 0;
    const max = 5;
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return `activity-level-${randNum}`
  }

  const buildMainTrackerColumns = () => {
    const cells = []

    for (let i = 0; i < 52; i++) {
      cells.push(<td className={`daily-tracking-cell daily-tracking-cell-${activityGenerator()}`}></td>)
    }

    return cells
  }

  return (
    <section className="daily-tracking" >
      <h2>Practice Tracking</h2>
    <table className='daily-tracking__grid'>
      <thead>
        {/* these will need to be dynamic based on the number of days in the month and what day of the week the year started on */}
        <tr>
          <th className="daily-tracking__header-cell"><span className="daily-tracking__header-day">Day</span></th>
          <th className="daily-tracking__header-cell" colspan="4">Jan</th>
          <th className="daily-tracking__header-cell" colspan="4">Feb</th>
          <th className="daily-tracking__header-cell" colspan="4">Mar</th>
          <th className="daily-tracking__header-cell" colspan="4">Apr</th>
          <th className="daily-tracking__header-cell" colspan="4">May</th>
          <th className="daily-tracking__header-cell" colspan="4">Jun</th>
          <th className="daily-tracking__header-cell" colspan="4">Jul</th>
          <th className="daily-tracking__header-cell" colspan="4">Aug</th>
          <th className="daily-tracking__header-cell" colspan="4">Sep</th>
          <th className="daily-tracking__header-cell" colspan="4">Oct</th>
          <th className="daily-tracking__header-cell" colspan="4">Nov</th>
          <th className="daily-tracking__header-cell" colspan="4">Dec</th>
        </tr>
      </thead>
      <tbody>
        {buildTrackerRow()}
      </tbody>
    </table>
    </section>
  );
};

export default TrackingGrid;