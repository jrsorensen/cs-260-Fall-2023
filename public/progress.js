function locallyStoreWeight(){
    let weightForm = document.getElementById("userWeight");
    localStorage.setItem("userWeight", weightForm.children[1].value);
}

async function getWeight(){
    try{
        const response = await fetch('/progress');
        console.log(response);
    }catch{
        console.log("error getting weight");
    }
}

async function recordWeight(){
    const weightForm = document.getElementById("userWeight");
    try{
        const response = await fetch('/api/post-body-weight', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({weight : weightForm.children[1].value})
        });
        const jsonText = await response.json();

        /*  try{
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({userame : name, password : password})
      });
      const confirmation = await response.json();*/
      console.log(jsonText); 
    } catch {
        console.log("error backing up body weight");
    } finally{
        this.locallyStoreWeight();
    }
}
getWeight();