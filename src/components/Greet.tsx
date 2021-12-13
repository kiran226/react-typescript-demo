type GreetProps ={
    name :string,
    messageCount? :number,
    isloggedin :boolean
}

export const Greet = (props: GreetProps) => {
    const {messageCount =0} = props
    return (
        <div>
            <h2>
                {
                    props.isloggedin ? 
                    `Welcome ${props.name}, You have ${messageCount} unread messages` :
                    `Welcome Guest`
                 }
                </h2>
        </div>
    )
}
