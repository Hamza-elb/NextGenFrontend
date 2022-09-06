
export const getUser = async () => {
    const data = await fetch(`http://localhost:8080/api/appusers`);
    return  data.json();
}

export const addUser = async (addData) => {
    if(!addData) return Promise.reject('No data to add');
    const data = await fetch(`http://localhost:8080/api/appusers`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(addData)

    });

    return data.json();
}

export const deleteUser = async (id) => {
    if(!id) return Promise.reject('No id to delete');
    const data = await fetch(`http://localhost:8080/api/appusers/${id}`, {
        method: 'DELETE',

    });

    return data;
}

export const updateUser = async (id,updateData) => {
    if(!id) return Promise.reject('No id to update');
    if(!updateData) return Promise.reject('No data to update');
    const data = await fetch(`http://localhost:8080/api/appusers/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(updateData)


    });
    return  data.json();

}