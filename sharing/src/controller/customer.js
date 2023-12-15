
const HOST = "http://localhost:3000"

const createCustomer = async (payload) => {
    let response = payload
    try {

        let url = HOST + "/customers"
        let res = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }
        )

    if(!res.status) {
        throw Error("failed to create customer")
    }

    response = await res.json()
    return response

    } catch (error) {
        console.log(error.message)
        return response
    }
}


const deleteCustomer = async (id) => {
    let response = null
    try {    
        let res = await fetch(HOST+"/customers/"+id,
            {
                method: "DELETE",
            }
        )
    if(!res.status) {
        throw Error("failed to delete customer")
    }

    response = await res.json()
    return response

    } catch (error) {
        console.log(error.message)
        return response
    }
}

const updateCustomer = async (payload) => {
    let response = payload
    try {
        let url = HOST+"/customers/"+ payload.id
        let res = await fetch(url,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }
        )

    if(!res.status) {
        throw Error("failed to update customer")
    }

    response = await res.json()
    return response

    } catch (error) {
        console.log(error.message)
        return response
    }
}
    

export default { createCustomer, updateCustomer, deleteCustomer}