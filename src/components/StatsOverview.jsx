import { Radio } from 'antd';
import { useState } from 'react';
import '../styling/stats_overview.scss';

const StatsOverview = () => {

    const [value3, setValue3] = useState('3 Mon');

    const options = [
        {
            label: '1 Mon',
            value: '1 Mon',
        },
        {
            label: '3 Mon',
            value: '3 Mon',
        },
        {
            label: 'YTD',
            value: 'YTD',
        },
        {
            label: 'Last Year',
            value: 'Last Year',
        }
    ];

    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    }

    return (
        <>
            <div className="stats-overview__duration">
                <Radio.Group
                    options={options}
                    onChange={onChange3}
                    value={value3}
                    optionType="button"
                    size='middle'
                    styles={{border: 'red'}}
                />
            </div>
        </>
    )
}

export default StatsOverview
