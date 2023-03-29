

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

  const buildMainTrackerColumns = () => {
    const cells = []
    for (let i = 0; i < 52; i++) {
      cells.push(<td class="tracker-cell no-activity"></td>)
    }

    return cells
  }

  return (
    <section>
      <h2>Practice Tracking</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
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