function Course(props){
    const c1=props.courses[0];
    const c2=props.courses[1];
    const c3=props.courses[2];
    const c4=props.courses[3];
    return(
        <div>
            <div>{c1}</div>
            <div>{c2}</div>
            <div>{c3}</div>
            <div>{c4}</div>
        </div>
        
    )
}
export default Course;