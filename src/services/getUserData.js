export async function getData() {
    try {
        const result = await fetch("https://randomuser.me/api/?results=20") //for get method we dont need to write it.
        return await result.json()
    } catch (error) {
        console.error(error)
    }

}
