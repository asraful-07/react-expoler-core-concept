export default function Friend({friend}){
    const {name, email, phone} = friend;
    console.log(friend)
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}