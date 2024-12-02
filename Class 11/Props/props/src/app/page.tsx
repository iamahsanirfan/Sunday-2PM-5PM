import Property from "./components/childComponent";

export default function Home() {
  let myName: string = "Ahsan Paracha";
  let favWrestler: string = "Roman Reigns";
  let favColor: string = "Black"

  return (
    <Property myName={myName} favWrestler={favWrestler} favColor={favColor}/>
  );
}