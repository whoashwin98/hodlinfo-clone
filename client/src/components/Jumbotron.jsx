import React from "react";

const Jumbotron = () => {
  return (
    <div
      class="d-flex justify-content-around align-items-center average-header"
      style={{ padding: "10px 0px" }}
    >
      <div class="text-center">
        <div class="average-header-maintext color-green">0.58 %</div>
        <div class="average-header-subHeading">5 Mins</div>
      </div>
      <div class="text-center">
        <div class="average-header-maintext color-green">1.36 %</div>
        <div class="average-header-subHeading">1 Hour</div>
      </div>
      <div style={{ maxWidth: "40%" }}>
        <div class="text-center font-32 average-block">
          <div class="average-subText">
            <span class="h2">Best Price to Trade</span>
          </div>
          <div class="average-heading" style={{ paddingBottom: "10px" }}>
            ₹ 24,42,259
          </div>
          <div class="average-subText">
            Average BTC/INR net price including commission
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="average-header-maintext color-green">3.72 %</div>
        <div class="average-header-subHeading">1 Day</div>
      </div>
      <div class="text-center">
        <div class="average-header-maintext color-green">7.06 %</div>
        <div class="average-header-subHeading">7 Days</div>
      </div>
    </div>
  );
};

export default Jumbotron;
