
export const getAdmin = async () => {
    const data = await fetch(`http://localhost:8080/api/admins`);
    return  data.json();
}

export const addAdmin = async (addData) => {
    if(!addData) return Promise.reject('No data to add');
    const data = await fetch(`http://localhost:8080/api/admins`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(addData)

    });

    return data.json();
}

export const deleteAdmin = async (id) => {
    if (!id) return Promise.reject('No id to delete');
    const data = await fetch(`http://localhost:8080/api/admins/${id}`, {
        method: 'DELETE',

    });

    return data;
}

export const updateAdmin = async (id,updateData) => {
    if(!id) return Promise.reject('No id to update');
    if(!updateData) return Promise.reject('No data to update');
    const data = await fetch(`http://localhost:8080/api/admins/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(updateData)


    });
    return  data.json();

}