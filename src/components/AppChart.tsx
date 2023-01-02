import { Chart } from "../module/chart";
import { useEffect, useRef } from "react";

/**
 * This is the AppChart component.
 *
 * @property data - The dataset array for the chart.
 */

type Props = {
  data: Array<number>;
};

const AppChart = ({ data }: Props) => {
  let chart: Chart;
  const colors = ["#0f8ce9", "#1c35b4", "#feb101", "#eeeeee"];
  const canvas = useRef<HTMLCanvasElement>(null);

  /**
   * Monitor data and create or update chart
   */
  useEffect(() => {
    if (chart) {
      chart.update(data);
    } else {
      if (canvas.current) {
        chart = new Chart(canvas.current, {
          dataset: data,
          colors: colors,
          width: 40,
        });
      }
    }
  }, [data]);

  return <canvas ref={canvas} width="520" height="520"></canvas>;
};

export default AppChart;
