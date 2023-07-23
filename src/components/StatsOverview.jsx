import { Radio } from 'antd';
import { useState } from 'react';
import '../styling/stats_overview.scss';

const StatsOverview = () => {

    const [duration, setDuration] = useState('3mon');

    const options = [
        {
            label: '1 Mo.',
            value: '1mon',
        },
        {
            label: '3 Mo.',
            value: '3mon',
        },
        {
            label: 'YTD',
            value: 'ytd',
        },
        {
            label: 'Last Year',
            value: 'lastYear',
        }
    ];

    const onDurationChange = ({ target: { value } }) => {
        setDuration(value);
    }

    return (
        <>
            <div className="stats-overview__duration">
                <Radio.Group
                    options={options}
                    onChange={onDurationChange}
                    value={duration}
                    optionType="button"
                    size='middle'
                />
            </div>
            <div className="stats-overview__card-section">
                {
                    duration === '1mon' ? <span>One Month</span> : null
                }
                {
                    duration === '3mon' ? <span>Three Month</span> : null
                }
                {
                    duration === 'ytd' ? <span>Year to Date</span> : null
                }
                {
                    duration === 'lastYear' ? <span>Last Year</span> : null
                }
            </div>
        </>
    )
}

export default StatsOverview
