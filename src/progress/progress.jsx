import React from 'react';

export function Progress() {

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
      console.log(jsonText); 
    } catch {
        console.log("error backing up body weight");
    } finally{
        locallyStoreWeight();
    }
}
getWeight();


  return (
    <main>
    <h1 class="day-label">Progress</h1>
    <div className="progress-graph">
        <label htmlFor="userweight">Your Weight</label><br/>
        <img src="https://th.bing.com/th/id/OIP.r0jVfIiUXQdABeF466jBYgHaEK?w=192&h=91&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Your weight graph" width={'100px'}/>
        <form id = "userWeight">
            <label htmlFor="new-user-weight">Current weight</label>
            <input id="new-user-weight" type="number"/>
            <input type="button" id="submit" onClick={()=>recordWeight()} value="Submit"/>
        </form>
    </div>
    </main>
  );
}