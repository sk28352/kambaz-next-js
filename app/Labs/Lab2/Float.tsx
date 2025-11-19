export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>

      {/* Figure 2.1.17.a - Images + text wrapping */}
      <div>
        <img
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        {/* Add more lorem ipsum to see the text flow */}

        <img
          className="wd-float-left"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        More lorem ipsum text flowing around the image on the left side...

        <div className="wd-float-done"></div>
      </div>

      <br />

      {/* Figure 2.1.17.b - Horizontal floating divs */}
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img
          className="wd-float-right"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <div className="wd-float-done"></div>
      </div>
    </div>
  );
}
