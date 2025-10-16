import './Classes.css';

export default function Classes() {
  const color = 'blue';
  const dangerous = true; // try toggling this between true and false

  return (
    <div id="wd-classes">
      <h2>Classes</h2>

      {/* Static classes */}
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>

      <hr />

      {/* Dynamic class using variable */}
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic {color} background
      </div>

      {/* Conditional class using ternary operator */}
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>

      <hr />
    </div>
  );
}
