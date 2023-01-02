import AppChart from "./AppChart";
import { useLoadStatisticQuery } from "../store/services/Files";
import { numToSize, percentToFixed } from "../helpers/numbers";
import { useEffect, useState } from "react";

/**
 * This is the AppStatistic component.
 */

const AppStatistic = () => {
  const { data, isSuccess } = useLoadStatisticQuery();
  const [used, setUsed] = useState(0);
  const [dataset, setDataset] = useState<Array<number>>([]);

  /**
   * Monitor statistic data and update render
   */
  useEffect(() => {
    if (!data) return;

    setUsed(
      data.statistic.useImages +
        data.statistic.useDocuments +
        data.statistic.useOther
    );

    setDataset([
      data.statistic.useImages,
      data.statistic.useDocuments,
      data.statistic.useOther,
      data.statistic.disk - used,
    ]);
  }, [data]);

  /**
   * The function calculate fixed percent
   *
   * @param value
   * @param full
   */
  const percent = (value: number, full: number): string => {
    return percentToFixed((value / full) * 100);
  };

  return (
    <aside className="statistic">
      {isSuccess && (
        <>
          <h2 className="statistic__header">Statistic</h2>
          <div className="chart">
            <AppChart data={dataset} />

            <div className="chart__legend">
              <div className="chart__percent">
                {percent(used, data.statistic.disk)}%
              </div>
              <div className="chart__used">Used storage</div>
            </div>
          </div>

          <div className="labels">
            <div className="labels__item">
              <div
                className="labels__color"
                style={{ backgroundColor: "#0f8ce9" }}
              ></div>
              <div>
                <div className="labels__name">Images</div>
                <div className="labels__percent">
                  {percent(data.statistic.useImages, data.statistic.disk)}%
                </div>
              </div>
            </div>

            <div className="labels__item">
              <div
                className="labels__color"
                style={{ backgroundColor: "#1c35b4" }}
              ></div>
              <div>
                <div className="labels__name">Document</div>
                <div className="labels__percent">
                  {percent(data.statistic.useDocuments, data.statistic.disk)}%
                </div>
              </div>
            </div>

            <div className="labels__item">
              <div
                className="labels__color"
                style={{ backgroundColor: "#feb101" }}
              ></div>
              <div>
                <div className="labels__name">Other</div>
                <div className="labels__percent">
                  {percent(data.statistic.useOther, data.statistic.disk)}%
                </div>
              </div>
            </div>

            <div className="labels__item">
              <div
                className="labels__color"
                style={{ backgroundColor: "#eeeeee" }}
              ></div>
              <div>
                <div className="labels__name">Free</div>
                <div className="labels__percent">
                  {percent(data.statistic.free, data.statistic.disk)}%
                </div>
              </div>
            </div>
          </div>

          <div className="store">
            <p>
              Free space: {numToSize(used)} of {numToSize(data.statistic.disk)}{" "}
              used
            </p>

            <div className="timeline">
              <div className="timeline__path"></div>
              <div
                className="timeline__line"
                style={{ width: percent(used, data.statistic.disk) + "%" }}
              ></div>
            </div>
          </div>

          <a href="#" className="btn">
            +1 TB for 50$
          </a>
        </>
      )}
    </aside>
  );
};

export default AppStatistic;
