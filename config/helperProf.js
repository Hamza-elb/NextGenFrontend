
export const getProf = async () => {
    const data = await fetch(`http://localhost:8080/api/profs`);
    return  data.json();
}

export const addProf = async (addData) => {
    if(!addData) return Promise.reject('No data to add');
    const data = await fetch(`http://localhost:8080/api/profs`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(addData)

    });

    return data.json();
}

export const deleteProf = async (id) => {
    if(!id) return Promise.reject('No id to delete');
    const data = await fetch(`http://localhost:8080/api/profs/${id}`, {
        method: 'DELETE',

    });

    return data;
}

export const updateProf = async (id,updateData) => {
    if(!id) return Promise.reject('No id to update');
    if(!updateData) return Promise.reject('No data to update');
    const data = await fetch(`http://localhost:8080/api/profs/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(updateData)


    });
    return  data.json();

}