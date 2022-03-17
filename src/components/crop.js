import JsonData from "./test.json";
import checkData from "./requirements.json";
const Apple = (props) => {
  let cropnmm = props.cropname;
  console.log(cropnmm);
  var datx = checkData[0][cropnmm][0];
  console.log(datx.moisture[0].max);

  const DisplayData = JsonData.map((info) => {
    var score = 0;
    return (
      <>
        {info.cropname == props.cropname ? (
          <tr>
            <td>{info.cropid}</td>
            <td>{}</td>
            {info.ph > datx.ph[0].max ? (
              <td className="danger">{info.ph}</td>
            ) : info.ph < datx.ph[0].min ? (
              <td className="danger">{info.ph}</td>
            ) : (
              ((score = score + 1), (<td className="success">{info.ph}</td>))
            )}
            {info.height > datx.height[0].max ? (
              <td className="danger">{info.height}</td>
            ) : info.height < datx.height[0].min ? (
              <td className="danger">{info.height}</td>
            ) : (
              ((score = score + 1),
              (<td className="success">{info.height}</td>))
            )}

            {info.moisture > datx.moisture[0].max ? (
              <td className="danger">{info.moisture}</td>
            ) : info.moisture < datx.moisture[0].min ? (
              <td className="danger">{info.moisture}</td>
            ) : (
              <td className="success">{info.moisture}</td>
            )}
            {info.temperature > datx.temperature[0].max ? (
              <td className="danger">{info.temperature}</td>
            ) : info.temperature < datx.temperature[0].min ? (
              <td className="danger">{info.temperature}</td>
            ) : (
              ((score = score + 1),
              (<td className="success">{info.temperature}</td>))
            )}

            {datx.location.includes(info.location) ? (
              ((score = score + 1),
              (<td className="success">{info.location}</td>))
            ) : (
              <td className="danger">{info.location}</td>
            )}

            {score >= 4 ? (
              (console.log(score),
              (
                <td>
                  <button>Send Harvest Request</button>
                </td>
              ))
            ) : (
              <td>
                <button>Send Recommendation</button>
              </td>
            )}
          </tr>
        ) : (
          ""
        )}
      </>
    );
  });
  return (
    <>
      <div className="area1x" style={{ width: "max-content" }}>
        <div className="dashboard-box">
          <div className="boxheader">
            <div className="boxvalue">Overall {props.cropname} Data</div>
            <div className="boxname">This is a list of latest Crop data</div>
            <div className="refresh-anonpe">
              <button className="">Refresh</button>
            </div>
            <table class="table-anonpe-purchases">
              <thead>
                <tr>
                  <th>Crop Id</th>
                  <th>Date/Time</th>
                  <th>pH of Soil</th>
                  <th>Height (in cm)</th>

                  <th>Moisture</th>
                  <th>Temperature</th>
                  <th>Location</th>
                  <th>Recommendation</th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apple;
