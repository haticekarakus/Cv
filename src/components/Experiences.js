import './Experience.css'
function Experiences(props){
    const e1=props.experiences[0];
    const e2=props.experiences[1];
    return(
        <div className="experience">
            <div>{e1}</div>
            <div>{e2}</div>
        </div>
    )
}
export default Experiences;