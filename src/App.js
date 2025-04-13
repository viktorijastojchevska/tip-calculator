import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const totalTip = bill * ((tip + friendTip) / 2 / 100);
  console.log(friendTip);
  return (
    <div>
      <Bill children="How much was the bill?" bill={bill} setBill={setBill} />
      <Tip children="How did you like the srvice?" tip={tip} setTip={setTip} />
      <Tip
        children="How did your friend like the service?"
        tip={friendTip}
        setTip={setFriendTip}
      />
      <Output bill={bill} totalTip={totalTip} />
      <ResetButton
        setBill={setBill}
        setTip={setTip}
        setFriendTip={setFriendTip}
      />
    </div>
  );
}

function Bill({ children, setBill, bill }) {
  return (
    <div>
      <p>{children}</p>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
        placeholder="Insert bill value"
      />
    </div>
  );
}

function Tip({ children, tip, setTip }) {
  return (
    <div>
      <p>{children}</p>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip, totalTip }) {
  return (
    <h3>
      You pay ${bill + totalTip} ($ {bill === "" ? 0 : bill} + $ {totalTip})
    </h3>
  );
}

function ResetButton({ setBill, setTip, setFriendTip }) {
  function handleReset() {
    setBill("");
    setTip(0);
    setFriendTip(0);
  }
  return <button onClick={handleReset}>Reset</button>;
}

export default App;
