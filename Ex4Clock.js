
function info(){
    let clock = new Date()
    // console.log(clock)
    let hr = clock.getHours()
    let min = clock.getMinutes()
    let sec = clock.getSeconds()
    let date = clock.getDate()
    return [hr,min,sec,date]
}
ihtml = setInterval(() => {
    // console.log(info())
    let arr = info()
    
    cardContainer.innerHTML = `<div class="card mx-2 my-2" style="width: 22rem; background-color: darkslategray; color: white">
    <img src="clock.jpg" class="card-img-top" alt="" width=300px height=300px>
                    <div class="card-body">
                            <h5 class="card-title">Stay tuned!</h5>
                            <p>Hour:${arr[0]}  Min:${arr[1]}  Sec:${arr[2]}   Date:${arr[3]}</p>
                            
                    </div>
            </div>`
}, 1000);

// 

