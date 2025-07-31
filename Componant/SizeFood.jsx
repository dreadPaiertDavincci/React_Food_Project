import "../src/Style/SizeFood.css";
function SizeFood() {
  return (
    <div className="tabs">
      <div className="tab-group">
        <input defaultChecked id="tab1" name="tab" value="S" type="radio" />
        <label htmlFor="tab1">
          <span>S</span>
        </label>
      </div>
      <div className="tab-group">
        <input id="tab2" name="tab" value="M" type="radio" />
        <label htmlFor="tab2">
          <span>M</span>
        </label>
      </div>
      <div className="tab-group">
        <input id="tab3" name="tab" value="L" type="radio" />
        <label htmlFor="tab3">
          <span>L</span>
        </label>
      </div>
      <div className="tab-group">
        <input id="tab4" name="tab" value="XL" type="radio" />
        <label htmlFor="tab4">
          <span>XL</span>
        </label>
      </div>
    </div>
  );
}

export default SizeFood;
