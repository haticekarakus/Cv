
function Information(props){
    const name=props.information.name;
    const email=props.information.email;
    const phoneNumber=props.information.phoneNumber;
    return(
        <div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
        </div>
    )
}
export default Information;