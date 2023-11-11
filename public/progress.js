function locallyStoreWeight(){
    let weightForm = document.getElementById("userWeight");
    localStorage.setItem("userWeight", weightForm.children[1].value);
}

async function recordWeight(){
    const weightForm = document.getElementById("userWeight");
    try{
        const response = await fetch('/api/post-body-weight', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: weightForm.children[1].value,
        });
        const newWeight = await response.json();
    } catch {
        console.log("error backing up body weight");
    } finally{
        this.locallyStoreWeight();
    }
}