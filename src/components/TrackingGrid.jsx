import '../styling/tracking-grid.scss'
import Calendar from 'react-github-contribution-calendar'

import activityChartData from '../tempData/activityChartData';
import unifiedData from '../tempData/unifiedData';
import { useEffect } from 'react';

const TrackingGrid = () => {

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const until = `${year}-${month}-${day}`

  const panelColors = ['#f2f2f2ec','#a0dbeb', '#61c3de', '#4e9cb2']

  const formattedGridData = {}

  useEffect(() => {
    
  })

  return (
    <section className="activity-tracking">
      <h2>Activity Tracking</h2>
      <Calendar values={activityChartData} until={until} panelColors={panelColors} />
      <div className="activity-tracking__key">
        <span className="activity-tracking__level-key">Less</span>
        <div className="activity-tracking__level activity-tracking__level-1"></div>
        <div className="activity-tracking__level activity-tracking__level-2"></div>
        <div className="activity-tracking__level activity-tracking__level-3"></div>
        <div className="activity-tracking__level activity-tracking__level-4"></div>
        <span className="activity-tracking__level-key">More</span>
      </div>
    </section>
  )
};

export default TrackingGrid;