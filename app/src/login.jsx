import "./register.css"

const Page = () => {
    const handleSubmit = (event) => {

    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                <label> password </label>
                <input type="password"/>
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Page;