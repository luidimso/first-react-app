import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximum = Math.max(...dataValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maximum} label={dataPoint.label}></ChartBar>)
            }
        </div>
    );
}

export default Chart;