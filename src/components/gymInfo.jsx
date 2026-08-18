import Button from "./button";

function GymInfo() {
    const gymName = "FitZone Gym";
  const owner = "Aakash";
  const totalMember = "150";
    return (
        <div>
            <h1>{gymName}</h1>
            <p>Owner: {owner}</p>
            <p>Total Member: {totalMember}</p>
            <input type="text" placeholder="Enter gym name"  ></input>
            <Button text="Login" />
        </div>
    )

}

export default GymInfo;