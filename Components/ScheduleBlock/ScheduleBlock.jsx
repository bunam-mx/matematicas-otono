import November7th from "./November7th";
import November8th from "./November8th";
import "./ScheduleBlock.css";

function ScheduleBlock() {
  return (
    <section className="schedule">
      <h2>Programa</h2>
      <November7th />
      <November8th />
    </section>
  );
}

export default ScheduleBlock;
