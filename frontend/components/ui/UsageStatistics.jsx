"use client";

import { CountUp } from "countup.js";
import { useEffect, useState } from "react";

export default function UsageStatistics() {
  const [countUpData, setCountUpData] = useState({});

  const fetchData = () => {
    // Format: <id of the container>: <count in integer>
    setCountUpData({
      "paying-customers": 500000,
      "monhly-qr-created": 256000000,
      "monthly-connections": 10000000000,
      "app-integrations": 800,
    });
  };

  const abbrNum = (number, decPlaces = 1) => {
    decPlaces = Math.pow(10, decPlaces);

    var abbrev = ["k", "m", "b", "t"];

    for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3);

      if (size <= number) {
        number = Math.round((number * decPlaces) / size) / decPlaces;

        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }

        number += abbrev[i];

        break;
      }
    }

    return number;
  };

  const countUpAnimation = (id, inputVal) => {
    let count;
    let suffix;

    if (typeof inputVal === "number") {
      suffix = "";
      count = inputVal;
    } else {
      count = parseInt(inputVal.split("").slice(0, -1).join(""));
      suffix = inputVal.split("").slice(-1);
    }

    const options = {
      duration: 1.5,
      suffix: `${suffix}`.toUpperCase(),
      enableScrollSpy: true,
      scrollSpyOnce: true,
    };

    let countupObj = new CountUp(id, count, options);

    if (!countupObj.error) {
      countupObj.start();
    } else {
      console.error(countupObj.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(countUpData).length > 0) {
      Object.keys(countUpData).map((targetId) => {
        countUpAnimation(targetId, abbrNum(countUpData[targetId]));
      });
    }
  }, [countUpData]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold" id="paying-customers"></h2>
        <p>global paying customers</p>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold" id="monhly-qr-created"></h2>
        <p>links & QR Codes created monthly</p>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold" id="monthly-connections"></h2>
        <p>connections (clicks & scans) monthly</p>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold inline" id="app-integrations"></h2>
        <h2 className="text-3xl font-bold inline">+</h2>
        <p>app integrations</p>
      </div>
    </div>
  );
}
