type Props = {
    myName: string; // Define the 'name' prop as a string
    favWrestler: string
    favColor : string
  };


export default function Property(props: Props){
    return(
        <div>
        <h1>Hello my name is, {props.myName}</h1>
        <h1>My favorite Wrestler is, {props.favWrestler}</h1>
        <h1>My favorite color is, {props.favColor}</h1>
        </div>
    )
}