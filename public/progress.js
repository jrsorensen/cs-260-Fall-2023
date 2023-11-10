function recordWeight(){
    let weightForm = document.getElementById("userWeight");
    localStorage.setItem("userWeight", weightForm.children[1].value);
}